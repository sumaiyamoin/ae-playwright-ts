import { expect } from '@playwright/test'
import { Page } from 'playwright';

interface ICheckoutDetails {
    nameOnCard: string;
    cardNum: string;
    cvc: string;
    expirationMonth: string;
    expirationYear: string;
}

class CheckoutPage {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }


    // async proceedToCheckout(checkout: ICheckoutDetails) {
    //     await this.page.getByRole('link', { name: ' Cart' }).click();
    //     await this.page.getByText('Proceed To Checkout').click();
    //     await this.page.locator('textarea[name="message"]').fill('test comment');
    //     await this.page.getByRole('link', { name: 'Place Order' }).click();

    //     await this.page.locator('input[name="name_on_card"]').fill(checkout.nameOnCard);
    //     await this.page.locator('input[name="card_number"]').fill(checkout.cardNum);
    //     await this.page.getByRole('textbox', { name: 'ex.' }).fill(checkout.cvc);
    //     await this.page.getByRole('textbox', { name: 'MM' }).fill(checkout.expirationMonth);
    //     await this.page.getByRole('textbox', { name: 'YYYY' }).fill(checkout.expirationYear);
    //     await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    //     await this.page.getByText("Congratulations! Your order has been confirmed!").waitFor();
    //     await this.page.getByRole('link', { name: 'Continue' }).click();
    // }
    async proceedToCheckout(checkout: ICheckoutDetails) {
        await this.page.getByRole('link', { name: ' Cart' }).click();
        await this.page.getByText('Proceed To Checkout').click();
        await this.page.locator('textarea[name="message"]').fill('test comment');
        await this.page.getByRole('link', { name: 'Place Order' }).click();

        await this.page.locator('input[name="name_on_card"]').fill(checkout.nameOnCard);
        await this.page.locator('input[name="card_number"]').fill(checkout.cardNum);
        await this.page.getByRole('textbox', { name: 'ex.' }).fill(checkout.cvc);
        await this.page.getByRole('textbox', { name: 'MM' }).fill(checkout.expirationMonth);
        await this.page.getByRole('textbox', { name: 'YYYY' }).fill(checkout.expirationYear);
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await this.page.getByText("Congratulations! Your order has been confirmed!").waitFor();
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    async deleteAccount() {
        
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
        await this.page.getByRole('heading', { name: 'Account Deleted!' }).waitFor();
        return this.page.getByRole('heading', { name: 'Account Deleted!' });
    } 

}

export { CheckoutPage };

