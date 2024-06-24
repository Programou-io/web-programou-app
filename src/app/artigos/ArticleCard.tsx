import Image from 'next/image'
import Link from 'next/link'
import { analyticsClient } from 'programou/utils/firebase/client'
import { Article } from './Article'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard(props: ArticleCardProps) {
  function cardClickActionHandler() {
    analyticsClient.trackClick({
      item: `article:${props.article.slug}`,
    })
  }
  return (
    <Link
      href={`artigos/${props.article.slug}`}
      className="cursor-pointer col-span-1 hover:bg-gray-700 transition-all p-2 rounded-lg hover:scale-105"
      onClick={cardClickActionHandler}
    >
      <Image
        alt={`capa do artigo ${props.article.title}`}
        src={props.article.imageUrl}
        priority={true}
        height={400}
        width={500}
        className="rounded-md overflow-hidden object-cover h-24 line-clamp-2"
      />
      <h2 className="font-bold text-lg mt-2">{props.article.title}</h2>
      <p className="line-clamp-3 text-gray-400">{props.article.description}</p>
      <p className="text-sm text-gray-400 mt-2">
        {props.article.author} | {props.article.createdAt}
      </p>
    </Link>
  )
}
