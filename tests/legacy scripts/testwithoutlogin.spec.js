const { test, expect } = require('@playwright/test');
import jobtitledata from '../../testData/addjobtitles.json'

test.describe('Test Suite without Login', () => {
    test('add jobtitle', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');

        let randomchar = (Math.random() + 1).toString(36).substring(7);
        console.log(randomchar)

        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobtitledata['Job Title'] + randomchar)
        await page.locator('//textarea[@placeholder="Type description here"]').fill(jobtitledata.Job_Description)
        await page.locator('//button[@type="submit"]').click()
    });

    test('add employee', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
        await page.locator('//input[@name="firstName"]').fill('Krishna')
        await page.locator('//input[@name="lastName"]').fill('N2');
        await page.locator('//button[@type="submit"]').click();


    });
    test('add Buzz', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');
        await page.locator(`//textarea[@placeholder="What's on your mind?"]`).fill('Hello World');
        await page.locator('(//button[@class="oxd-glass-button"])[1]').setInputFiles['testData/uploadfiles/pushpa2.jpg', 'testData/uploadfiles/srivalli.jpeg'];
        await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main"]').click()



    });


});

