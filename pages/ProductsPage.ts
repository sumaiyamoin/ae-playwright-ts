import { Page } from 'playwright';

class ProductsPage {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async products() {
       // await this.page.getByRole('link', { name: ' View Product'}).click();
        await this.page.locator('.choose > .nav > li > a').first().click();
    }

    async productDetails(){
        await this.page.getByRole('textbox',{name:"Your Name"}).fill('Test');
        await this.page.getByRole('textbox',{name: "Email Address", exact: true}).fill('test@yopmail.com');
        await this.page.getByRole('textbox',{name:"Add Review Here!"}).fill("This review is for test purpose");
        await this.page.getByRole('button',{name:'Submit'}).click();
    }

    /*

 await page.goto('https://automationexercise.com/products');
  await page.locator('.choose > .nav > li > a').first().click();
  await page.getByRole('link', { name: 'Write Your Review' }).click();
  await page.locator('div').filter({ hasText: 'Write Your Review' }).nth(4).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Email Address', exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  */

}


export { ProductsPage }