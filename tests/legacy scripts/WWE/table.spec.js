import { test, expect } from '@playwright/test'; 

test.describe('WWE Table Tests', () => {
    test('sample test', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/');
     await page.locator('//a[contains(.,"Sortable Data")]').click();
     //How many rows are present 

    const rows = await page.$$('#table1 > tbody >tr'); //[4 elements]
    expect(rows.length).toBe(4)
    //dynamic table (if no of rows will change after refresh)
    //expect(rows.length).to.be.within(4, 10);

     await expect(page.locator('//table[@id="table1"]/tbody/tr')).toHaveCount(4) //rows
      await page.screenshot({ path: 'rowscount.png' });//to take screenshot
     await expect(page.locator('//table[@id="table1"]/thead/tr/th')).toHaveCount(6) //columns
     await expect(page.locator('//table[@id="table1"]/tbody/tr/td[text()="Smith"]/../td[3]')).toHaveText('jsmith@gmail.com')
     

 

     await expect (page.locator('//table')).toHaveCount(2)
    
    
    //await expect(page.locator('//table')).toHaveCount(2);

    const textvalue = await page.locator('#table1 >tbody>tr:nth-child(4) >td:nth-child(3)').textContent()

    await expect(textvalue).toContain("tconway@earthlink.net"); // text1 contains text2
    await expect(textvalue).toMatch(/tconway/); // text1 matches the regular expression

    
    });

});