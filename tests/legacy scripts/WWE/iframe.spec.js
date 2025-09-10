import { test, expect } from '@playwright/test';

        test('verify iframe woek ', async ({ page }) => {
            await page.goto('https://jqueryui.com/checkboxradio/')
            await page.frameLocator('//iframe[@class="demo-frame"]').locator('(//span[@class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"])[3]').click()
            await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-1"]').click()
            await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-nested-4"]').click()

            await page.waitForTimeout(3000)
        });

         test('verify nested iframe woek ', async ({ page }) => {
            await page.goto('https://www.dezlearn.com/nested-iframes-example/')

        await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator('#u_5_6').click()


            await page.waitForTimeout(3000)
        });