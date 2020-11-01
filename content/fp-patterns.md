---
title: "Functional Programming Patterns: A Cookbook"
date: "2020-01-07"
---

// TODO: Update link
This article targets an audience that’s graduating from functional libraries like `ramda` to using Algebraic Data Types. We’re using the excellent `crocks` library for our ADTs and helpers, although these concepts may apply to other ones as well. We’ll be focusing on demonstrating practical applications and patterns without delving into a lot of theory.

## Safely Executing Dangerous Functions

Let’s say we have a situation where we want to use a function called `darken` from a third-party library. `darken` takes a multiplier, a color and returns a darker shade of that color.

```javascript
// darken :: Number -> String -> String
darken(0.1)("gray");
//=> "#343434"
```

Pretty handy for our CSS needs. But it turns out that the function is not as innocent as it seems. `darken` throws errors when it receives unexpected arguments!

```javascript
darken(0.1)(null)
=> // Error: Passed an incorrect argument to a color function, please pass a string representation of a color.
```

This is, of course, very helpful for debugging — but we wouldn’t want our application to blow up just because we couldn’t derive a color. Here’s where `tryCatch` comes to the rescue.

```javascript
import { darken } from "polished";
import { tryCatch, compose, either, constant, identity, curry } from "crocks";

// safeDarken :: Number -> String -> String
const safeDarken = curry((n) =>
  compose(
    either(constant("inherit"), identity),
    tryCatch(darken(n))
  )
);
```

`tryCatch` executes the provided function within a try-catch block and returns a Sum Type called `Result`. In its essence, a Sum Type is basically an “or” type. This means that the `Result` could be either an `Ok` if an operation is successful or an `Error` in case of failures. Other examples of Sum Types include `Maybe`, `Either`, `Async` and so on. The `either` point-free helper breaks the value out of the `Result` box, and returns the CSS default `inherit` if things went south or the darkened color if everything went well.

```javascript
safeDarken(0.5)(null);
//=> inherit

safeDarken(0.25)("green");
//=> '#004d00'
```

## Enforcing Types using `Maybe` Helpers

With JavaScript, we often run into cases where our functions explode because we’re expecting a particular data type, but we receive a different one instead. `crocks` provides the `safe`, `safeAfter` and `safeLift` functions that allow us to execute code more predictably by using the `Maybe` type. Let’s look at a way to convert camelCased strings into Title Case.

```javascript
import {
  safeAfter,
  safeLift,
  isArray,
  isString,
  map,
  compose,
  option,
} from "crocks";

// match :: Regex -> String -> Maybe [String]
const match = (regex) => safeAfter(isArray, (str) => str.match(regex));

// join :: String -> [String] -> String
const join = (separator) => (array) => array.join(separator);

// upperFirst :: String -> String
const upperFirst = (x) =>
  x
    .charAt(0)
    .toUpperCase()
    .concat(x.slice(1).toLowerCase());

// uncamelize :: String -> Maybe String
const uncamelize = safeLift(
  isString,
  compose(
    option(""),
    map(
      compose(
        join(" "),
        map(upperFirst)
      )
    ),
    match(/(((^[a-z]|[A-Z])[a-z]\*)|[0-9]+)/g)
  )
);

uncamelize("rockTheCamel");
//=> Just "Rock The Camel"

uncamelize({});
//=> Nothing
```

We’ve created a helper function match that uses `safeAfter` to iron out `String.prototype.match`’s behavior of returning an `undefined` in case there are no matches. The `isArray` predicate ensures that we receive a `Nothing` if there are no matches found, and a `Just [String]` in case of matches. `safeAfter` is great for executing existing or third-party functions in a reliable safe manner.

(Tip: `safeAfter` works really well with `ramda` functions that return `a | undefined`.)

Our uncamelize function is executed with `safeLift(isString)` which means that it’ll only execute when the input returns `true` for the `isString` predicate.

In addition to this, `crocks` also provides the `prop` and `propPath` helpers which allow you to pick properties from `Objects` and `Arrays`.

