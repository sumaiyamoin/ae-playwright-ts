import { test, expect } from '@playwright/test'
import { PlaceOrder } from '../pages/PlaceOrder';
import { Signup } from '../pages/SignUp';
import { faker } from '@faker-js/faker'
import { Checkout } from '../pages/Checkout';

test('User should be able to register during checkout process', async ({ page }) => {
    const order = new PlaceOrder(page);
    await order.placeOrder('Blue Top');

    const signUpPage = new Signup(page);
    const email = faker.internet.email().toLocaleLowerCase();
    await signUpPage.register('ABC', email, '1234');

    const checkOutPage = new Checkout(page);

    const itemName = {
        nameOnCard: 'test',
        cardNum: '5555',
        cvc: '311',
        expirationMonth: '12',
        expirationYear: '2025'
    };

    await checkOutPage.proceedToCheckout(itemName);
    await expect(checkOutPage.txtDelete).toHaveText('Account Deleted!');

    //await page.pause();

})