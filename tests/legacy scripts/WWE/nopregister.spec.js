import { test, expect } from '@playwright/test';
import data from "../../../testData/registernopcommerce.json"


test('Valid Registration', async ({ page }) => {

await page.goto('https://demo.nopcommerce.com/')
       
await expect(page.locator('//div[@class="header-menu"]')).toBeVisible()
await page.locator('//a[@class="ico-register"]').click()
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

//verify as a human

const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launchPersistentContext('/path/to/your/profile', {
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
  // Script continues...
})();


await page.locator('//input[@type="radio" and @id="gender-male"]').check()

let randomchar = (Math.random() + 1).toString(36).substring(7);
console.log();

await page.locator('//input[@id="FirstName"]').fill(data['First name']+randomchar)
await page.locator('//input[@id="LastName"]').fill(data['Last name']+randomchar)
await page.locator('//input[@id="Email"]').fill(data.Email)
await page.locator('//input[@id="Company"]').fill(data['Company name']+randomchar)
await page.locator('//input[@type="checkbox"]').check()
await page.locator('//input[@type="password"][@id="Password"]').pressSequentially(data.Password+randomchar)
await page.locator('//input[@id="ConfirmPassword"]').type(data.Password+randomchar)
await page.locator('//button[@id="register-button"]').click()
await expect(page.locator("//div[text()='Your registration completed']")).toBeVisible()
await page.locator('//a[@class="button-1 register-continue-button"]').click()
await expect(page.locator('//div[@class="header-upper"]')).toBeVisible()

});

test('Validate user registration with existing email', async ({ page }) => {

await page.goto('https://demo.nopcommerce.com/')
await expect(page.locator('//div[@class="header-menu"]')).toBeVisible()
await page.locator('//a[@class="ico-register"]').click()
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
await page.locator('//input[@type="radio" and @id="gender-male"]').check()
await page.locator('//input[@id="FirstName"]').fill(data['First name'])
await page.locator('//input[@id="LastName"]').fill(data['Last name'])
await page.locator('//input[@id="Email"]').fill(data.Email)
await page.locator('//input[@id="Company"]').fill(data['Company name'])
await page.locator('//input[@type="checkbox"]').check()
await page.locator('//input[@type="password"][@id="Password"]').pressSequentially(data.Password)
await page.locator('//input[@id="ConfirmPassword"]').type(data.Password)
await page.locator('//button[@id="register-button"]').click()
await expect(page.locator('//li[contains(.,"The specified ema")]')).toBeVisible()


});
test('Validate user registration with missing mandatory fields', async ({ page }) => {

await page.goto('https://demo.nopcommerce.com/')
await expect(page.locator('//div[@class="header-menu"]')).toBeVisible()
await page.locator('//a[@class="ico-register"]').click()
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
await page.locator('//input[@type="radio" and @id="gender-male"]').check()
await page.locator('//input[@id="LastName"]').fill(data['Last name'])
await page.locator('//input[@id="Company"]').fill(data['Company name'])
await page.locator('//input[@type="checkbox"]').check()
await page.locator('//input[@type="password"][@id="Password"]').pressSequentially(data.Password)
await page.locator('//input[@id="ConfirmPassword"]').type(data.Password)
await page.locator('//button[@id="register-button"]').click()


});


