import { expect, Locator, Page } from '@playwright/test';
import * as elements from '../data/elements.ts';
import { HelperPage } from './helperPage.ts';

export class Login extends HelperPage {
    // here we dind't create a field page bacause we already have one in the HelperPage
    readonly login_field: Locator;
    readonly password_password: Locator;
    readonly btn_login: Locator;
    readonly item_add: Locator;
    readonly cart_btn: Locator;
    readonly btn_checkout: Locator;
    readonly input_firstName: Locator;
    readonly input_LastName: Locator;
    readonly input_postCode: Locator;
    readonly btn_continue: Locator;
    readonly btn_finish: Locator;



    constructor(page: Page) {
        super(page);
        this.login_field = page.locator(elements.loggin.log_in_field);
        this.password_password = page.locator(elements.loggin.password_field);
        this.btn_login = page.locator(elements.loggin.log_in_btn);
        this.item_add = page.locator(elements.mapping.item_add);
        this.cart_btn = page.locator(elements.mapping.cart_btn);
        this.btn_checkout = page.locator(elements.checkout.btn_checkout);
        this.input_firstName = page.locator(elements.checkout.input_firstName);
        this.input_LastName = page.locator(elements.checkout.input_LastName);
        this.input_postCode = page.locator(elements.checkout.input_postCode);
        this.btn_continue = page.locator(elements.checkout.btn_continue);
        this.btn_finish = page.locator(elements.checkout.btn_finish);
    }

    /**
     * this method is used to login in a determinated website
     * @param user_login - user login in the application
     * @param user_password - user password in the application
     * @param url - the applicaiton address
     */
    async login(user_login: string, user_password: string, url: string) {
        await this.page.goto(url)
        await this.login_field.fill(user_login);
        await this.password_password.fill(user_password);
        await this.btn_login.click();
    }

/**
 * this method will add some item in the cart
 */
    async addItem() {
        await this.item_add.click();
        await this.cart_btn.click();
    }

    async checkoutCart(first_name: string, last_name: string) {
        await this.btn_checkout.click();
        await this.input_firstName.fill(first_name);
        await this.input_LastName.fill(last_name);
        await this.input_postCode.fill((Math.floor(Math.random() * 999999).toString()));
        await this.btn_continue.click();
        await this.btn_finish.click();
        await this.waitForNumberOfSeconds(2);
    }
}
