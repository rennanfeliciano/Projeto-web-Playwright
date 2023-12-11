// @ts-check
const { test, expect } = require('@playwright/test');

// Abrir pagina inicial antes de executar os cenarios de testes
test.beforeEach (async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')})

//Cenarios de testes
test('Adicionando item no carrinho de compras @carrinho', async ({ page }) => {

  await page.locator('.product_img_wrap > a').first().click()
  await page.getByRole('link', { name: 'Add To Cart' }).click()
  await page.getByRole('heading', { name: 'Success!' }).isVisible;
 
});

test('Adicionando item ja presente no carrinho de compras @carrinho', async ({ page }) => {

    await page.locator('div:nth-child(2) > .product_item_two > .product_item_inner > .product_img_wrap > a').first().click();
    await page.getByRole('link', { name: 'Add To Cart' }).click();
    await page.waitForTimeout(1000)
    await page.getByRole('link', { name: 'Add To Cart' }).click();
    await page.getByRole('heading', { name: 'Failed!' }).isVisible;
  });
 
