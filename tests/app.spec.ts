import { test, expect } from "@playwright/test";

test("account set up page loads correctly", async ({ page }) => {
  await page.goto("http://localhost:5173", { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Account set up/);
});


test("should successfully create an account with valid details", async ({ page }) => {
  await page.goto("http://localhost:5173", { waitUntil: 'domcontentloaded' });
  await page.fill('#input-firstname', 'John');
  await page.fill('#input-lastname', 'Doe');
  await page.fill('#input-email', 'john.doe@example.com');
  await page.fill('#input-password', 'Password123!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveTitle(/Account set up/);
  const firstParagraph = page.locator('p').first();
  expect(firstParagraph).toHaveText('Congratulations, your account has been setup successfully. You now have digital access to thetimes.com')
});


test('should show validation errors when required fields are empty', async ({ page }) => {
  await page.goto("http://localhost:5173", { waitUntil: 'domcontentloaded' });
  await page.click('button[type="submit"]');

  await expect(page.locator('#input-firstname + p.error')).toHaveText('First name is required');
  await expect(page.locator('#input-lastname + p.error')).toHaveText('Last name is required');
  await expect(page.locator('#input-email + p.error')).toHaveText('Please provide a valid email');
  await expect(page.locator('#input-password + a + p.error')).toHaveText('Please provide a valid password');
});

test('should show error for invalid email format', async ({ page }) => {
  await page.goto("http://localhost:5173", { waitUntil: 'domcontentloaded' });
  await page.fill('#input-firstname', 'John');
  await page.fill('#input-lastname', 'Doe');
  await page.fill('#input-email', 'john.doe');
  await page.fill('#input-password', 'Password123!');
  await page.click('button[type="submit"]');

  await expect(page.locator('#input-email + p.error')).toHaveText('Please provide a valid email');
});

test('should show password strength error for weak password', async ({ page }) => {
  await page.goto("http://localhost:5173", { waitUntil: 'domcontentloaded' });
  await page.fill('#input-firstname', 'John');
  await page.fill('#input-lastname', 'Doe');
  await page.fill('#input-email', 'john.doe@news.co.uk');
  await page.fill('#input-password', 'ee!');
  await page.click('button[type="submit"]');

  await expect(page.locator('#input-password + a + p.error')).toHaveText('Please provide a valid password');
});

