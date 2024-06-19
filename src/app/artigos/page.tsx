'use client'

import { useState } from 'react'
import { ArticleList } from './ArticleList'
import { EmptyState } from './EmptyState'
import { SeachInputField, SearchForm } from './SeachInputField'

export default function ArticlePage() {
  const allArticles = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-1',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-2',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-3',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '4',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-1',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '5',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-2',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '6',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift 2',
      slug: 'article-3',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '7',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift 1',
      slug: 'article-1',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '8',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift 3',
      slug: 'article-2',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '9',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-3',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '10',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-1',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '11',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to create a complete component using view code for Swift',
      slug: 'article-2',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
    {
      id: '12',
      imageUrl:
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:
        'How to create a complete component using view code for Swift Batata',
      slug: 'article-3',
      excerpt:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex incidunt, excepturi porro vel repellat deserunt culpa veritatis tempora, fugit consectetur expedita fuga hic odio! Molestias necessitatibus hic non maxime itaque...',
      author: 'Paolo Prodossimo Lopes',
      createdAt: '10 Apr 2024',
    },
  ]
  const [articles, setArticles] = useState(allArticles)

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
