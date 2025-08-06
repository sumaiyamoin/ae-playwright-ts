import { expect, Page } from '@playwright/test'
import * as fs from 'fs';
import * as path from 'path';

type registerData = {
    name: string;
    email: string;
    password: string;
    state: string;
    city: string;
    address: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    mobileNumber: string;
    day: string;
    month: string;
    year: string;
};

class NavbarComponent {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }
    async login(email: string, password: string) {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async register(data: registerData) {
        const {
            name, email, password, state, city, address, firstName, lastName, zipCode, mobileNumber, day, month, year } = data;

        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        await this.page.getByRole('button', { name: "Signup" }).click();
        await this.page.getByRole('radio', { name: 'Mrs.' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.locator('#days').selectOption(day);
        await this.page.locator('#months').selectOption(month);
        await this.page.locator('#years').selectOption(year);

        await this.page.getByRole('checkbox', { name: "Sign up for our newsletter!" }).click();
        await this.page.getByRole('textbox', { name: 'First name' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Last name' }).fill(lastName);
        await this.page.getByRole('textbox', { name: "Address * (Street address, P.O. Box, Company name, etc.)" }).fill(address);
        await this.page.getByRole('combobox', { name: "Country *" }).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.getByRole('textbox', { name: "State *" }).fill(state);
        await this.page.getByRole('textbox', { name: "City * Zipcode *" }).fill(city);
        await this.page.locator('#zipcode').fill(zipCode);
        await this.page.getByRole('textbox', { name: "Mobile Number *" }).fill(mobileNumber);
        await this.page.getByRole('button', { name: "Create Account" }).click();
        await this.page.getByRole('heading', { name: 'Account Created!' }).waitFor();
        await this.page.getByText('Continue').click();

        interface User {
            email: string; 
            password: string;
        }

        const filePath = path.join(__dirname, '..', '/users.json'); //locate file
        const jsonPath = fs.readFileSync(filePath, "utf-8"); //read file
        const userListObj:User[] = JSON.parse(jsonPath); //parsing from the jsonFile to obj/list

        const newUserObj = { email, password };
        await userListObj.push(newUserObj);
        await fs.writeFileSync("users.json", JSON.stringify(userListObj, null, 2));
    }

    async deleteAccount() {
        await this.page.getByText('Delete Account').click();
        await this.page.getByRole('heading', { name: 'Account Deleted!' }).waitFor();
        return this.page.getByRole('heading', { name: 'Account Deleted!' });
    }

    async logout() {
        await this.page.getByRole('link', { name: ' Logout' }).click();
        //await expect(this.page.getByRole('heading',{name:'Login to your account'})).toBeVisible();
        const afterLogoutText = this.page.getByRole('heading', { name: 'Login to your account' });
    }

    async placeOrder(itemName: string) {
        // await this.page.locator(`text=${itemName}`).nth(0).hover();
        await this.page.waitForSelector('text=Blue Top', { state: 'visible' });
        await this.page.locator(`.single-products:has-text("${itemName}")`).first().hover();
        await this.page.locator('.overlay-content > .add-to-cart').first().click();
        // await page.locator('.overlay-content > .btn').first().click();
        await this.page.getByText('View Cart').click();
        await this.page.getByText('Proceed To Checkout').click();
        await this.page.getByRole('link', { name: 'Register / Login' }).click();
    }
}

export { NavbarComponent }