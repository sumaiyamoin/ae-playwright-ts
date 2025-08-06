import * as fs from "fs";
import * as path from "path";
import { Page } from "playwright";

interface Person {
  email: string;
  password: string;
}

class LoginPage {
    private page: Page;

    constructor(webpage: Page) {
        this.page = webpage;
    }

    public readUsers(): Person[] {
        //const filePath = path.join(__dirname, "test", "users.json");
        const filePath = path.join(__dirname, "..", "test", "users.json");
        try {
            const jsonData = fs.readFileSync(filePath, "utf-8");
            const userObj: Person[] = JSON.parse(jsonData);
            return userObj;
        } catch (error) {
            console.error("Error reading or parsing JSON:", error);
            return [];
        }
    }


    public readUser(): Person {
        //const filePath = path.join(__dirname, "test", "users.json");
        const filePath = path.join(__dirname, "..", "test", "users.json");
        try {
            const jsonData = fs.readFileSync(filePath, "utf-8");
            const userObj: Person = JSON.parse(jsonData);
            return userObj;
        } catch (error) {
            console.error("Error reading or parsing JSON:", error);
            return error;
        }
    }

    public async loginWithUser(user: Person) {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(user.email);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(user.password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}

export {LoginPage, Person}
