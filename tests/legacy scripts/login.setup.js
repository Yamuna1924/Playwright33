import { test as setup, expect } from '@playwright/test'
setup("authentication", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
    await page.context().storageState();
    await page.context().storageState({ path: ".auth/user.json" })

});