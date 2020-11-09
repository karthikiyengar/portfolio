---
title: JavaScript Async/Await Gotchas
description: Fill here
date: "2017-08-13T19:17:39.988Z"
categories: []
keywords: []
---

I love async-await and I cannot lie. Unfortunately, I don’t have the concentration chops to trace callback chains. And I’ve also had the nuances of exception handling in promises lead me to pain and ruin. Async/Await has been there for a while, and it’s becoming harder to find reasons to not use it. This article focuses on a few things I struggled to understand when I started using it

## An Async Function Always Returns a Promise

Think of an async function as a promise generator. Any value returned by an async function gets wrapped in a Promise.resolve() — unless it’s already a promise of course. That’d just be wasteful.

<iframe src="https://medium.com/media/1a4257e64129048af845cb4234a2429b" frameborder=0></iframe>

But what happens when you await an async function that returns a Promise that return a promise?

<iframe src="https://medium.com/media/fd8188a463aae8001c5be755d8a3481f" frameborder=0></iframe>

The await keyword here takes it’s job seriously. It will wait for as long it takes for all promises to resolve and return a value.

So two things.

- Don’t return values from async functions in the following manner: async function() { return await somePromiseHere } — this will wait for the promise first and then rewrap it in a Promise.resolve() unnecessarily.

- Although it might be tempting to add an async to every function, avoid using it for non-asynchronous purposes. Promises resolve in the next tick and may potentially slow your code down.

## Callbacks can be Confusing

If you’re new to async await, the callback behaviour is a bit strange to comprehend. We will use the following function to run a couple of experiments. The function takes a number, adds 10 to it and gives it back after a second.

<iframe src="https://medium.com/media/b75b531d5f01edf731616a72142d9cc3" frameborder=0></iframe>

First, let’s try to use map with our function.

<iframe src="https://medium.com/media/6299c36e8cd107dc5d02b8b7546047c5" frameborder=0></iframe>

What would you expect result to evaluate to?

If you expected 51, 52, 53, then congratulations — you weren’t paying attention in the previous section. The map callback is an async function and remember — async functions always return promises. We receive a [Promise {}, Promise {}, Promise {}]. What we could do is wait for all of these promises using await [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)(result) to get what we desire.

Let’s try another one.

<iframe src="https://medium.com/media/28d01fd925c55c386d89f5c1ff489e2b" frameborder=0></iframe>

In this case, we would receive an undefined and not 53 instead. This is because when you use await pauses only the async function that is **immediately surrounding** it. By that time, the main thread has moved on to the console.log line which returns an undefined.

A solution would be to use a for...of loop instead. This will pause the outer IIFE and hence, result in our expected output of 53.

<iframe src="https://medium.com/media/addcb98808a3f83c87856de45ae34383" frameborder=0></iframe>

## Avoid Sequential Execution

When I was new to the async-await business, I couldn’t resist using await with every promise that I could get my hands on. My naiveness convinced me that the asynchronous nature of JavaScript would magically parallelise everything. But alas, await/await is nothing but plain old promises in a sexier dress. Consider the following piece of code, where the find function returns a promise that fetches something from a database.

<iframe src="https://medium.com/media/ac1e7fe75fe942191bd9a475f7ab08bf" frameborder=0></iframe>

These two functions would be executed one after the other, but we could parallelise them to get things done faster (if they are not dependent on each other). There are two ways to do this. The first way would be to use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

<iframe src="https://medium.com/media/25b3b34a21ccfc324f4d3abf6b58b104" frameborder=0></iframe>

We could also do this by invoking the promises first, and then awaiting their results.

<iframe src="https://medium.com/media/6a0ac6ee32a7be2d59a39f60d63b303f" frameborder=0></iframe>

As a bonus tip, try to avoid awaiting operations of which the results you don’t care about to speed up response times.

Now, go forth and shine. Asynchronous glory awaits you.
