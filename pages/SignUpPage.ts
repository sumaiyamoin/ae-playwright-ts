import { faker } from '@faker-js/faker';
import { Page } from 'playwright';

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
    day: string,
    month: string,
    year: string
};

class SignUpPage{
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }
    
    async register(data: registerData) {
        const { name, email, password, state, city, address, firstName, lastName, zipCode, mobileNumber, day, month, year} = data;

        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        await this.page.getByRole('button', { name: "Signup" }).click();
        await this.page.getByRole('radio', { name: 'Mrs.' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.locator('#days').selectOption(day);
        await this.page.locator('#months').selectOption(month);
        await this.page.locator('#years').selectOption(year);
        /*
        await this.page.locator('#days').nth(0).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.locator('#months').nth(0).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.locator('#years').nth(0).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        */
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
    }

    async deleteAccount() {
        await this.page.getByText('Delete Account').click();
        await this.page.getByRole('heading', { name: 'Account Deleted!' }).waitFor();
        return this.page.getByRole('heading', { name: 'Account Deleted!' });
    }
}


export { SignUpPage, registerData }