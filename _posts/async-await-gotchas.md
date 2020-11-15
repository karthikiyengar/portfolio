---
title: JavaScript Async/Await Gotchas
description: A few things I struggled with when I started using async await
date: "2017-08-13T19:17:39.988Z"
categories: []
keywords: []
---

I love `async`/`await` and I cannot lie. Unfortunately, I don’t have the concentration chops to trace callback chains. And I’ve also had the nuances of exception handling in promises lead me to pain and ruin. Async/Await has been there for a while, and it’s becoming harder to find reasons to not use it. This article focuses on a few things I struggled to understand when I started using it

## An Async Function Always Returns a Promise

Think of an `async` function as a promise generator. Any value returned by an `async` function gets wrapped in a `Promise.resolve()` — unless it’s already a promise of course. That’d just be wasteful.

```javascript
const assert = require("assert");

const meaningOfLife = async () => 42;
assert.equal(meaningOfLife() instanceof Promise, true);

// empty functions return promises that resolve with undefined
async function noMeaningOfLife() {}
assert.equal(noMeaningOfLife() instanceof Promise, true);
```

But what happens when you `await` an async function that returns a `Promise` that return a `Promise`?

```javascript
const assert = require("assert");

// overkill, but you get the point
async function promiseReturner() {
  return Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(42))));
}

// we use an async IIFE to await our promise
(async function() {
  assert.equal(await promiseReturner(), 42);
})();
```

The `await` keyword here takes its job seriously. It will wait for as long it takes for all promises to resolve and return a value.

So two things:

- Don’t return values from `async` functions in the following manner:

  ```javascript
      async function() { return await somePromiseHere }
  ```

  This will wait for the promise first and then rewrap it in a `Promise.resolve()` unnecessarily.

- Although it might be tempting to add an `async` to every function, avoid using it for non-asynchronous purposes. Promises resolve in the next tick and may potentially slow your code down.

## Callbacks can be Confusing

If you’re new to `async`/`await`, the callback behaviour is a bit strange to comprehend. We will use the following function to run a couple of experiments. The function takes a number, adds 10 to it and gives it back after a second.

```javascript
async function addTenAndReturnNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number + 10);
    }, 1000);
  });
}
```

First, let’s try to use `map` with our function.

```javascript
(async function() {
  // notice that we have to mark the callback function as async too
  // map((number) => {...}) will throw an "Unexpected Token" error on the await keyword
  const result = [41, 42, 43].map(async (number) => {
    return await addTenAndReturnNumber(number);
  });
  console.log(result);
})();
```

What would you expect result to evaluate to?

If you expected `51, 52, 53`, then tough luck — you weren’t paying attention in the previous section. The `map` callback is an `async` function and remember — `async` functions always return promises. We receive a `[Promise {}, Promise {}, Promise {}]`. What we could do is wait for all of these promises using `await` [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)(result) to get what we desire.

Let’s try another one.

```javascript
(async function() {
  let variable;
  const result = [41, 42, 43].forEach(async (number) => {
    variable = await addTenAndReturnNumber(number);
  });
  console.log(variable);
})();
```

In this case, we would receive an `undefined` and not `53` instead. This is because when you use `await` pauses only the `async` function that is **immediately surrounding** it. By that time, the main thread has moved on to the `console.log` line which returns an `undefined`.

A solution would be to use a `for...of` loop instead. This will pause the outer IIFE and hence, result in our expected output of `53`.

```javascript
(async function() {
  let variable;
  for (number of [41, 42, 43]) {
    variable = await addTenAndReturnNumber(number);
  }
  console.log(variable); // 53
})();
```

## Avoid Sequential Execution

When I was new to the async-await business, I couldn’t resist using `await` with every promise that I could get my hands on. My naiveness convinced me that the asynchronous nature of JavaScript would magically parallelise everything. But alas, await/await is nothing but plain old promises in a sexier dress. Consider the following piece of code, where the find function returns a promise that fetches something from a database.

```javascript
async function getAnimals() {
  const cats = await Dogs.find({});
  const dogs = await Cats.find({});
  return {
    cats,
    dogs,
  };
}
```

These two functions would be executed one after the other, but we could parallelise them to get things done faster (if they are not dependent on each other). There are two ways to do this. The first way would be to use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

```javascript
async function getAnimals() {
  const [cats, dogs] = await Promise.all([Dogs.find({}), Cats.find({})]);
  return {
    cats,
    dogs,
  };
}
```

We could also do this by invoking the promises first, and then awaiting their results.

```javascript
async function getAnimals() {
  const dogs = Dogs.find({});
  const cats = Cats.find({});
  return {
    dogs: await dogs,
    cats: await cats,
  };
}
```

As a bonus tip, try to avoid awaiting operations of which the results you don’t care about to speed up response times.

Now, go forth and shine. Asynchronous glory awaits you.
