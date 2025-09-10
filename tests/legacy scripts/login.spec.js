import { test, expect } from '@playwright/test';

test('Verify Login with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  await expect (page.locator('div.oxd-main-menu')).toBeVisible()
  
  });
  test('Verify Login with valid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('dderefefef');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
test('Verify login with invalid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('wfsff');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
test('Verify login with invalid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('efefenhnjkj');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('bvvd3455');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});