import { Page } from 'playwright'

class HomePage {
    private page: Page;
    constructor(webpage: Page) {
        this.page = webpage;
    }
    // async visitWebsite(url: string) {
    //     await this.page.goto(url, {
    //         timeout: 60000
    //     });
    // }
    async visit(){
        await this.page.goto('https://www.automationexercise.com/');
    }
}

export { HomePage }