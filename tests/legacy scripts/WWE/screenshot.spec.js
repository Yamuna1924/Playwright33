
import { test, expect } from '@playwright/test';

test('practice automation', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#country').selectOption('germany') 
await page.locator('#country').screenshot({path:'tests/screenshots'+ Date.now()+ 'country.png'})
await page.locator('(//input[@type="file"])[1]').setInputFiles('testData/uploadfiles/IMG-20250608-WA0001[1].jpg');

//await page.screenshot({ path:'tests/screenshots/'+Date.now()+'filedownload.png'});
await page.locator('(//input[@type="file"])[2 ]').setInputFiles(['testData/uploadfiles/IMG-20250608-WA0001[1].jpg','testData/uploadfiles/lord-shiva-8413252_1280.webp','testData/uploadfiles/pushpa2.jpg','testData/uploadfiles/srivalli.jpeg'])
//await page.screenshot({ path:'tests/screenshots/'+Date.now()+'mufiledownload.png'});



});