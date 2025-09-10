import {test,expect} from '@playwright/test'
test('add all to cart' , async({page})=>{
     await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
     const buttons=await page.$$('//button[text()="ADD TO CART"]')
     for(let button of buttons){
        await button.click()
     }

});