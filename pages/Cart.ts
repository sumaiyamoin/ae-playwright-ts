import { Page } from "@playwright/test";   

class Cart{
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }
    async addToCart(){
        const cartPageText = this.page.getByText('Shopping Cart');
        await this.page.getByText('Proceed To Checkout').click();
        await this.page.getByRole('link', { name: 'Register / Login' }).click();
    }
}