const {test} = require('@playwright/test');
const { LoginPage } = require('../pageobjects/AutomationPractise.page');


test('Playwright automation series', async ({page}) => {
    
    const loginPage = new LoginPage(page); // object creation 
    await loginPage.goTo(); 

})