```javascript
import { prop, propPath, map, compose } from "crocks";

const goodObject = {
  name: "Bob",
  bankBalance: 7999,
  address: {
    city: "Auckland",
    country: "New Zealand",
  },
};

prop("name")(goodObject);
//=> Just "Bob"
propPath(["address", "city"])(goodObject);
//=> Just "Auckland"

// getBankBalance :: Object -> Maybe String
const getBankBalance = compose(
  map((balance) => balance.toFixed(2)),
  prop("bankBalance")
);

getBankBalance(goodObject);
//=> Just '7999.00'
getBankBalance({});
//=> Nothing
```

This is great, especially if we’re dealing with data from side-effects that are not under our control like API responses. But what happens if the API developers suddenly decide to handle formatting at their end?

```javascript
const badObject = {
  name: "Rambo",
  bankBalance: "100.00",
  address: {
    city: "Hope",
    country: "USA",
  },
};

getBankBalance(badObject); // TypeError: balance.toFixed is not a function :-(
```

Runtime errors! We tried to invoke the `toFixed` method on a `String`, which doesn’t really exist. We need to make sure that `bankBalance` is really a `Number` before we invoke `toFixed` on it. Let’s try to solve it with our `safe` helper.

```javascript
import { prop, propPath, compose, map, chain, safe, isNumber } from "crocks";

// getBankBalance :: Object -> Maybe String
const getBankBalance = compose(
  map((balance) => balance.toFixed(2)),
  chain(safe(isNumber)),
  prop("bankBalance")
);

getBankBalance(badObject); //=> Nothing
getBankBalance(goodObject); //=> Just '7999.00'
```

We pipe the results of the `prop` function to our `safe(isNumber)` function which also returns a `Maybe`, depending on whether the result of `prop` satisfies the predicate. The pipeline above guarantees that the last `map` which contains the `toFixed` will only be called when `bankBalance` is a `Number`.

If you’re going to be dealing with a lot of similar cases, it would make sense to extract this pattern into a helper:

```javascript
import { Maybe, ifElse, prop, chain, curry, compose, isNumber } from "crocks";

const { of, zero } = Maybe;

// propIf :: (a -> Boolean) -> [String | Number] -> Maybe a
const propIf = curry((fn, path) =>
  compose(
    chain(ifElse(fn, of, zero)),
    prop(path)
  )
);

propIf(isNumber, "age", goodObject);
//=> Just 7999
propIf(isNumber, "age", badObject);
//=> Nothing
```

## Using Applicatives to keep Functions Clean

Often times, we find ourselves in situations where we would want to use an existing function with values wrapped in a container. Let’s try to design a safe add function that allows only numbers, using the concepts from the previous section. Here’s our first attempt.

```javascript
import { Maybe, safe, isNumber } from "crocks";

// safeNumber :: a -> Maybe a
const safeNumber = safe(isNumber);

// add :: a -> b -> Maybe Number
const add = (a, b) => {
  const maybeA = safeNumber(a);
  const maybeB = safeNumber(b);

  return maybeA.chain((valA) => maybeB.map((valB) => valA + valB));
};

add(1, 2);
//=> Just 3

add(1, {});
//=> Nothing
```

This does exactly what we need, but our add function is no longer a simple `a + b`. It has to first lift our values into `Maybe`s, then reach into them to access the values, and then return the result. We need to find a way to preserve the core functionality of our add function while allowing it to work with values contained in ADTs! Here’s where Applicative Functors come in handy.

An Applicative Functor is just a like a regular functor, but along with map, it also implements two additional methods:

```haskell
of :: Applicative f => a -> f a
```

The `of` is a completely dumb constructor, and lifts any value that you give it into our data type. It’s also referred to as `pure` in other languages.

```javascript
Maybe.of(null);
//=> Just null

Const.of(42);
//=> Const 42
```

And here’s where all the money is — the `ap` method:

```haskell
ap :: Apply f => f a ~> f (a -> b) -> f b
```

The signature looks very similar to map, with the only difference being that our `a -> b` function is also wrapped in an `f`. Let’s see this in action.

```javascript
import { Maybe, safe, isNumber } from "crocks";

// safeNumber :: a -> Maybe a
const safeNumber = safe(isNumber);

// add :: a -> b -> c
const add = (a) => (b) => a + b;

// add :: a -> b -> Maybe Number
const safeAdd = (a, b) =>
  Maybe.of(add)
    .ap(safeNumber(a))
    .ap(safeNumber(b));

safeAdd(1, 2);
//=> Just 3

safeAdd(1, "danger");
//=> Nothing
```

