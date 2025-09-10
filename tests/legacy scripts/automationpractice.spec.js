import { test, expect } from '@playwright/test';

test('practice automation',{tag: "@smoke"},  async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
// await page.getByPlaceholder('Enter Name').fill('Raju')
// await page.getByPlaceholder('Enter EMail').fill('raju123@gmail.com')
// await page.getByPlaceholder('Enter Phone').pressSequentially('9870654321')
// await page.locator('[id="textarea"]').fill(process.env.AP_ADDRESS)
// await page.locator('#male').check()
//how to check alla checkboxes at a time-using array
 const checkboxes =["#sunday",'#monday','#tuesday','#wednesday','#thursday','#friday','#saturday']
 

 for (let checkbox of checkboxes) {
    await page.locator(checkbox).check();
 }
 await page.waitForTimeout(2000)
 
 for (let checkbox of checkboxes) {
    await page.locator(checkbox).uncheck();

 }
// await page.locator('[id="sunday"]').click()
// await page.locator('input[id="monday"]').check()
// await page.locator('//input[@value="tuesday"]').click()
// await page.locator('//input[@id="wednesday"]').click()
// await page.locator('//input[@id="thursday"]').click()
// await page.locator('//input[@id="friday"]').click()
// await page.locator('#saturday').click()
// await page.locator('//select[@class="form-control" and @id="country"]').selectOption('China')
// await page.locator('//select[@id="colors"]').selectOption('Red')

//text
//await page.locator('#country').selectOption('Germany') 
//index
//await page.locator('#country').selectOption({index: 3 }) 
//value
await page.locator('#country').selectOption('germany') //may value type  is number or text 

//await page.locator('select[id="colors"]').selectOption('Red')
// Multiple selected items
await page.locator('select[id="colors"]').selectOption(['Red','Green',"White"])
await page.locator('select[id="animals"]').selectOption(['Lion','Fox','Rabbit'])

//drag and drop
await page.locator('div[id="draggable"]').dragTo(page.locator('div[id="droppable"]'))
 
//upload file

await page.locator('(//input[@type="file"])[1]').setInputFiles('testData/uploadfiles/IMG-20250608-WA0001[1].jpg');

await page.screenshot({ path:'tests/screenshots/'+Date.now()+'filedownload.png'});



//upload multiple files
await page.locator('(//input[@type="file"])[2 ]').setInputFiles(['testData/uploadfiles/IMG-20250608-WA0001[1].jpg','testData/uploadfiles/lord-shiva-8413252_1280.webp','testData/uploadfiles/pushpa2.jpg','testData/uploadfiles/srivalli.jpeg'])

});