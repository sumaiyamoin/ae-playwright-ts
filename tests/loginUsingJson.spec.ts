import { test } from "@playwright/test";
import { LoginPage, Person } from '../pages/loginUsingJson';
import { HomePage } from '../pages/HomePage';

test.beforeEach('Visit Website', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();
})


test("Login using JSON array list", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const users: Person[] = loginPage.readUsers();

  if (users.length === 0) {
    throw new Error("No users found in JSON!");
  }

  const user = users[0];
  await loginPage.loginWithUser(user);

  await page.waitForTimeout(2000);
  console.log("Logged in with:", user.email);
});


test.only("Login using JSON data", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const users: Person = loginPage.readUser();

  const user = users;
  await loginPage.loginWithUser(user);

  await page.waitForTimeout(2000);
  console.log("Logged in with:", user.email);
});