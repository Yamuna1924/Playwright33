const { browser, test, expect, chromium, firefox } = require('@playwright/test');


test.describe('Automation - Working With Elements', () => {
    test('verift context element', async ({ browser }) => {

        const context1 = await browser.newContext();
        const context2 = await browser.newContext();

        const page = await context1.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('//input[@placeholder="Username"]').fill('Admin');
        await page.locator('//input[@placeholder="Password"]').fill('admin123');
        await page.locator('//button[@type="submit"]').click();
        await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
        await page.locator('(//a[@class="oxd-main-menu-item"])[2]').click()
        await page.locator('//a[text()="Add Employee"]').click()
        await page.locator('//input[@name="firstName"]').fill('Krishna')
        await page.locator('//input[@name="lastName"]').fill('Nn')
        //for toggle buttopn use dispatchEvent
        await page.locator('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]').dispatchEvent('click')
        await page.locator('(//input[@class="oxd-input oxd-input--active"])[3]').fill('KrishnaNn')
        // Fill password and confirm password fields with the same value
        await page.locator('(//input[@type="password"])[1]').fill('pass@1234');
        await page.locator('(//input[@type="password"])[2]').fill('pass@1234');
        await page.locator('//button[@type="submit"]').click();

        const page2 = await context2.newPage();
        await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page2.locator('//input[@placeholder="Username"]').fill('KrishnaNn');
        await page2.locator('//input[@placeholder="Password"]').fill('pass@1234');
        await page2.locator('//button[@type="submit"]').click();








    });

});