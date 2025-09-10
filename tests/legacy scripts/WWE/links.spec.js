import { test, expect } from '@playwright/test';


        test('verify links element  ', async ({ page }) => {

            await page.goto('https://trello.com/');
            await page.locator('(//a[text()="Log in"])[1]').click();
            await pagelocatot('//input[@type="email"]').fill('raju123@gmail.com');
            
        });
        

        test('verify links element-2 ', async ({ page }) => {

            await page.goto('https://www.wikipedia.org/');
            await page.locator('//a').toHaveCount(375);
            await pagelocatot('//a[@title="తెలుగు — వికీపీడియా — ఒక స్వేచ్ఛా విజ్ఞాన సర్వస్వం"]').click()
            
        });