We first lift our curried `add` function into a `Maybe`, and then apply `Maybe a` and `Maybe b` to it. We’ve been using `map` so far to access the value inside a container and `ap` is no different. Internally, it maps on `safeNumber(a)` to access the `a` and applies it to `add`. This results in a `Maybe` that contains a partially applied `add`. We repeat the same process with `safeNumber(b)` to execute our `add` function, resulting in a `Just` of the result if both `a` and bare valid or a `Nothing` otherwise.

Crocks also provides us the `liftA2` and liftN helpers to express the same concept in a pointfree manner. A trivial example follows:

```javascript
liftA2(add)(Maybe(1))(Maybe(2));
//=> Just 3
```

// TODO: Update link
We shall use this helper extensively in the section `Expressing Parallelism`.

Tip: Since we’ve observed that `ap` uses map to access values, we can do cool things like generating a Cartesian product when given two lists.

```javascript
import { List, Maybe, Pair, liftA2 } from "crocks";

const names = List(["Henry", "George", "Bono"]);
const hobbies = List(["Music", "Football"]);

List((name) => (hobby) => Pair(name, hobby))
  .ap(names)
  .ap(hobbies);
// => List [ Pair( "Henry", "Music" ), Pair( "Henry", "Football" ),
// Pair( "George", "Music" ), Pair( "George", "Football" ),
// Pair( "Bono", "Music" ), Pair( "Bono", "Football" ) ]
```

## Using Async for Predictable Error Handling

// TODO: Update link
`crocks` provides the `Async` data type that allows us to build lazy asynchronous computations. To know more about it, you can refer to the extensive official documentation here. This section aims to provide examples of how we can use `Async` to improve the quality of our error reporting and make our code resilient.

Often, we run into cases where we want to make API calls that depend on each other. Here, the `getUser` endpoint returns a user entity from GitHub and the response contains a lot of embedded URLs for repositories, stars, favorites and so on. We will see how we can design this use case with using `Async`.

```javascript
import {
  Async,
  prop,
  compose,
  chain,
  safe,
  isString,
  maybeToAsync,
} from "crocks";

const { fromPromise } = Async;

// userPromise :: String -> Promise User Error
const userPromise = (user) =>
  fetch(`https://api.github.com/users/${user}`).then((res) => res.json());

// resourcePromise :: String -> Promise Resource Error
const resourcePromise = (url) => fetch(url).then((res) => res.json());

// getUser :: String -> Async User Error
const getUser = compose(
  chain(fromPromise(userPromise)),
  maybeToAsync("getUser expects a string"),
  safe(isString)
);

// getResource :: String -> Object -> Async Resource Error
const getResource = (path) => (user) => {
  if (!isString(path)) {
    return Async.Rejected("getResource expects a string");
  }
  return maybeToAsync(
    "Error: Malformed user response received",
    prop(path, user)
  ).chain(fromPromise(resourcePromise));
};

// logError :: (...a) -> IO()
const logError = (...args) => console.log("Error: ", ...args);

// logResponse :: (...a) -> IO()
const logSuccess = (...args) => console.log("Success: ", ...args);

getUser("octocat")
  .chain(getResource("repos_url"))
  .fork(logError, logSuccess);
//=> Success: { ...response }

getUser(null)
  .chain(getResource("repos_url"))
  .fork(logError, logSuccess);
//=> Error: The user must be as string

getUser("octocat")
  .chain(getResource(null))
  .fork(logError, logSuccess);
//=> Error: getResource expects a string

getUser("octocat")
  .chain(getResource("unknown_path_here"))
  .fork(logError, logSuccess);
//=> Error: Malformed user response received
```

The usage of the `maybeToAsync` transformation allows us to use all of the safety features that we get from using `Maybe` and bring them to our `Async` flows. We can now flag input and other errors as a part of our `Async` flows.

## Using Monoids Effectively

We’ve already been using Monoids when we perform operations like String/Array concatenation and number addition in native JavaScript. It’s simply a data type that offers us the following methods.

```haskell
concat :: Monoid m => m a -> m a -> m a
```

concat allows us to combine two Monoids of the same type together with a pre-specified operation.

```haskell
empty :: Monoid m => () => m a
```

The empty method provides us with an identity element, that when concat ed with other Monoids of the same type, would return the same element. Here’s what I’m talking about.

```javascript
import { Sum } from "crocks";

