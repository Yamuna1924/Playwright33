import { test, expect } from '@playwright/test';
import moment from 'moment';


test.describe('Calendar Feature', () => {

    test('should display the calendar', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
 

    

    //const today = moment().format('MM/DD/YYYY');
    await page.locator('(//input[@class="hasDatepicker"])[2]').fill(moment().format('DD/MM/YYYY'));


 
    });
});