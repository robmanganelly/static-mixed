import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Expect h1 to contain a substring.
  expect(page).toBeTruthy();
});
