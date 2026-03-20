import { test, expect } from '@playwright/test';

test('Search returns matching results and opens item details', async ({ page }) => {
  await page.goto('/app/myappdemo');

  // Pesquisa
  await page.getByPlaceholder(/Search/i).fill('Dell');
  await page.getByRole('button', {  name: /search/i }).click();

  // Os resultados da pesquisa aparecem
  const itemLink = page.getByRole('link', { name: /Dell.*Laptop/i});
  await expect(itemLink).toBeVisible();
  await expect(itemLink).toBeEnabled();

  // Abrir detalhes do item 
  await itemLink.click();

  // O texto associado ao item é mostrado
  await expect(
    page.getByText(/Professional-grade laptop/i)
  ).toBeVisible();
});
