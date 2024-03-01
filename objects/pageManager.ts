import { expect, Locator, Page } from '@playwright/test';
import { Login } from './comonPages';

export class PageManager{
    private readonly page: Page;
    private readonly loginPage: Login;


    constructor(page: Page){
        this.page = page;
        this.loginPage = new Login(this.page);
    }


    login_page(){
        return this.loginPage;
    }
}
