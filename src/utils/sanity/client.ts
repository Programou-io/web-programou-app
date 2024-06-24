import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATA_SET,
  apiVersion: '2024-03-11',
  useCdn: process.env.SANITY_USE_CDN === 'true',
})
