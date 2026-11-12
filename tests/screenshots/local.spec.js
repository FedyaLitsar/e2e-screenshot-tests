
const { test, expect } = require('@playwright/test');

// Screenshot-тест №1
// Перевірка вигляду всієї сторінки
test('Перевірка скриншота сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveScreenshot('local-page.png');
});

// Screenshot-тест №2
// Перевірка вигляду заголовка
test('Перевірка скриншота заголовка', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const heading = page.locator('h1');

  await expect(heading).toHaveScreenshot('heading.png');
});
