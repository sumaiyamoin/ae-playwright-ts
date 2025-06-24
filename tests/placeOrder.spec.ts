import { test, expect } from '@playwright/test'
import { PlaceOrderPage } from '../pages/PlaceOrderPage';
import { SignUpPage, registerData } from '../pages/SignUpPage';
//import { LoginPage } from '../pages/LoginPage';
import { faker } from '@faker-js/faker'
import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('User should be able to register during checkout process', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();

    const placeOrderPage=new PlaceOrderPage(page);
    await placeOrderPage.placeOrder('Blue Top');

    const signUpPage = new SignUpPage(page);
    const email = faker.internet.email().toLocaleLowerCase();
    
    const registerData: registerData = {
        name: 'ABC',
        email,
        password: '1234',
        state: 'England',
        city: 'London',
        address: 'Dhaka',
        firstName: 'Test',
        lastName: 'User',
        zipCode: '40',
        mobileNumber: '01711012345',
        day: "1",
        month: "2",
        year: "2020"
    };

    await signUpPage.register(registerData);

    const checkOutPage = new CheckoutPage(page);

    const itemName = {
        nameOnCard: 'test',
        cardNum: '5555',
        cvc: '311',
        expirationMonth: '12',
        expirationYear: '2025'
    };

    await checkOutPage.proceedToCheckout(itemName);


})


test.only('User should be able to login during checkout process', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();

    const placeOrderPage=new PlaceOrderPage(page);
    await placeOrderPage.placeOrder('Blue Top');

    const loginPage = new LoginPage(page);
    await loginPage.login('Leilani.Mertz@hotmail.com', 'testpassword');


    const checkOutPage = new CheckoutPage(page);

    const itemName = {
        nameOnCard: 'test',
        cardNum: '5555',
        cvc: '311',
        expirationMonth: '12',
        expirationYear: '2025'
    };

    await checkOutPage.proceedToCheckout(itemName);

})