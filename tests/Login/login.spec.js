import { test, expect } from '@playwright/test';
import { loginpage } from '../../pageObjects/loginpage.PO'
import logindata from'../../testData/logincreds.json'
let page;
let login;

test.describe('login functionality  using POM',()=>{

     test.beforeEach(async ({browser})=>{
        page=await browser.newPage()
        login=new loginpage(page)
        await login.launchUrl()
     
    });
    test('verify login with valid creds',async()=>{
        await login.loginwithcreds(logindata.username,logindata.password)
        await login.loginsuccess()
    })
    test('verify login with valid username and invalid password',async()=>{
        await login.loginwithcreds(logindata.username,logindata.wrongpassword)
  await login.loginerror()
    })
    test('verify login with invalid username and invalid password',async()=>{
        await login.loginwithcreds(logindata.wrongusername,logindata.wrongpassword)
        await login.loginerror()
    })
    test('verify login with invalid username and valid password',async()=>{
        await login.loginwithcreds(logindata.wrongusername,logindata.password)
          await login.loginerror()
    })


});