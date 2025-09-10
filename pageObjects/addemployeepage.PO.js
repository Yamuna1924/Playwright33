const {  expect } = require('@playwright/test');
exports.addemployeepage=class addemployeepage{
    constructor(page){
        this.page=page
        this.addemployeesubmenu=page.locator('//a[text()="Add Employee"]')
        this.firstnameInput=page.locator('input[name="firstName"]')
        this.lastnameInput=page.locator('input[name="lastName"]')
        this.savebtn=page.locator('button[type="submit"]')
        this.headerpersonaldetails=page.locator('(//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"])[1]')
        
    }
    async navigatetoaddemployee(){
        await this.addemployeesubmenu.click()

    }
    async addEmployee(firstname,lastname){
        await this.firstnameInput.fill(firstname)
        await this.lastnameInput.fill(lastname)
        await this.savebtn.click()
    }
    async addEmployeesuccessmsg (){
        await expect(this.headerpersonaldetails).toBeVisible()  
      }

}