import { BeforeAll, Before, BeforeStep, AfterStep, After, AfterAll, Status } from '@cucumber/cucumber';
import AllureReporter from '@wdio/allure-reporter';
import {browser} from '@wdio/globals';

// Runs once before all scenarios
BeforeAll(function () {
  console.log(">>> BeforeAll: Runs once before everything");
});

// Runs before each scenario
Before(function (scenario) {
  console.log(">>> Before: Runs before each scenario");
  console.log(`Scenario name: ${scenario.pickle.name}`);
  const labelValue = process.env.LABEL;

  if (labelValue) {
    AllureReporter.addTag('customLabel', labelValue);
    console.log(`Added label: customLabel = ${labelValue}`);
  }
});



// Runs before each step
BeforeStep(function (step) {
  console.log(">>> BeforeStep: Before each step");
});

// Runs after each step
AfterStep(async function (step) {
  console.log(">>> AfterStep: After each step");
  console.log(">>>>>>>>>>>>>>>>>>>>>>>.step result: ", step.result?.status);
  if (step.result?.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    await AllureReporter.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
  }
});

// Runs after each scenario
After(function (scenario) {
  console.log(">>> After: Runs after each scenario");
  console.log(`Scenario status: ${scenario.result?.status}`);
});

// Runs once after all scenarios
AfterAll(function () {
  console.log(">>> AfterAll: Runs once after everything");
});