import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { NavbarComponent } from '../pages/NavbarComponent';
import { ProductsPage } from '../pages/ProductsPage';


test.beforeEach('Visit Website', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();
})

test('User should be able to add review on product',async({page}) => {
    const navBarComponent = new NavbarComponent(page);
    await navBarComponent.products();
    await expect(page.getByRole('heading',{name:"All Products"})).toHaveText("All Products");
    const productsPage = new ProductsPage(page);
    await productsPage.products();
    await expect(page.getByRole('link',{name:"Write Your Review"})).toHaveText("Write Your Review");
    await productsPage.productDetails();
    await expect(page.getByText("Thank you for your review.")).toBeVisible();
})