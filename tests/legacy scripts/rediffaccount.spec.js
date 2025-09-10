import { test, expect } from '@playwright/test';
import data from "../../testData/rediffaccountcreation2.json"


test('register rediff', async ({ page }) => {

await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')


let randomchar = (Math.random() + 1).toString(36).substring(7);
console.log(randomchar)

await page.locator('//input[@placeholder="Enter your full name"]').fill(data['full name']+randomchar)
await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill(data['rediff id']+randomchar)
await page.locator('//input[@id="newpasswd"]').pressSequentially(data.Password+randomchar, {delay:1000})
await page.locator('//span[@id="toggle-password"]').click()
await page.locator('//span[@id="toggle-retype-password"]').click()
await page.locator('//input[@placeholder="Retype password"]').type(data.Password+randomchar)
await page.locator('//select[@class="day"]').selectOption(data.Day)
await page.locator('//select[@class="middle month"]').selectOption(data.Month)
await page.locator('//select[@class="year"]').selectOption(data.Year)
await page.locator('//input[@value="f"]').click()
await page.locator('//select[@id="country"]').selectOption(data.Country)
await page.locator('//select[@onchange="showothcity();fieldTrack(this);"]').selectOption(data.City)
await page.locator('//input[@type="checkbox"]').check()
await page.locator('//select[@name="hintq9425c258"]').selectOption('What is your favourite food?')
await page.locator('//input[@onblur="fieldTrack(this);"]').fill('Lemonrice')
await page.locator("//div[@class='countryCodeText']//img[1]").selectOption('+91')
await page.locator('//input[@onkeyup="allowOnlyNumber(this)"]').pressSequentially('9876504321')

});