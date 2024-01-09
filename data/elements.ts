export const mapping = {
    success_message: '//div[@id="checkout_complete_container"]//h2[@class="complete-header"]',
    item_add: '//button[@data-test="add-to-cart-sauce-labs-backpack"]',
    cart_btn: '//div[@id="shopping_cart_container"]//a',
    url: "https://www.saucedemo.com/"

}

export const loggin = {
    log_in_field: '//input[@data-test="username"]',
    password_field: '//input[@data-test="password"]',
    log_in_btn: '//input[@data-test="login-button"]'
}

export const checkout = {
    btn_checkout: '//button[@data-test="checkout"]',
    input_firstName: '//input[@data-test="firstName"]',
    input_LastName: '//input[@data-test="lastName"]',
    input_postCode: '//input[@data-test="postalCode"]',
    btn_continue: '//input[@data-test="continue"]',
    btn_finish: '//button[@data-test="finish"]'
}