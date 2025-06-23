import { Page } from 'playwright';

class LoginPage {
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

}


export { LoginPage }