
const { test, expect } = require('@playwright/test');

// Тест 1. Перевірка форми входу
test('Перевірка форми входу', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');

  await expect(page.locator('#successMessage')).toBeVisible();
});

// Тест 2. Перевірка заголовка
test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Неіснуючий заголовок/);
});

// Тест 3. Перевірка обов'язкових полів
test('Валідація обов’язкових полів форми', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.click('#loginButton');

  const invalidFields = page.locator('input:invalid');

  await expect(invalidFields).toHaveCount(2);
  await expect(page.locator('#successMessage')).toBeHidden();
});
