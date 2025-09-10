import { test, expect } from '@playwright/test';

const paygrades = {
  grade1: 'Pg111',
  grade2: 'Pg222',
  grade3: 'Pg333'
}
for (let grade in paygrades) {
  test(`Verify Add job grades- ${paygrades[grade]}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByText('Job').click();
    await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('form').getByRole('textbox').click();
    await page.locator('form').getByRole('textbox').fill(paygrades[grade]);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('form').filter({ hasText: 'Currency-- Select --Minimum' }).locator('i').click();
    await page.getByRole('option', { name: 'INR - Indian Rupee' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('18000');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('25000');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByText('Indian Rupee').click();



  });

}


//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.locator('//input[@placeholder="Username"]').fill('Admin');
//     await page.locator('//input[@placeholder="Password"]').fill('admin123');
//     await page.locator('//button[@type="submit"]').click();
//     await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//     await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
// await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]').click()
// await page.locator('//a[text()="Pay Grades"]').click()
// await page.locator('//div[@class="oxd-main-menu-search"]/button').click()
// await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]/div[2]').fill('pg1')
// await page.locator('//button[@type="submit"]').click()
// await page.locator('//i[@class="oxd-icon bi-plus oxd-button-icon"]').click()
// await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').selectOption('INR - Indian Rupee')
// await page.locator('//label[text()="Minimum Salary"]/following::input[1]').fill('15000')
// await page.locator('//label[text()="Maximum Salary"]/following::input[1]').fill('25000')
// await page.locator('//div[@class="oxd-form-actions"]/button').last().click()

