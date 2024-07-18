import { test, expect } from '@playwright/test';

test.describe('Example ui and smoke tag test', () => {

  test('should not run', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Wait Conditions')).toBeVisible();
  });

  test('should run with both tags',{ tag: ['@smoke', '@uitest'] }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('div a.btn')).toHaveCount(8);
  });
});
