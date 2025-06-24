import { test, expect } from '@playwright/test'
import { SignUpPage, registerData } from '../pages/SignUpPage';
import {LoginPage} from '../pages/LoginPage';
import { faker } from '@faker-js/faker'
import { HomePage } from '../pages/HomePage';
import { log } from 'console';



test.beforeEach('Visit Website', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();
})

test("Verify that user can register successfully", async ({ page }) => {
    const signupPage = new SignUpPage(page);

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

    await signupPage.register(data);

    console.log(data.name, data.email, data.password);
});

test('Verify if login is successful', async ({ page }) => {
    const email = "Leilani.Mertz@hotmail.com";
    const password = "testpassword";

    const loginPage = new LoginPage(page);
    await loginPage.login(email, password);

});

test('Verify if account can be deleted after registration', async ({ page }) => {
    const signupPage = new SignUpPage(page);

    const data: registerData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "test",
        state: "England",
        city: "London",
        address: "Dhaka",
        firstName: "Test",
        lastName: "User",
        zipCode: "40",
        mobileNumber: "01711012345", 
        day: "1",
        month: "2",
        year: "2020"
    };

    await signupPage.register(data);

    console.log(data.name, data.email, data.password);

    await signupPage.deleteAccount();
})

test('Verify if account can be deleted after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.login("Cleveland17@hotmail.com", "testpassword");

    const signupPage = new SignUpPage(page);
    await signupPage.deleteAccount();
})