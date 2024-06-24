import Image from 'next/image'
import { articlesRepository } from '../SanityArticlesRepository'

import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage(props: ArticlePageProps) {
  const article = await articlesRepository.findBySlug(props.params.slug)

  if (!article) return <div>Not found</div>

  return (
    <div className="max-w-4xl mx-auto mt-8 max-md:mx-4 grid gap-2">
      <Link
        href="/artigos"
        className="flex gap-2 items-center py-2 cursor-pointer"
      >
        <ArrowLeft /> Voltar
      </Link>
      <div className="grid items-center gap-4">
        <Image
          width={1200}
          height={80}
          src={article.imageUrl}
          alt=""
          className="rounded-3xl"
        />
        <h1 className="font-bold text-3xl">{article.title}</h1>
        <PortableText value={article.body} />
      </div>
    </div>
  )
}
