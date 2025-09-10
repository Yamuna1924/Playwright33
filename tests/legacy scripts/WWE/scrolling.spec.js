import { test, expect } from '@playwright/test';


        test('verify scrollig element  ', async ({ page }) => {

            await page.goto('https://www.imdb.com/chart/top/');

            await page.locator("//h3[text()='25. The Green Mile']").scrollIntoViewIfNeeded();

            await page.locator("//h3[text()='25. The Green Mile']").click()

        });