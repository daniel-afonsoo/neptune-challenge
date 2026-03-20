import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/state.json');

setup('authenticate', async ({ page }) => {
  
  // Ir para a app
  await page.goto('/');

  // Preencher credenciais atraves de locators
  await page.locator('#inLoginName-inner').fill(process.env.NEPTUNE_USER!);
  await page.locator('#inLoginPassword-inner').fill(process.env.NEPTUNE_PASSWORD!);

  // Submeter login
  await page.getByRole('button', { name: /sign in/i }).click();

  // Validar login bem sucedido
  await expect(page).toHaveURL(/cockpit\.html/);

  // Guardar sessão autenticada
  await page.context().storageState({ path: authFile });
});
