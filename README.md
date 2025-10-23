# Checkout E2E Tech Test

This repository contains test suites for conducting a technical interview. The application is built using [Vite](https://vite.dev/) and E2E tests use [Playwright](https://playwright.dev/).

## App structure

The application is a simple account creation form with a number of input fields and a submit button.

On submission of the form, validation checks will mark incorrect inputs as invalid. The input fields have the following validation checks:

- `firstname`: any non-null string
- `lastname`: any non-null string
- `email`: valid email string passing the regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- `password`: string between 6 and 20 characters

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

`Vite` will try to start a local dev server on port `5173` [http://localhost:5173](http://localhost:5173)

## Testing

Testing is achieved with both Unit and E2E tests

### Unit tests

We use [Vitest](https://vitest.dev) for unit tests. To run unit tests use:

```bash
npm run test
```

### E2E tests

We use [Playwright](https://playwright.dev/) for E2E tests.

Start the dev server (as above) in a separate terminal window:

To run E2E tests use:

```bash
npm run test:e2e
```

To run E2E tests using UI mode.

```bash
npm run test:e2e:ui
```
