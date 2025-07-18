import { Page } from 'playwright'

class HomePage {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async visit(){
        await this.page.goto('https://www.automationexercise.com/');
    }

    async addToCart(itemName: string){
        await this.page.waitForSelector('text=Blue Top', { state: 'visible' });
        await this.page.locator(`.single-products:has-text("${itemName}")`).first().hover();
        await this.page.locator('.overlay-content > .add-to-cart').first().click();
        await this.page.getByText('View Cart').click();
    }
}

export { HomePage }