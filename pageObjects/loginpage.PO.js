const {  expect } = require('@playwright/test');
exports.loginpage=class loginpage{
    constructor(page){
        this.page=page
        
        this.usernameinput=page.locator('input[name="username"]');
        this.passwordinput=page.locator('input[name="password"]');
        this.loginbtn=page.locator('button[type="submit"]')
        this.loginerrormsg=page.locator('//p[text()="Invalid credentials"]')
    }
    async launchUrl(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async loginwithcreds(username,password){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.loginbtn.click()
    }
    async loginsuccess(){
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    }
    async loginerror(){
        await expect(this.loginerrormsg).toBeVisible()
    }
    

}
