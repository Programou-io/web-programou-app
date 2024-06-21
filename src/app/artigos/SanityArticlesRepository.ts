import { client } from 'programou/utils/sanity/client'
import { z } from 'zod'
import { Article } from './Article'
import { ArticlesRepository } from './ArticlesRepository'

export class SanityArticlesRepository implements ArticlesRepository {
  private readonly articleSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: z.object({
      name: z.string(),
    }),
    mainImage: z.object({
      asset: z.object({
        path: z.string(),
      }),
    }),
    slug: z.object({
      current: z.string(),
    }),
    publishedAt: z.string(),
    body: z.any(),
  })

  async findMany(): Promise<Article[]> {
    const articlesSchema = z.array(this.articleSchema)
    const query = `*[_type == "post"] {
        ...,
        author->,
        mainImage {
          ...,
          asset->
        },
        categories[]->,
        body
      }
      `
    const contentResponse = await client.fetch(query)
    const articlesResponse = articlesSchema.parse(contentResponse)
    return articlesResponse.map(this.map)
  }

  async findBySlug(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      ...,
        author->,
        mainImage {
          ...,
          asset->
        },
        categories[]->,
        body
    }`

    const contentResponse = await client.fetch(query, { slug })
    const article = this.articleSchema.parse(contentResponse)
    return this.map(article)
  }

  private map(article: z.infer<typeof this.articleSchema>) {
    return {
      id: article.slug.current,
      title: article.title,
      description:
        article.description.length > 120
          ? article.description.substring(0, 120).concat('...')
          : article.description,
      author: article.author.name,
      createdAt: article.publishedAt,
      imageUrl: 'https://cdn.sanity.io/'.concat(article.mainImage.asset.path),
      slug: article.slug.current,
      body: article.body,
    }
  }
}

export const articlesRepository = new SanityArticlesRepository()
