import { test, expect } from '@playwright/test'
import { PlaceOrder } from '../pages/PlaceOrder';
import { Signup } from '../pages/SignUp';
import { faker } from '@faker-js/faker'
import { Cart } from '../pages/Cart';
import { DeletePage } from '../pages/DeletePage';

test('T.C 14: Place Order: Register while Checkout', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    const p = new PlaceOrder(page);
    await p.placeOrder();
    await page.getByText('Register / Login').nth(1).click();
    const signUp = new Signup(page);
    const email = faker.internet.email().toLocaleLowerCase();
    await signUp.registration('ABC', email, '1234');

    const cart = new Cart(page);
    await cart.cart();

    const deletePage = new DeletePage(page);
    await deletePage.deletePage();

    //await page.pause();

})