import { expect } from '@playwright/test'
import { Page } from 'playwright';

interface ICheckoutDetails {
    nameOnCard: string;
    cardNum: string;
    cvc: string;
    expirationMonth: string;
    expirationYear: string;
}

class Checkout {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }


    async proceedToCheckout(checkout: ICheckoutDetails) {
        //await this.page.pause();
        await this.page.getByRole('link', { name: ' Cart' }).click();

        await this.page.getByText('Proceed To Checkout').click();
        await expect(this.page.locator('#address_delivery')).toContainText('Your delivery address');
        await this.page.locator('textarea[name="message"]').fill('test comment');
        await this.page.getByRole('link', { name: 'Place Order' }).click();
        await this.page.getByRole('textbox').nth(0).fill(checkout.nameOnCard);
        await this.page.getByRole('textbox').nth(1).fill(checkout.cardNum);
        await this.page.getByRole('textbox').nth(2).fill(checkout.cvc);
        await this.page.getByRole('textbox').nth(3).fill(checkout.expirationMonth);
        await this.page.getByRole('textbox').nth(4).fill(checkout.expirationYear);
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await expect(this.page.getByText(/Congratulations! Your order has been confirmed!/)).toBeVisible();


    }

}

export { Checkout };

