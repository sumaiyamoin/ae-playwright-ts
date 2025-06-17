import { Page } from 'playwright';
class Signup {
    private page: Page; //property of a class
    constructor(webpage: Page) { //parameter of constructor
        this.page = webpage;
    }
    async register(name: string, email: string, password: string) {
        await this.page.getByText('Register / Login').nth(1).click();
        await this.page.getByRole('textbox', { name: "Name" }).fill(name);
        await this.page.getByRole('textbox', { name: "Email Address" }).nth(1).fill(email);
        await this.page.getByRole('button', { name: "Signup" }).click();
        await this.page.getByRole('radio', { name: 'Mrs.' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.locator('#days').nth(0).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.locator('#months').nth(0).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.locator('#years').nth(0).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.getByRole('checkbox', { name: "Sign up for our newsletter!" }).click();
        await this.page.getByRole('textbox', { name: 'First name' }).fill("Test");
        await this.page.getByRole('textbox', { name: 'Last name' }).fill("User");
        await this.page.getByRole('textbox', { name: "Address * (Street address, P.O. Box, Company name, etc.)" }).fill("Mogbazar, Dhaka");
        await this.page.getByRole('combobox', { name: "Country *" }).click();
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.getByRole('textbox', { name: "State *" }).fill("England");
        await this.page.getByRole('textbox', { name: "City * Zipcode *" }).fill("London");
        await this.page.locator('#zipcode').fill('48');
        await this.page.getByRole('textbox', { name: "Mobile Number *" }).fill("88000008467");
        await this.page.getByRole('button', { name: "Create Account" }).click();
    }
}
export { Signup }