Sum.empty();
//=> Sum 0

Sum(10).concat(Sum.empty());
//=> Sum 10

Sum(10).concat(Sum(32));
//=> Sum 42
```

By itself, this doesn’t look very useful, but crocks provides some additional Monoids along with helpers mconcat, mreduce, mconcatMap and mreduceMap.

```javascript
import { Sum, mconcat, mreduce, mconcatMap, mreduceMap } from "crocks";

const array = [1, 3, 5, 7, 9];

const inc = (x) => x + 1;

mconcat(Sum, array);
//=> Sum 25

mreduce(Sum, array);
//=> 25

mconcatMap(Sum, inc, array);
//=> Sum 30

mreduceMap(Sum, inc, array);
//=> 30
```

The mconcat and mreduce methods take a Monoid and a list of elements to work with, and apply concat to all of their elements. The only difference between them is that mconcat returns an instance of the Monoid while mreduce returns the raw value. The mconcatMap and mreduceMap helpers work in the same way, except that they accept an additional function that is used to map over every element before calling concat.

Let’s look at another example of a Monoid from crocks, the First Monoid. When concatenating, First will always return the first, non-empty value.

```javascript
import { First, Maybe } from "crocks";

First(Maybe.zero())
  .concat(First(Maybe.zero()))
  .concat(First(Maybe.of(5)));
//=> First (Just 5)

First(Maybe.of(5))
  .concat(First(Maybe.zero()))
  .concat(First(Maybe.of(10)));
//=> First (Just 5)
```

Using the power of First, let’s try creating a function that attempts to get the first available property on an object.

```javascript
import { curry, First, mreduceMap, flip, prop, compose } from "crocks";

/** tryProps -> a -> [String] -> Object -> b */
const tryProps = flip((object) => mreduceMap(First, flip(prop, object)));

const a = {
  x: 5,
  z: 10,
  m: 15,
  g: 12,
};

tryProps(["a", "y", "b", "g"], a);
//=> Just 12

tryProps(["a", "b", "c"], a);
//=> Nothing

tryProps(["a", "z", "c"], a);
//=> Just 10
```

Pretty neat! Here’s another example that tries to create a best-effort formatter when provided different types of values.

```javascript
import {
  applyTo, mreduceMap, isString, isEmpty, mreduce, First, not, isNumber, chain
  compose, safe, and, constant, Maybe, map, equals, ifElse, isBoolean, option,
} from "crocks";

// isDate :: a -> Boolean
const isDate = x => x instanceof Date;

// lte :: Number -> Number -> Boolean
const lte = x => y => y <= x;

// formatBoolean :: a -> Maybe String
const formatBoolean = compose(
  map(ifElse(equals(true), constant("Yes"), constant("No"))),
  safe(isBoolean)
);

// formatNumber :: a -> Maybe String
const formatNumber = compose(
  map(n => n.toFixed(2)),
  safe(isNumber)
);

// formatPercentage :: a -> Maybe String
const formatPercentage = compose(
  map(n => n + "%"),
  safe(and(isNumber, lte(100)))
);

// formatDate :: a -> Maybe String
const formatDate = compose(
  map(d => d.toISOString().slice(0, 10)),
  safe(isDate)
);

// formatString :: a -> Maybe String
const formatString = safe(isString)

// autoFormat :: a -> Maybe String
const autoFormat = value =>
  mreduceMap(First, applyTo(value), [
    formatBoolean,
    formatPercentage,
    formatNumber,
    formatDate,
    formatString
  ]);

autoFormat(true)
//=> Just "Yes"

autoFormat(10.02)
//=> Just "10%"

autoFormat(255)
//=> Just "255.00"

autoFormat(new Date())
//=> Just "2019-01-14"

autoFormat("YOLO!")
//=> Just "YOLO!"

