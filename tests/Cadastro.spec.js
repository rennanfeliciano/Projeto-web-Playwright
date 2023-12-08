// @ts-check
const { test, expect } = require('@playwright/test');

// Abrir pagina inicial antes de executar os cenarios de testes
test.beforeEach (async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')})

//Cenarios de testes
test('Cadastro com sucesso @cadastro', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Cadastro' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennan')
  await page.locator('#email').click()
  await page.locator('#email').fill('rennan@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('1234567')
  await page.getByRole('button', { name: 'cadastrar' }).click()
  await page.getByText('Bem-vindo rennan')
});


test('Cadastro sem nome @cadastro', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Cadastro' }).click()
  await page.locator('#email').click()
  await page.locator('#email').fill('rennan@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('1234567')
  await page.getByRole('button', { name: 'cadastrar' }).click()
  await page.getByText('O campo nome deve ser prenchido')
});


test('Cadastro sem email @cadastro', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Cadastro' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennan')
  await page.locator('#password').click()
  await page.locator('#password').fill('1234567')
  await page.getByRole('button', { name: 'cadastrar' }).click()
  await page.getByText('O campo e-mail deve ser prenchido corretamente')
});


test('Cadastro sem senha @cadastro', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Cadastro' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennan')
  await page.locator('#email').click()
  await page.locator('#email').fill('rennan@gmail.com')
  await page.getByRole('button', { name: 'cadastrar' }).click()
  await page.getByText('O campo senha deve ter pelo menos 6 dígitos')
});


