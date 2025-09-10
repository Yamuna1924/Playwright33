const {  expect } = require('@playwright/test');

exports.dashboardpage= class dashboardpage{
    constructor(page){
       this.page=page
       this.pimmenu=page.locator('(//a[@class="oxd-main-menu-item"])[2]')
       this.adminmenu=page.locator('(//a[@class="oxd-main-menu-item"])[1]')
       this.buzzmenu=page.locator('(//a[@class="oxd-main-menu-item"])[11]')
    }
    async navigatetoPim(){
        await this.pimmenu.click()
        
    }
 }