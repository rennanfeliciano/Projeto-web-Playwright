// @ts-check
const { test, expect } = require('@playwright/test');

// Abrir pagina inicial antes de executar os cenarios de testes
test.beforeEach (async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')})

//Cenarios de testes
test('login com sucesso @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennanzinho@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('1234567')
  await page.getByRole('button', { name: 'login' }).click()
  await page.waitForSelector('#swal2-title:has-text("Login realizado")')
});


test('login sem senha @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennanzinho@gmail.com')
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByText('Senha inválida.')
});


test('login sem email @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#password').click()
  await page.locator('#password').fill('1234567')
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByText('Senha inválida.')
});


test('login sem email e senha @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Login' }).click()
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByText('E-mail inválido.')
});


test('login com menos de 6 caracteres @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennanzinho@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('12345')
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByText('Senha inválida.')
});
