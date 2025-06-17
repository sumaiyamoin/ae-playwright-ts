import { test, expect } from '@playwright/test'
import { PlaceOrder } from '../pages/PlaceOrder';
import { Signup } from '../pages/SignUp';
import { faker } from '@faker-js/faker'
import { Checkout } from '../pages/Checkout';

test('User should be able to register during checkout process', async ({ page }) => {
    const p = new PlaceOrder(page);
    await p.placeOrder('Blue Top');

    const signUp = new Signup(page);
    const email = faker.internet.email().toLocaleLowerCase();
    await signUp.register('ABC', email, '1234');
    //await page.pause();

    const checkout = new Checkout(page);

    const itemName = {
        nameOnCard: 'test',
        cardNum: '5555',
        cvc: '311',
        expirationMonth: '12',
        expirationYear: '2025'
    };


    //expect(await page.locator('.active').first()).toContainText('Shopping Cart');

    await checkout.proceedToCheckout(itemName);

    await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toHaveText('Account Deleted!');
    
    //await page.pause();

})