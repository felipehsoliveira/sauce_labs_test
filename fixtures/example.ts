import { test as base } from '@playwright/test';
import { Login } from '../objects/comonPages';
import * as elements from '../data/elements';

type Fixture = {
    common: Login
}

export const test = base.extend<Fixture>({
    common: async ({ page }, use) => {

        const common = new Login(page);
        await common.login("standard_user", "secret_sauce", elements.mapping.url);
        await use(common);
    }

});

export { expect } from '@playwright/test';