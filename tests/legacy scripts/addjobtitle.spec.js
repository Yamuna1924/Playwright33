import { test, expect } from '@playwright/test';

import jobtitledata from "../../testData/addjobtitles.json";

test('Add Job Title',{tag: "@smoke"}, async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill('Admin');
  await page.locator('//input[@placeholder="Password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
  await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
  await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]').click()
  await page.locator('(//a[@role="menuitem"])[1]').click()
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()


  let randomchar = (Math.random() + 1).toString(36).substring(7);
  console.log(randomchar)

  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobtitledata['Job Title']+randomchar)
  await page.locator('//textarea[@placeholder="Type description here"]').fill(jobtitledata.Job_Description)
  await page.locator('//button[@type="submit"]').click()
  


  
  });