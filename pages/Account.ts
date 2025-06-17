import { expect } from '@playwright/test'
import { Page } from 'playwright';
class Account {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }

    async deleteAccount() {
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
    }

}

export {Account };

