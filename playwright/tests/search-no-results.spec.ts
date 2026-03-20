import { test, expect } from '@playwright/test';

test('Search with no results shows empty state', async ({ page }) => {
  await page.goto('/app/myappdemo');
  
  //Procurar por um item que não existe
  await page.getByPlaceholder(/Search/i).fill('zzzzzz');
  await page.getByRole('button', { name: /search/i }).click();
  
  //Estado vazio é mostrado ao user
  await expect(page.getByText(/No results/i)).toBeVisible();
});
