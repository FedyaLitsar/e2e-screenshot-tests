
const { test, expect } = require('@playwright/test');

// Тест 4. Перевірка заголовка сайту
test('Перевірка заголовка сайту', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

// Тест 5. Перевірка меню навігації
test('Перевірка меню навігації', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.locator('nav').first()).toBeVisible();
});

// Тест 6. Перевірка переходу за посиланням
test('Перевірка переходу за посиланням', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/docs\/intro/);
});
