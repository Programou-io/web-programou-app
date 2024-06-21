import Image from 'next/image'
import { articlesRepository } from '../SanityArticlesRepository'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage(props: ArticlePageProps) {
  const article = await articlesRepository.findBySlug(props.params.slug)

  if (!article) return <div>Not found</div>

  return (
    <div className="max-w-4xl mx-auto mt-8 max-md:mx-4">
      <div className="grid items-center gap-4">
        <Image
          width={2200}
          height={120}
          src={article.imageUrl}
          alt=""
          className="rounded-3xl"
        />
        <h1 className="font-bold text-3xl">{article.title}</h1>
      </div>
    </div>
  )
}
