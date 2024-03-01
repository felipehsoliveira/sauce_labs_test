import { test as setup, expect } from '@playwright/test'
import { Login } from '../objects/comonPages.ts'
import * as elements from '../data/elements.ts';


const authFile = 'playwright/.auth/user.json';

setup('authenticate work', async ({ page }) => {
    let login_class = new Login(page);    
    await login_class.login(elements.login_users.standard_user, elements.login_users.password, elements.mapping.url_login);
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.context().storageState({path: authFile })
})

const authFileError = 'playwright/.auth/userError.json';
// setup('authenticate work', async ({ page }) => {
//     let login_class: any = new Login(page);    
//     await login_class.login(elements.login_users.standard_user, elements.login_users.password, elements.mapping.url);
//     await page.waitForURL('https://www.saucedemo.com/inventory.html');
//     await page.context().storageState({path: authFileError });
// })