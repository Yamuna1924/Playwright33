
import { test, expect } from '@playwright/test';

const workshifts ={
    shift1:'ffeef',
    shift2:'gbgbg',
    shift3:'hhuhh'

}
for(let shift in workshifts){
     test(`add work shifts- ${workshifts[shift]}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('//input[@placeholder="Username"]').fill(process.env.APP_USERNAME);
        await page.locator('//input[@placeholder="Password"]').fill(process.env.APP_PASSWORD);
        await page.locator('//button[@type="submit"]').click();
        await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]').click()
        await page.locator('//a[text()="Work Shifts"]').click()
        await page.locator('//i[@class="oxd-icon bi-plus oxd-button-icon"]').fill()
        await page.locator('input[class="oxd-input oxd-input--active"]').nth(1).fill(workshifts[shift])
        await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
     });
}