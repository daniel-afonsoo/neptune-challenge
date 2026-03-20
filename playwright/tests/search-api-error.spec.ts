import { test, expect } from '@playwright/test';

test('API failure shows error message to user', async ({ page }) => {
  await page.goto('/app/myappdemo');
  
  //Pesquisa que provoca API error
  await page.getByPlaceholder(/Search/i).fill('error');
  await page.getByRole('button', { name: /search/i }).click();
 
 //O user vê a mensagem de erro
 await expect(
  page.getByText(/Service temporarily unavailable/i)
).toBeVisible();
});
