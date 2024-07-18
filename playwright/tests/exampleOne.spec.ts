import { test, expect } from '@playwright/test';

test.describe('Example test', () => {

  test('should run', { tag: '@smoke' }, async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('What is Playground?')).toBeVisible();
  });

  test('should not run', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Available Pages')).toBeVisible();
  });
});