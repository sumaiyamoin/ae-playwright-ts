import { expect } from '@playwright/test'
import { Page } from 'playwright';
class PlaceOrderPage {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    //   async visit(url: string){
    //     await this.page.goto(url);
    // }
    
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

export {PlaceOrderPage};

