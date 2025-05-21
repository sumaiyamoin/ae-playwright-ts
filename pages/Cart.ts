import { expect } from '@playwright/test'
import { Page } from 'playwright';
class Cart {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async cart() {
        //await this.page.pause();
        await this.page.getByRole('link', { name: ' Cart' }).click();

        await this.page.getByText('Proceed To Checkout').click();
        await expect(this.page.locator('#address_delivery')).toContainText('Your delivery address');
        await this.page.locator('textarea[name="message"]').click();
        await this.page.locator('textarea[name="message"]').fill('test test');
        await this.page.getByRole('link', { name: 'Place Order' }).click();
        await this.page.locator('.form-control').nth(0).fill('test');
        await this.page.locator('.form-control').nth(1).fill('01234');
        await this.page.locator('.form-control').nth(2).fill('311');
        await this.page.locator('.form-control').nth(3).fill('19');
        await this.page.locator('.form-control').nth(4).fill('2025');
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await expect(this.page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');

    }

}

export { Cart }; 

