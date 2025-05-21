import { expect } from '@playwright/test'
import { Page } from 'playwright';
class PlaceOrder {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async placeOrder() {
        await this.page.getByText('Biba').scrollIntoViewIfNeeded();
        await this.page.locator('.single-products').first().hover();
        await this.page.locator('.overlay-content > .add-to-cart').first().click();
        await this.page.getByText('View Cart').click();

        expect(await this.page.locator('.active').first()).toContainText('Shopping Cart');
        await this.page.getByText('Proceed To Checkout').click();

    }

}

export {PlaceOrder};

