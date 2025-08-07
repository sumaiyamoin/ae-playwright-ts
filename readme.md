# AE-oop

This project is an automated end-to-end testing suite for [automationexercise.com](https://www.automationexercise.com/) using [Playwright](https://playwright.dev/) and TypeScript. It demonstrates object-oriented design for page objects and test organization.

## Features

- User registration, login, and account deletion flows
- Checkout and order placement with registration or login during checkout
- Product review submission
- Data-driven login using JSON user data
- Modular page object structure for maintainability

## Project Structure

```
├── pages/         # Page Object Model classes (HomePage, NavbarComponent, etc.)
├── tests/         # Playwright test specs
├── test/          # JSON data files and utility scripts
├── users.json     # Registered users (for login tests)
├── package.json   # Project dependencies
├── playwright.config.ts # Playwright configuration
└── readme.md      # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
npm install
```

### Running Tests

```bash
npx playwright test
```

- Test reports are generated in `/playwright-report/`.

### Test Data

- User credentials are stored in `users.json`.
- Faker is used for generating random user data during registration.

## Key Files

- `pages/`: Contains all page object classes (e.g., `HomePage.ts`, `NavbarComponent.ts`)
- `tests/`: Contains test specs (e.g., `account.spec.ts`, `placeOrder.spec.ts`)
- `test/users.json`: Sample users for data-driven login
- `playwright.config.ts`: Playwright configuration (browser, reporter, etc.)

## Notes

- The project uses Playwright's test runner and expects the target website to be available.
- Some tests write to `users.json` to store new users for login scenarios.
- Video recording is enabled for Chromium runs.