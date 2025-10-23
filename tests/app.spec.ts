import { test, expect } from "@playwright/test";

test("account set up page loads correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page).toHaveTitle(/Account set up/);
});
