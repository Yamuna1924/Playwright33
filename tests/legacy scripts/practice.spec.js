import{test,expect} from '@playwright/test';
 test(' verify checkbox rediff', async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    const checked= await page.locator('//input[@type="checkbox"]').isChecked()
    console.log(checked)
    if(!checked){
   await page.locator('//input[@type="checkbox"]').check();
    }
    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()
     
    await page.waitForTimeout(2000);
    await page.locator('//input[@type="checkbox"]').uncheck();
    await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()
    await page.waitForTimeout(5000);

      


   

 });