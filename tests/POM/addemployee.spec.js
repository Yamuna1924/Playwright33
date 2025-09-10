import { test, expect } from '@playwright/test';
import { addemployeepage } from '../../pageObjects/addemployeepage.PO';
import { loginpage } from '../../pageObjects/loginpage.PO';
import { dashboardpage } from '../../pageObjects/dashboardpage.PO';
import employeedata from '../../testData/employeedata.json';
import logindata from '../../testData/logincreds.json';


let employee, login, dashboard;

test.describe('addemployee', () => {
    test.beforeEach(async ({ page }) => {
        //page=await browser.newPage()

        employee = new addemployeepage(page);
        login = new loginpage(page);
        dashboard = new dashboardpage(page);
         
        await login.launchUrl();

        await login.loginwithcreds(logindata.username,logindata.password)
        await login.loginsuccess()
    });

    test('verify addEmployee mandatory details',async ()=>{
        await dashboard.navigatetoPim()
        await employee.navigatetoaddemployee()
        await employee.addEmployee(employeedata.firstname,employeedata.lastname)
        await employee.addEmployeesuccessmsg()


    })

});