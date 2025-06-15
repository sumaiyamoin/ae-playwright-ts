import { expect } from '@playwright/test'
import { Page } from 'playwright';
class DeletePage {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async deleteAccount() {
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
        await expect(this.page.getByRole('heading', { name: 'Account Deleted!' })).toHaveText('Account Deleted!');
        //await expect(this.page.locator('b')).toContainText('Account Deleted!');
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

}

export { DeletePage };

