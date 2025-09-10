
// // regression_test_orangehrm.spec.js
// import { test, expect } from '@playwright/test';

// test('Regression Test: Search employee and update personal info', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//   // Login
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.locator('h6')).toHaveText('Dashboard');

//   // Navigate to PIM module
//   await page.getByRole('link', { name: 'PIM' }).click();
// //   await expect(page.locator('h6')).toHaveText('Employee Information');

//   // Search for employee by name
//   await page.getByLabel('Employee Name').fill('Linda');
//   await page.getByRole('button', { name: 'Search' }).click();

//   // Click on the first result
//   await page.locator('div.oxd-table-card').first().click();

//   // Edit personal details (e.g., First Name)
//   const firstNameInput = page.locator('input[name="firstName"]');
//   await firstNameInput.fill('LindaUpdated');
//   await page.getByRole('button', { name: 'Save' }).click();

//   // Verify success notification
//   await expect(page.locator('.oxd-toast')).toContainText('Success');
// });

