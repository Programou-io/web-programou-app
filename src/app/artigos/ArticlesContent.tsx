'use client'

import { analyticsClient } from 'programou/utils/firebase/client'
import { useState } from 'react'
import { Article } from './Article'
import { ArticleList } from './ArticleList'
import { EmptyState } from './EmptyState'
import { SeachInputField, SearchForm } from './SeachInputField'

interface ArticlesContentProps {
  articles: Article[]
}

export function ArticlesContent(props: ArticlesContentProps) {
  const { articles: allArticles } = props
  const [articles, setArticles] = useState(allArticles)

  function submitActionHandler(search: SearchForm) {
    if (search.query.length === 0) {
      setArticles(allArticles)
    } else {
      analyticsClient.trackSearch({ term: search.query })
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

  function ListStateManager() {
    if (articles.length === 0) {
      return <EmptyState />
    }

    return <ArticleList articles={articles} />
  }

  return (
    <>
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
        <ListStateManager />
      </div>
    </>
  )
}
