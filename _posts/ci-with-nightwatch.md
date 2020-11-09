---
title: Rock solid end-to-end continuous integration with Nightwatch.js
description: Fill here
date: "2017-08-13T19:17:39.988Z"
categories: []
keywords: []
---

Recently, I’ve been working with a team that has been facing a lot of quality issues. Our product has many critical workflows and regressions due to misconfigurations are frequent. We have a team of testers who depend on manual testing for the most part. It has been very challenging for them to provide thorough, app-wide regression testing. This only got harder late into the project, with the workload increasing exponentially with every new feature. Our testers had elementary experience in writing Java Selenium tests. We wanted to leverage this and provide them a seamless path to writing automated tests. To ensure that they’re set up for success, it was very necessary to restrict complexity to a minimum.

## The search for an automation library

We wanted to stick to a Javascript library because our testers could soak up some knowledge from our developers. It would also benefit our developers because they would then be able to look at and analyze the test code.

Our criteria for picking up an automation library was very simple. We needed it to be battle tested, reliable and intuitive to pick up. Our final contenders were [Nightwatch](http://nightwatchjs.org/) and [Nightmare](http://www.nightmarejs.org/), and both of them looked solid. Nightmare seemed tempting as it arguably offered a better API than Nightwatch, with native support for promises and more. Since we wanted our tests to run on an actual browser instead of electron, we decided to go for Nightwatch. I think it was also because we felt Nightmare is a pretty horrible name for a library.

Nightwatch has great documentation for most of your needs [here](https://github.com/nightwatchjs/nightwatch-docs/tree/master/guide/). It also allows you to use Mocha as the test runner for all you Mocha fanboys. We initially tried using it, but we had to revert to using the native Nightwatch test runner — Mocha was unreliable on CI.

## The Setup

We wanted the Selenium and Chromedriver dependencies to be a part of the project so that it would involve no additional downloads to get the codebase up and running. Conveniently, we have standalone npm packages for both selenium and chromedriver.

```
npm install --save selenium-standalone-jar chromedriver
```

You can configure Nightwatch to use these dependencies in your nightwatch.json configuration.

```json
{
  "selenium": {
    "start_process": true,
    "server_path": "./node_modules/selenium-standalone-jar/bin/selenium-server-standalone-x.x.x.jar",
    "log_path": "",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./node_modules/chromedriver/bin/chromedriver"
    }
  }
}
```

I will skip over the part of explaining how to write test cases with the library as the documentation does an excellent job of explaining that.

## Making life easier for the testers

Nightwatch.js can be configured with useful defaults to make writing tests a lot easier. It also provides the ability to write custom commands and assertions that make your code more readable and easier to write. We set up some conservative global wait times for our tests as our website load times at this moment are a bit slow. You can configure this under the globals property in your nightwatch.json or set it up an external globals file.

```json
{
  "abortOnAssertionFailure": false,
  "waitForConditionPollInterval": 300,
  "waitForConditionTimeout": 10000,
  "retryAssertionTimeout": 5000
}
```

This would mean that you don’t really have to put in a millisecond timeout for all of your waits, which is really convenient.

```javascript
browser.url("http://www.google.com").waitForElementVisible("body"); // wait for 10000ms by default
```

We set up a couple of commands for frequently used actions like logging into the system.

A sample login command

Now that we have a custom command for this, it becomes a lot easier to write tests that are only meant for logged in users.

## Continuous Integration with CircleCI

No testing setup is complete without some continuous integration. CircleCI seemed to be obvious choice for us with a very generous free tier to validate our experiments. CircleCI version 2.0 offers significant improvements and has first-class support for Docker. We tried to use CircleCI’s Node.js images, but we realized that we need Java to get selenium to run. Because we did not have a Docker image that has browsers, Node.js and Java installed, I went ahead and created one that you can find [here](https://hub.docker.com/r/karthikiyengar/node-nightwatch/).

Our initial test suite contained around 30 tests. We found that it was taking around 10 minutes to execute on CircleCI, which was painfully slow. Nightwatch allows you to run multiple tests in parallel, but it turned out to be very unreliable. The test runs kept terminating without running all our assertions. We needed a reliable build system to ensure that our developers took a failing build seriously.

## Fixing Flaky Tests with Magellan

A bit of research led us to Walmart’s TestArmada Magellan. Surprisingly, this test runner has only 180 stars on Github. Magellan seemed to have great compatibility with Nightwatch. The documentation seemed to claim that all Nightwatch configurations are supported out of the box. Seemed like a perfect match.

npm install --save testarmada-magellan testarmada-magellan-local-executor testarmada-magellan-nightwatch-plugin

We set up our magellan.json config file in the root directory.

```json
{
  "framework": "testarmada-magellan-nightwatch-plugin",
  "max_workers": 10,
  "max_test_attempts": 3,
  "executors": ["testarmada-magellan-local-executor"]
}
```

This Magellan config runs your tests in up to 10 independent browser windows, resulting in blazing fast tests. It has a solid retry mechanism for re-executing failing tests. We cut down our build time from 10 minutes to 3 minutes for 30 test cases.

We configured our CircleCI config.yml to execute our tests with Magellan on every commit.

## Setting up a nightly build

We wanted to also trigger a nightly build to ensure that our code repository is not messed up. We set up an additional job in our config.yml for a more comprehensive build. You can do that too by adding another key in the jobs property of your config.yml. You can use the same config as the build job as a reference and modify the run command to run whatever you want to run (gulp, grunt, webpack, etc.).

Let’s trigger the build at 12:00 AM daily by using a cron job on a server. After all, servers don’t have to sleep. Generate an API token using the CircleCI dashboard and edit your cron jobs by using _crontab -e_ on your server. Add a cron job like so.

```
0 0 * * * /usr/bin/curl -s -X POST 'https://circleci.com/api/v1.1/project/{github or bitbucket}/{vcs-account}/{repo-name}/tree/{vcs-branch}?circle-token={circleci-token}' -H 'content-type: multipart/form-data' -F 'build_parameters[CIRCLE_JOB]={your-circleci-job}'
```

Throw some Slack integration in and you’ve got yourself a solid safety net for regressions. Remember, a wise man once said — uneasy lies the head that has no automated tests.
