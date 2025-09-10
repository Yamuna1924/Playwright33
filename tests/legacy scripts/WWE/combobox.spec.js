import { test, expect } from '@playwright/test';

test('Add Job Title', async ({ page }) => {                         
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill('Admin');
  await page.locator('//input[@placeholder="Password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
  await page.locator('(//a[@class="oxd-main-menu-item"])[1]').click()

//combobox(need to fill and search to click)
  await page.locator('(//input[@placeholder="Type for hints..."])[1]').fill('James  Butler');
  await page.locator('(//input[@placeholder="Type for hints..."])[1]').click();
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('0365')
  await page.locator('//button[@type="submit"]').click()
});