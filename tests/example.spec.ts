import { test, expect } from '@playwright/test';
import {Login} from '../objects/comonPages.ts'
import * as elements from '../data/elements.ts';

test.describe('Testing the login page sauce-labs', () => {
  let login_class;
  test.beforeEach(async ({ page }) => {
    login_class = new Login(page);
    await login_class.login("standard_user", "secret_sauce",elements.mapping.url);
  });

  test('Buy a new item', async ({ page }) => {
    await login_class.addItem();
    await login_class.checkoutCart("Jukinha","Limeira")
    await expect(page.locator(elements.mapping.success_message)).toHaveText("Thank you for your order!");
  })
});
