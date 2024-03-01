import { Page } from '@playwright/test';


/**
 * this page is an example of heritage in the playwright
 * it service for example only
 * not really used in the code
 */


export class HelperPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }


    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000);
    }
}