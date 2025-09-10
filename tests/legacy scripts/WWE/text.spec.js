const { test, expect } = require('@playwright/test');

test.describe('Text Page Tests', () => {
    test('should load the page', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const textvalue1=await page.locator('p[class="oxd-text oxd-text--p"]:nth-child(1)').innerText()
        //textcontent()-used to get text==innertext()
         console.log(textvalue1)
         await expect(textvalue1).toBe('Username : Admin')
         const textvalue2=await page.locator('p[class="oxd-text oxd-text--p"]:nth-child(2)').textContent()
         console.log(textvalue2)
         await expect(textvalue2).toBe('Password : admin123')
         

         //otherwise,,instead of above 6lines we can use this 2
         await expect(page.locator('p[class="oxd-text oxd-text--p"]:nth-child(1)')).toHaveText('Username : Admin')
         await expect(page.locator('p[class="oxd-text oxd-text--p"]:nth-child(2)')).toHaveText('Password : admin123')

    });

    
});
test('should load the page', async ({ page }) => {

    await page.goto('https://www.flipkart.com/')
    // const values=await page.locator('//a[@class="_1ch8e_"]').allTextContents()
    // console.log(value)
//     //[
//   'Minutes',
//   'Mobiles & Tablets',
//   'TVs & Appliances',
//   'Flight Bookings',
//   'Grocery'
// ]
    // for(let i of values){
    //     console.log(i)                         
    // }

    //same jobas allTextContent()--These are useful when you want to get text from multiple elements at once (instead of looping manually).
     const values1=await page.locator('//a[@class="_1ch8e_"]').allInnerTexts()
    console.log(values1)
})