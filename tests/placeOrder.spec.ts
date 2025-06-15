import { test, expect } from '@playwright/test'
import { PlaceOrder } from '../pages/PlaceOrder';
import { Signup } from '../pages/SignUp';
import { faker } from '@faker-js/faker'
import { Checkout } from '../pages/Checkout';
import { DeletePage } from '../pages/DeletePage';

test('T.C 14: Place Order: Register while Checkout', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    const p = new PlaceOrder(page);
    await p.placeOrder();
    await page.getByText('Register / Login').nth(1).click();
    const signUp = new Signup(page);
    const email = faker.internet.email().toLocaleLowerCase();
    await signUp.registration('ABC', email, '1234');

    const checkout = new Checkout(page);

    const itemName = {
        nameOnCard: 'test',
        cardNum: '5555',
        cvc: '311',
        expirationMonth: '12',
        expirationYear: '2025'
    };

    await checkout.proceedToCheckout(itemName);

    const deletePage = new DeletePage(page);
    await deletePage.deleteAccount();

    //await page.pause();

})