import { test,expect} from '@playwright/test';

const jobtitles=["TESTER2","DEVELOPWE","PO"]
jobtitles.forEach(Element=>{
    //also we can use for in,for  to loop  arrays 
// for(let Element in jobtitles){
// test  
// }
//
// for(let i=0; i<=menus.length-1; i++){

//        console.log("Loop Starts")

//     console.log(menus[i])

//     console.log("Loop Ends ")

// }

    test(`add job title-${Element}`, async ({page}) =>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('//input[@placeholder="Username"]').fill(process.env.APP_USERNAME);
  await page.locator('//input[@placeholder="Password"]').fill(process.env.APP_PASSWORD);
  await page.locator('//button[@type="submit"]').click();
  await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]/h6')).toBeVisible();
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
  await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]').click()
  await page.locator('(//a[@role="menuitem"])[1]').click()
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()


//   let randomchar = (Math.random() + 1).toString(36).substring(7);
//   console.log(randomchar)

  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(Element)
  await page.locator('//textarea[@placeholder="Type description here"]').fill(Element)
  await page.locator('//button[@type="submit"]').click()
  


  
  });

});


