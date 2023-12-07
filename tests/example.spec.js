// @ts-check
const { test, expect } = require('@playwright/test');

// Abrir pagina inicial antes de executar os cenario de testes
test.beforeEach (async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')})

//Cenarios de testes
test('login com sucesso @login', async ({ page }) => {
  
  //variavel para scrollar ate um botao
  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()

  await page.screenshot({ path: 'screenshot/screenshot1.png' })
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('rennanzinho@gmail.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('1234567')
  await page.getByRole('button', { name: 'login' }).click()
  await page.waitForSelector('#swal2-title:has-text("Login realizado")')
  await page.screenshot({ path: 'screenshot/screenshot2.png' })
});


