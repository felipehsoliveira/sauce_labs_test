import { test, expect } from '@playwright/test';
import { PageManager } from '../objects/pageManager.ts';
import * as elements from '../data/elements.ts';

test.describe('Testing the login page sauce-labs', () => {
  //just pass this in the config file
  // test.use({storageState: 'playwright/.auth/user.json'});
  let login_class: any;
  test.beforeEach(async ({ page }) => {
    login_class = new PageManager(page);
    await page.goto(elements.mapping.url_logged);
  });

  test('Buy a new item', async ({ page }) => {
    await login_class.login_page().addItem();
    await login_class.login_page().checkoutCart("Jukinha", "Limeira")
    await expect(page.locator(elements.mapping.success_message)).toHaveText("Thank you for your order!");
  })
});

test.describe('Faill login test in the sauce labs page', () => {
  let login_class: any;
  test.beforeEach(async ({ page }) => {
    login_class = new PageManager(page);
  })

  test('login with an locked user', async ({ page }) => {
    await login_class.login_page().login(elements.login_users.locked_out_user, elements.login_users.password, elements.mapping.url_login);
    await expect(page.locator(elements.loggin.error_message)).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  });

  test('Buy a new item - slow page', async ({ page }) => {
    await login_class.login_page().login(elements.login_users.performance_glitch_user, elements.login_users.password, elements.mapping.url_login);
    await login_class.login_page().addItem();
    await login_class.login_page().checkoutCart("Jukinha", "Limeira")
    await expect(page.locator(elements.mapping.success_message)).toHaveText("Thank you for your order!");
  })
});