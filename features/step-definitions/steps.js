import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import AllureUtils from '../Utils/allureUtils.js';

const pages = {
    login: LoginPage
}
const allureUtils = new AllureUtils();
Given(/^I am on the (\w+) page$/, async (page) => {
    allureUtils.setFeature('Web Page Navigation');
    allureUtils.setEpic('User Authentication');
    allureUtils.setStory('Login Page Access');
    allureUtils.setSeverity('trivial');
    allureUtils.setTag('smoke');
    allureUtils.setOwner('QA Team');
    allureUtils.setTestType('regression');
    allureUtils.setLayer('e2e');
    allureUtils.addTextAttachment('Current Page', page);
    
    await pages[page].open()
});
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    allureUtils.setSeverity('blocker');
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

