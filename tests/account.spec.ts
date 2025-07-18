import { test, expect } from '@playwright/test'
import { SignUpPage, registerData } from '../pages/SignUpPage';
import {LoginPage} from '../pages/LoginPage';
import { faker } from '@faker-js/faker'
import { HomePage } from '../pages/HomePage';
import { NavbarComponent } from '../pages/NavbarComponent';
import { log } from 'console';



test.beforeEach('Visit Website', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();
})

test("Verify that user can register successfully", async ({ page }) => {
    const navBarComponent = new NavbarComponent(page);

    const data: registerData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "testpassword",
        state: "Dhaka",
        city: "Dhaka",
        address: "Dhanmondi",
        firstName: "Test",
        lastName: "User",
        zipCode: "40",
        mobileNumber: "01711012345",
        day: "1",
        month: "2",
        year: "2020"
    };

   await navBarComponent.register(data);

    console.log(data.name, data.email, data.password);
});

test('Verify if login is successful', async ({ page }) => {
    const email = "Leilani.Mertz@hotmail.com";
    const password = "testpassword";

    const navBarComponent = new NavbarComponent(page);
    await navBarComponent.login(email, password);

});

test('Verify if account can be deleted after registration', async ({ page }) => {
    const navBarComponent = new NavbarComponent(page);

    const data: registerData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "test",
        state: "England",
        city: "London",
        address: "London",
        firstName: "Test",
        lastName: "User",
        zipCode: "40",
        mobileNumber: "44201234567", 
        day: "1",
        month: "2",
        year: "2020"
    };

    await navBarComponent.register(data);
    console.log(data.name, data.email, data.password);

    await navBarComponent.deleteAccount();
})

test.only('Verify if account can be deleted after login', async ({ page }) => {
    const navBarComponent = new NavbarComponent(page);
    navBarComponent.login("Ilene.Kiehn-Weimann@yahoo.com", "testpassword");
    await navBarComponent.deleteAccount();
})