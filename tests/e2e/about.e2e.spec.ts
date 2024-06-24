import { expect, test } from '@playwright/test'

const ROUTE = 'https://programou.io/sobre'

test('about page render principal components', async ({ page }) => {
  await page.goto(ROUTE)

  await expect(page).toHaveTitle(/Programou/)

  await expect(page.getByRole('link', { name: 'Programou' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'inicío' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'sobre' })).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'Conheça mais sobre nós' }),
  ).toBeVisible()
  await expect(
    page.getByText(
      'Bem-vindo ao Programou! Nosso projeto é dedicado a ensinar programação, com foco específico em dispositivos Apple, de maneira prática. Aqui, você encontrará tutoriais detalhados, vídeos passo a passo e uma comunidade engajada de desenvolvedores sempre dispostos a ajudar. Se você está começando agora ou quer se especializar ainda mais, este é o lugar certo para você!',
    ),
  ).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'Nossa presença online' }),
  ).toBeVisible()
  await expect(
    page.getByText(
      'Estamos presentes em diversas plataformas, oferecendo projetos e conteúdos. Confira a seguir:',
    ),
  ).toBeVisible()

  await expect(
    page.getByRole('link', { name: 'Pagina no Github' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Canal no Youtube' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Pagina no LinkedIn' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Grupo no WhatsApp' }),
  ).toBeVisible()

  await expect(
    page.getByText('Copyright © 2024 Programou. Todos os direitos reservados'),
  ).toBeVisible()
})

test('about page redirect correct begin link', async ({ page }) => {
  await page.goto(ROUTE)

  await page.getByRole('link', { name: 'inicío' }).click()

  await expect(page).toHaveURL('https://programou.io')
})

test('about page redirect correct about link', async ({ page }) => {
  await page.goto(ROUTE)

  await page.getByRole('link', { name: 'sobre' }).click()

  await expect(page).toHaveURL(ROUTE)
})

test('about page redirect correct github link', async ({ page }) => {
  await page.goto(ROUTE)

  await page.getByRole('link', { name: 'Pagina no Github' }).click()

  await expect(
    page.getByRole('heading', { name: 'Programou.io' }),
  ).toBeVisible()

  await expect(page).toHaveURL('https://github.com/Programou-io')
})

test('about page redirect correct youtube link', async ({ page }) => {
  await page.goto(ROUTE)

  await page.getByRole('link', { name: 'Canal no Youtube' }).click()

  await expect(page).toHaveURL('https://www.youtube.com/@programou')
})

test('about page redirect correct linkedin link', async ({ page }) => {
  await page.goto(ROUTE)

  await page.getByRole('link', { name: 'Pagina no LinkedIn' }).click()

  await expect(page).toHaveURL('https://www.linkedin.com/company/programou')
})

test('about page redirect correct whatsapp link', async ({ page }) => {
  await page.goto(ROUTE)

  await page.getByRole('link', { name: 'Grupo no WhatsApp' }).click()

  await expect(page.getByRole('heading', { name: 'Tech Talk' })).toBeVisible()
})
