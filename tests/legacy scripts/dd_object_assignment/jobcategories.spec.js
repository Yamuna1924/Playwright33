
import { test, expect } from '@playwright/test';

const jobcategories ={
    category1:'ffeef',
    category2:'gbgbg',
    category3:'hhuhh'

}
for(let category in jobcategories){
    test(`add job categories- ${jobcategories[category]}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill(process.env.APP_USERNAME);
    await page.locator('//input[@placeholder="Password"]').fill(process.env.APP_PASSWORD);
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]').click()
    await page.locator("//a[text()='Job Categories']").click()
    await page.locator('//i[@class="oxd-icon bi-plus oxd-button-icon"]').click()
    await page.locator('//input[@class="oxd-input oxd-input--active"]').nth(1).fill(jobcategories[category])
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()

});


}

