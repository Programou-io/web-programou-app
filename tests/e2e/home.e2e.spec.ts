import { expect, test } from '@playwright/test'

const ROUTE = 'https://programou.io'

test('should be able to acess the home page', async ({ page }) => {
  await page.goto(ROUTE)

  await expect(page).toHaveTitle(/Programou/)
  await expect(page.getByRole('link', { name: 'inicío' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'sobre' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Desenvolva seus aplicativos móveis' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Saiba mais' })).toBeVisible()
  await expect(
    page.getByText('Copyright © 2024 Programou. Todos os direitos reservados'),
  ).toBeVisible()
})

test('should redirect to the home if click in the programou header', async ({
  page,
}) => {
  await page.goto(ROUTE)

  await expect(page.getByRole('link', { name: 'Programou' })).toBeVisible()
  await page.getByRole('link', { name: 'Programou' }).click()
  await expect(page).toHaveURL(ROUTE)
})

test('should redirect to learn more when click on link', async ({ page }) => {
  await page.goto(ROUTE)

  await expect(page.getByRole('link', { name: 'sobre' })).toBeVisible()

  await page.getByRole('link', { name: 'sobre' }).click()

  await expect(page).toHaveURL('https://programou.io/sobre')
})

test('should redirect to about page whe click in learn more', async ({
  page,
}) => {
  await page.goto(ROUTE)

  await expect(page.getByRole('link', { name: 'Saiba mais' })).toBeVisible()

  await page.getByRole('link', { name: 'Saiba mais' }).click()

  await expect(page).toHaveURL('https://programou.io/sobre')
})

test('home alert should redirect to the whatsapp invite', async ({ page }) => {
  await page.goto(ROUTE)
  await expect(
    page.getByText('Participe do nosso grupo de devs no WhatsApp.'),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Conhecer agora!' }),
  ).toBeVisible()

  await page.getByRole('link', { name: 'Conhecer agora!' }).click()

  await expect(page.getByText('Tech Talk')).toBeVisible()
})
