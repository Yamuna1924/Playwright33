import{test,expect} from '@playwright/test';


  test('drag and drop menuitems', async ({page})=> {
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop');
    //  await page.locator('#menu-fried-chicken').dragTo(page.locator('ul[id="plate-items"]'))
    // await page.locator('#menu-hamburger').dragTo(page.locator('ul[id="plate-items"]'))
    //  await page.locator('#menu-ice-cream').dragTo(page.locator('ul[id="plate-items"]'))

  //we can svae in variable and use code
  const Sourcefriedchicken=await page.locator('#menu-fried-chicken')
  const Sourcehamburger=await page.locator('#menu-hamburger')
  const Sourceicecream=await page.locator('#menu-ice-cream')

  const targetplateitems=page.locator('ul[id="plate-items"]')

  await Sourcefriedchicken.dragTo(targetplateitems)
  await Sourcehamburger.dragTo(targetplateitems)
  await Sourceicecream.dragTo(targetplateitems)
});
