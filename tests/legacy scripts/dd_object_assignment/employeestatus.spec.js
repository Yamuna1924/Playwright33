import { test, expect } from '@playwright/test';

const employeestatus = {
  status1: 'full time',
  status2: 'part time',
  status3: 'work from home'
}
for (let status in employeestatus) {

  test(`Add employee status-${employeestatus[status]}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]').click()
    await page.locator('//a[text()="Employment Status"]').click()
    await page.locator('//i[@class="oxd-icon bi-plus oxd-button-icon"]').click()
    await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div[2]/input').fill(employeestatus[status])
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()

  });
}


