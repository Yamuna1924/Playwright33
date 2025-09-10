import { test, expect } from '@playwright/test';

// test('Add/remove element', async ({ page }) => {
// await page.goto('https://the-internet.herokuapp.com/');

// await page.locator('//*[@id="content"]/ul/li[2]/a').click();

// await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');

// await page.locator('//*[@id="content"]/div/button').click();

// await page.locator('//*[@id="elements"]/button').click();

// await expect(page.locator('//*[@id="page-footer"]/div/div/a')).toBeVisible();

// });

// test('A/B Testing', async ({ page }) => {

// await page.goto('https://the-internet.herokuapp.com/');

// await page.locator('//*[@id="content"]/ul/li[1]/a').click();

// await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');

// await expect(page.locator('#content')).toBeVisible();

// await expect(page.locator('//div[@style="text-align: center;"]')).toBeVisible();

// });
// test('Broken Images', async ({ page }) => {

// await page.goto('https://the-internet.herokuapp.com/');
// await page.locator('a[href="/broken_images"]').click();

// });

// //chatgpt script
// test('verify table rows and edit/delete links', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/challenging_dom');

//   // Check there are 10 data rows in the table body
//   const rows = await page.locator('table tbody tr');
//   await expect(rows).toHaveCount(10);

//   // Validate table headers
//   const headers = await page.locator('table thead tr th');
//   await expect(headers.nth(0)).toHaveText('Lorem');
//   await expect(headers.nth(6)).toHaveText('Action');

//   // Loop through all rows and check 'edit' and 'delete' links
//   const editLinks = await page.locator('a:text("edit")');
//   const deleteLinks = await page.locator('a:text("delete")');
//   for (let i = 0; i < await editLinks.count(); i++) {
//     await expect(editLinks.nth(i)).toBeVisible();
//     await expect(deleteLinks.nth(i)).toBeVisible();
//   }

//   // Check first row's first cell has expected text pattern
//   const firstCell = await page.locator('table tbody tr:first-child td:first-child');
//   await expect(firstCell).toHaveText(/luvaret0+/);
// });

// test('Edit content in TinyMCE iframe', async ({ page }) => {
//   // Go to the TinyMCE page
//   await page.goto('https://the-internet.herokuapp.com/tinymce');

//   // Locate the iframe
//   const frameLocator = page.frameLocator('#mce_0_ifr');

//   // Locate the editable body inside the iframe
//   const editorBody = frameLocator.locator('body');

//   // Clear the existing text
//   await editorBody.fill('');

//   // Type new content
//   const newContent = 'Hello, this is automated text!';
//   await editorBody.type(newContent);

//   // Assert that the content was updated
//   await expect(editorBody).toHaveText(newContent);

//   // Optional: pause to observe
//   // await page.pause();
// });
test('Table 1', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/')
await page.locator('#content>ul>li:nth-child(41)>a').click()
await expect(page).toHaveURL('https://the-internet.herokuapp.com/tables')

});

test('Download single file', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
     await page.locator('//a[text()="File Download"]').click()
    const [Download] =await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[text()="Duck.png"]').click()

    ])

    //assert file is download or not
    
    const suggestedFileName = Download.suggestedFilename();
    const filepath = 'download/' + suggestedFileName;
    await Download.saveAs(filepath);
    expect(require('fs').existsSync(filepath)).toBeTruthy();

});

test('Download multiple files', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/')
     await page.locator('//a[text()="File Download"]').click()
     const filenames=['sampleFile.txt','temp_upload.txt','sample-zip-file.zip'];
     for(let filename of filenames){
        const [Download]=await Promise.all([
            page.waitForEvent('download'),
            page.locator(`a:text("${filename}")`).click()
        ]);
        const suggestedFileName = Download.suggestedFilename();
        const filepath = 'download/' + suggestedFileName;
        await Download.saveAs(filepath);
        expect(require('fs').existsSync(filepath)).toBeTruthy();
     }
     
    


});