autoFormat(null)
//=> Nothing
```

## Expressing Parallelism in a Pointfree manner

We might run into cases where want to perform multiple operations on a single piece of data and combine the results in some way. crocks provides us with two methods to achieve this. The first pattern leverages Product Types Pair and Tuple. Let’s look at a small example where we have an object that looks like this:

```
{ ids: [11233, 12351, 16312], rejections: [11233] }
```

We would like to write a function that accepts this object and returns an Array of ids excluding the rejected ones. Our first attempt in native JavaScript would look like this:

```javascript
const getIds = (object) =>
  object.ids.filter((x) => object.rejections.includes(x));
```

This of course works, but it would explode in case one of the properties is malformed or is not defined. Let’s make getIds return a Maybe instead. We use fanout helper that accepts two functions, runs it on the same input and returns a Pair of the results.

```javascript
import { prop, compose, equals, filter, fanout, merge, liftA2 } from "crocks"

/\*\*

- object :: Record
- Record :: {
- ids: [Number]
- rejection: [Number]
- }
  \*\*/
  const object = { ids: [11233, 12351, 16312], rejections: [11233] }

// excludes :: [a] -> [b] -> Boolean
const excludes = x => y => !x.includes(y)

// difference :: [a] -> [a] -> [a]
const difference = compose(filter, excludes)

// getIds :: Record -> Maybe [Number]
const getIds = compose(
merge(liftA2(difference)),
fanout(prop("rejections"), prop("ids"))
)

getIds(object)
//=> Just [ 12351, 16312 ]

getIds({ something: [], else: 5 })
//=> Nothing
```

One of the main benefits of using the pointfree approach is that it encourages us to break our logic into smaller pieces. We now have the reusable helper difference (with liftA2, as seen previously) that we can use to merge both halves the Pair together.

The second method would be to use the converge combinator to achieve similar results. converge takes three functions and an input value. It then applies the input to the second and third function and pipes the results of both into the first. Let’s use it to create a function that normalizes an Arrayof objects based on their ids. We will use the Assign Monoid that allows us to combine objects together.

```javascript
import {
  mreduceMap,
  applyTo,
  option,
  identity,
  objOf,
  map,
  converge,
  compose,
  Assign,
  isString,
  constant,
} from "crocks";
import propIf from "./propIf";

// normalize :: String -> [Object] -> Object
const normalize = mreduceMap(
  Assign,
  converge(
    applyTo,
    identity,
    compose(
      option(constant({})),
      map(objOf),
      propIf(isString, "id")
    )
  )
);

normalize([{ id: "1", name: "Kerninghan" }, { id: "2", name: "Stallman" }]);
//=> { 1: { id: '1', name: 'Kerninghan' }, 2: { id: '2', name: 'Stallman' } }

normalize([
  { id: null },
  { id: "1", name: "Knuth" },
  { totally: "unexpected" },
]);
//=> { 1: { id: '1', name: 'Knuth' } }
```

## Using Traverse and Sequence to Ensure Data Sanity

We’ve seen how to use Maybe and friends to ensure that we’re always working with the types we expect. But what happens when we’re working with a type that contains other values, like an Array or a List for example? Let’s look at a simple function that gives us the total length of all strings contained within an Array.

```javascript
import { compose, safe, isArray, reduce, map } from "crocks";

// sum :: [Number] -> Number
const sum = reduce((a, b) => a + b, 0);

// length :: [a] -> Number
const length = (x) => x.length;

// totalLength :: [String] -> Maybe Number
const totalLength = compose(
  map(sum),
  map(map(length)),
  safe(isArray)
);

const goodInput = ["is", "this", "the", "real", "life?"];
totalLength(goodInput);
//=> Just 18

const badInput = { message: "muhuhahhahahaha!" };
totalLength(badInput);
//=> Nothing
```

Great. We’ve made sure our function always returns a Nothing if it doesn’t receive an Array. Is this enough, though?

```javascript
totalLength(["stairway", "to", undefined]);
//=> TypeError: x is undefined
```

Not really. Our function doesn’t guarantee that the contents of the list won’t hold any surprises. One of the ways we could solve this would be to define a safeLength function that only works with strings:

```javascript
// safeLength :: a -> Maybe Number
const safeLength = safeLift(isString, length);
```

If we use safeLength instead of length as our mapping function, we would receive a [Maybe Number] instead of a [Number] and we cannot use our sumfunction anymore. Here’s where sequence comes in handy.

```javascript
import { sequence, Maybe, Identity } from "crocks";

