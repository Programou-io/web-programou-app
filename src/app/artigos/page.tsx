'use client'

import { useEffect, useState } from 'react'
import { Article } from './Article'
import { ArticleList } from './ArticleList'
import { EmptyState } from './EmptyState'
import { SanityArticlesRepository } from './SanityArticlesRepository'
import { SeachInputField, SearchForm } from './SeachInputField'

const articlesRepository = new SanityArticlesRepository()

export default function ArticlePage() {
  const [allArticles, setAllArticles] = useState<Article[]>([])
  const [articles, setArticles] = useState(allArticles)

  useEffect(() => {
    articlesRepository.findMany().then((articles) => {
      setAllArticles(articles)
      setArticles(articles)
    })
  }, [setAllArticles, setArticles])

  function submitActionHandler(search: SearchForm) {
    if (search.query.length === 0) {
      setArticles(allArticles)
    } else {
      setArticles(
        allArticles.filter((article) => {
          const searchLower = search.query.toLowerCase()
          return (
            article.title.toLowerCase().includes(searchLower) ||
            article.description.toLowerCase().includes(searchLower) ||
            article.author.toLowerCase().includes(searchLower)
          )
        }),
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
        <SeachInputField onSubmit={submitActionHandler} />
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
