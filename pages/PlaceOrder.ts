import { expect } from '@playwright/test'
import { Page } from 'playwright';
class PlaceOrder {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async placeOrder(itemName: string) {
        await this.page.goto('https://www.automationexercise.com/');
        await this.page.locator(`text=${itemName}`).nth(0).hover();
        await this.page.locator('.overlay-content > .add-to-cart').first().click();
        await this.page.getByText('View Cart').click();        
        await this.page.getByText('Proceed To Checkout').click();
    }

}

export {PlaceOrder};

