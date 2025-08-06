import { test, expect } from '@playwright/test'
//import { PlaceOrderPage } from '../pages/PlaceOrderPage';
import { SignUpPage, registerData } from '../pages/SignUpPage';
//import { LoginPage } from '../pages/LoginPage';
import { faker } from '@faker-js/faker'
import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
import { NavbarComponent } from '../pages/NavbarComponent';

test('User should be able to register during checkout process', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();

    await homePage.addToCart('Blue Top');

    const navBarComponent = new NavbarComponent(page);
    const email = faker.internet.email().toLocaleLowerCase();
    
    const registerData: registerData = {
        name: 'ABC',
        email,
        password: '1234',
        state: 'England',
        city: 'London',
        address: 'London',
        firstName: 'Test',
        lastName: 'User',
        zipCode: '40',
        mobileNumber: '01711012345',
        day: "1",
        month: "2",
        year: "2020"
    };

    await navBarComponent.register(registerData);

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

    
    //const placeOrderPage=new PlaceOrderPage(page);
    //await placeOrderPage.placeOrder('Blue Top');
    const navBarComponent = new NavbarComponent(page);
    await navBarComponent.placeOrder('Blue Top');

    //const navBarComponent = new NavbarComponent(page);
    await navBarComponent.login('Leilani.Mertz@hotmail.com', 'testpassword');


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