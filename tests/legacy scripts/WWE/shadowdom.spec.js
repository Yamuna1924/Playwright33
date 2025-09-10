import { test, expect } from '@playwright/test';


test('Add Job Title', async ({ page }) => {  
    await page.goto('http://watir.com/examples/shadow_dom.html')

    await page.locator('input[type="text"]').fill('Yamuna')
    await page.locator('input[type="checkbox"]').check()


    //await page.locator('input[type="text"]').setInputFiles('testData/uploadfiles/VED.jpg')
     
    await page.waitForTimeout(2000)


});

//shadowdom 2 example
test('Shadow DOM Example 2', async ({ page }) => {
    await page.goto('https://books-pwakit.appspot.com/')
});