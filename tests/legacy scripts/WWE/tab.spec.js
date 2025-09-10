import { test, expect } from '@playwright/test';


        test('verify Tabs element  ', async ({ page }) => {

        

    await page.goto('https://www.flipkart.com/');
    await page.locator('//input[@type="text"]').fill('iphone')
    await page.locator('//input[@type="text"]').press('Enter')

    const [newpage] = await Promise.all([
    page.waitForEvent('popup'), 
    await page.locator('//div[text()="Apple iPhone 13 (Midnight, 128 GB)"]').click()
    ]);
     
    const nameofthephone= await newpage.locator('//span[text()="Apple iPhone 13 (Midnight, 128 GB)"]').textContent()
    console.log(nameofthephone)
    //await page.locator('//span[text()="Apple iPhone 13 (Midnight, 128 GB)"]').click()


    

  })


        