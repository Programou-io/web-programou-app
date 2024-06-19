import { client } from 'programou/utils/sanity/client'
import { z } from 'zod'
import { Article } from './Article'
import { ArticlesRepository } from './ArticlesRepository'

export class SanityArticlesRepository implements ArticlesRepository {
  async findMany(): Promise<Article[]> {
    const articleResponseSchema = z.array(
      z.object({
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
      }),
    )
    const CONTENT_QUERY = `*[_type == "post"] {
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
    const contentResponse = await client.fetch(CONTENT_QUERY)
    console.log(contentResponse)
    const articlesResponse = articleResponseSchema.parse(contentResponse)
    return articlesResponse.map((article) => {
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
      } as Article
    })
  }
}
