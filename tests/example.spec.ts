import { test, expect } from '@playwright/test';
import { Login } from '../objects/comonPages.ts'
import * as elements from '../data/elements.ts';

test.describe('Testing the login page sauce-labs', () => {
  test.use({storageState: 'playwright/.auth/user.json'});
  let login_class: any;
  test.beforeEach(async ({ page }) => {
    login_class = new Login(page);
    await page.goto('https://www.saucedemo.com/inventory.html');
  });

  test('Buy a new item', async ({ page }) => {
    await login_class.addItem();
    await login_class.checkoutCart("Jukinha", "Limeira")
    await expect(page.locator(elements.mapping.success_message)).toHaveText("Thank you for your order!");
  })
});

test.describe('Faill login test in the sauce labs page', () => {
  let login_class: any;
  test.beforeEach(async ({ page }) => {
    login_class = new Login(page);
  })

  test('login with an locked user', async ({ page }) => {
    await login_class.login(elements.login_users.locked_out_user, elements.login_users.password, elements.mapping.url);
    await expect(page.locator(elements.loggin.error_message)).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  });

  test('Buy a new item - slow page', async ({ page }) => {
    await login_class.login(elements.login_users.performance_glitch_user, elements.login_users.password, elements.mapping.url);
    await login_class.addItem();
    await login_class.checkoutCart("Jukinha", "Limeira")
    await expect(page.locator(elements.mapping.success_message)).toHaveText("Thank you for your order!");
  })
});