sequence(Maybe, Identity(Maybe.of(1)));
//=> Just Identity 1

sequence(Array, Identity([1, 2, 3]));
//=> [ Identity 1, Identity 2, Identity 3 ]

sequence(Maybe, [Maybe.of(4), Maybe.of(2)]);
//=> Just [ 4, 2 ]

sequence(Maybe, [Maybe.of(4), Maybe.zero()]);
//=> Nothing
```

sequence helps swap the inner type with the outer type while performing a certain effect, given that the inner type is an Applicative. The sequence on Identity is pretty dumb — it just maps over the inner type and returns the contents wrapped in an Identity container. For List and Array, sequenceuses reduce on the list to combine its contents using ap and concat. Let’s see this in action in our refactored totalLength implementation.

```javascript
// totalLength :: [String] -> Maybe Number
const totalLength = compose(
  map(sum),
  chain(sequence(Maybe)),
  map(map(safeLength)),
  safe(isArray)
);

const goodString = ["is", "this", "the", "real", "life?"];
totalLength(goodString);
//=> Just 18

totalLength(["stairway", "to", undefined]);
//=> Nothing
```

Great! We’ve built a completely bulletproof totalLength. This pattern of mapping over something from a -> m b and then using sequence is so common that we have another helper called traverse which performs both operations together. Let’s see how we can use traverse instead of sequence in the above example.

```javascript
// totalLengthT :: [String] -> Maybe Number
const totalLengthT = compose(
  map(sum),
  chain(traverse(Maybe, safeLength)),
  safe(isArray)
);
```

There! It works exactly the same way. If we think about it, our sequenceoperator is basically traverse, with an identity as the mapping function.

Note: Since we cannot infer inner type using JavaScript, we have to explicitly provide the type constructor as the first argument to traverse and sequence.

It’s easy to see how sequence and traverse are invaluable for validating data. Let’s try to create a generic validator that takes a schema and validates an input object. We’ll use the Result type, which accepts a Semigroup on the left side that allows us to collect errors. A Semigroup is similar to a Monoid and it defines a concat method — but unlike the Monoid, it doesn’t require the presence of the empty method. We’re also introducing the transformation function maybeToResult below, that’ll help us interoperate between Maybe and Result.

```javascript
import {
Result, isString, map, merge, constant, bimap, flip, propOr, identity,
toPairs, safe, maybeToResult, traverse, and, isNumber, compose
} from "crocks"

// length :: [a] -> Int
const length = x => x.length

// gte :: Number -> a -> Result String a
const gte = x => y => y >= x

// lte :: Number -> a -> Result String a
const lte = x => y => y <= x

// isValidName :: a -> Result String a
const isValidName = compose(
maybeToResult("expected a string less than 20 characters"),
safe(and(compose(lte(20), length), isString))
)

// isAdult :: a -> Result String a
const isAdult = compose(
maybeToResult("expected a value greater than 18"),
safe(and(isNumber, gte(18)))
)

/\*\*

- schema :: Schema
- Schema :: {
- [string]: a -> Result String a
- }
- \*/
  const schema = {
  name: isValidName,
  age: isAdult,
  }

// makeValidator :: Schema -> Object -> Result [String] Object
const makeValidator = flip(object =>
compose(
map(constant(object)),
traverse(Result, merge((key, validator) =>
compose(
bimap(error => [`${key}: ${error}`], identity),
validator,
propOr(undefined, key)
)(object)
)
),
toPairs
)
)

// validate :: Object -> Result [String] Object
const validate = makeValidator(schema)

validate(({
name: "Car",
age: 21,
}))
//=> Ok { name: "Car", age: 21 }

validate(({
name: 7,
age: "Old",
}))
//=> Err [ "name: expected a string less than 20 characters", "age: expected a value greater than 18" ]
```

Since we’ve flipped the makeValidator function to make more suitable for currying, our compose chain receives the schema that we need to validate against first. We first break the schema into key-value Pairs, and pass the value of each property to it’s corresponding validation function. In case the function fails, we use bimap to map on the error, add some more information to it, and return it as a singleton Array. traverse will then concat all the errors if they exist, or return the original object if it’s valid. We could have also returned a String instead of an Array, but an Arrayfeels much nicer.
