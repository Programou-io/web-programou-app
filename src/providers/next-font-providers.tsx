// eslint-disable-next-line camelcase
import { Fira_Code, Roboto } from 'next/font/google'

export const roboto = Roboto({
  variable: '--font-default',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
})
