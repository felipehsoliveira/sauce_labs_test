import { test, expect } from '@playwright/test';

test.describe('Testing the login page sauce-labs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
  });

  test('Buy a new item', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill("Jukinha")
    await page.locator('[data-test="lastName"]').fill("Limeira")
    await page.locator('[data-test="postalCode"]').fill((Math.floor(Math.random() * 999999).toString()));
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('//div[@id="checkout_complete_container"]//h2[@class="complete-header"]')).toHaveText("Thank you for your order!");
  })
});




// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
// //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
