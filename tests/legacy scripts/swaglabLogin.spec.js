import { test, expect } from '@playwright/test';

test('Logina as a standard user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/')

    await page.locator('//*[@id="user-name"]').fill('standard_user'), {navigationTimeout :50000} 

    await page.locator("//input[@data-test='password']").fill('secret_sauce')

    await page.locator('//*[@id="login-button"]').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')

    
})