import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
   await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

})
test('simple alert_ok', async ({ page }) => {

   await page.locator('(//button[text()="Click for JS Alert"])[1]').click()

   page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert')
      await dialog.accept()

   })
})

test('test cofirm alert_OK', async ({ page }) => {

   await page.locator('(//button[contains(.,"Click for ")])[2]').click()
   page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm')
      await dialog.accept()
   })
})
test('test cofirm alert_Cancel', async ({ page }) => {

   await page.locator('(//button[contains(.,"Click for ")])[2]').click()
   page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm')
      await dialog.dismiss()
   })

})
test('test prompt alert_ok' , async ({page})=> {
   await page.locator('text=Click for JS Prompt').click()
 page.on('dialog' , async dialog =>{
   expect(dialog.type()).toBe('prompt');
   await dialog.accept('yamuna');
  

 })

})





