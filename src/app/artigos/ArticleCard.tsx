import Image from 'next/image'
import { Article } from './Article'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard(props: ArticleCardProps) {
  return (
    <div className="cursor-pointer col-span-1 hover:bg-gray-700 transition-all p-2 rounded-lg hover:scale-105">
      <Image
        alt={`capa do artigo ${props.article.title}`}
        src={props.article.imageUrl}
        height={400}
        width={500}
        className="rounded-md overflow-hidden object-cover h-24 line-clamp-2"
      />
      <h2 className="font-bold text-lg mt-2">{props.article.title}</h2>
      <p className="line-clamp-3 text-gray-400">{props.article.excerpt}</p>
      <p className="text-sm text-gray-400 mt-2">
        {props.article.author} | {props.article.createdAt}
      </p>
    </div>
  )
}
