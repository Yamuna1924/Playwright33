import { test, expect } from '@playwright/test';


test('verify keypress element', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill('Admin');
  await page.locator('//input[@placeholder="Password"]').fill('admin123');
    //await page.locator('//input[@placeholder="Password"]').press('Enter')
    //we san use this also to keypress
    await page.keyboard.press('Enter')

});