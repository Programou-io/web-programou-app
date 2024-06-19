import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'y8jhl6zw',
  dataset: 'production',
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: false,
})
