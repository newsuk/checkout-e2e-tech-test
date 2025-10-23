# Checkout E2E Tech Test

This repository contains an E2E test suite for conducting a technical interview. The application is built using [Vite](https://vite.dev/) and E2E tests use [Playwright](https://playwright.dev/).

## Application fundamentals

The application is a simple account creation form with a number of input fields and a submit button.

On submission of the form, validation checks will mark incorrect inputs as invalid. The input fields have the following validation checks:

- firstname: any non-null string
- lastname: any non-null string
- email: valid email string passing the regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- password: string between 6 and 20 characters

On successful submission of the form, an account created confirmation message will be displayed.

If on successful submission of the form, the email contains `news.co.uk`, an error message will be shown stating the account could not be created. A retry link will be displayed. allowing the user to restart the process.

## Getting started

You will need to install [Node.js](https://nodejs.org) (we recommend using `nvm` to manage your local Node version)

Once you have `nvm` installed - to install the correct Node version run:

```bash
nvm use
```

Next, install the project dependencies using `npm`:

```bash
npm install
```

To start the dev server:

```bash
npm run dev
```
