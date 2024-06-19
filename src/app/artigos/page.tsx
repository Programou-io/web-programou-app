'use client'

import { client } from 'programou/utils/sanity/client'
import { useState } from 'react'
import { z } from 'zod'
import { Article } from './Article'
import { ArticleList } from './ArticleList'
import { EmptyState } from './EmptyState'
import { SeachInputField, SearchForm } from './SeachInputField'

interface ArticlesRepository {
  findMany(): Promise<Article[]>
}

class SanityArticlesRepository implements ArticlesRepository {
  async findMany(): Promise<Article[]> {
    const articleResponseSchema = z.array(
      z.object({
        title: z.string(),
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
    const articlesResponse = articleResponseSchema.parse(contentResponse)
    return articlesResponse.map((article) => {
      return {
        id: article.slug.current,
        title: article.title,
        excerpt: article.title.substring(0, 40).concat('...'),
        author: article.author.name,
        createdAt: article.publishedAt,
        imageUrl: 'https://cdn.sanity.io/'.concat(article.mainImage.asset.path),
        slug: article.slug.current,
      } as Article
    })
  }
}

const articlesRepository = new SanityArticlesRepository()

export default function ArticlePage() {
  const [allArticles, setAllArticles] = useState<Article[]>([])
  const [articles, setArticles] = useState(allArticles)

  articlesRepository.findMany().then((articles) => {
    setAllArticles(articles)
    setArticles(articles)
  })

  function submitActionHandler(search: SearchForm) {
    if (search.query.length === 0) {
      setArticles(allArticles)
    } else {
      setArticles(
        allArticles.filter(
          (article) =>
            article.title.includes(search.query) ||
            article.excerpt.includes(search.query) ||
            article.author.includes(search.query),
        ),
      )
    }
  }

  return (
    <div className="my-12 md:px-8">
      <div className="text-center grid gap-6 max-w-md mx-auto">
        <h2 className="font-bold text-4xl">Nossos artigos</h2>
        <p className="max-sm:mx-4">
          Aqui você econtra nossos artigos, onde trazemos os conhecimentos, para
          a comunidade.
        </p>
        <SeachInputField
          onSubmit={submitActionHandler}
          onChange={submitActionHandler}
        />
      </div>

      <div className="h-[2px] bg-gray-600 mx-2 my-6" />

      <div className="mt-16">
        {articles.length === 0 ? (
          <EmptyState />
        ) : (
          <ArticleList articles={articles} />
        )}
      </div>
    </div>
  )
}
