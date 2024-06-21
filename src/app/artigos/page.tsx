import { ArticlesContent } from './ArticlesContent'
import { articlesRepository } from './SanityArticlesRepository'

export default async function ArticlePage() {
  const articles = await articlesRepository.findMany()

  return (
    <div className="my-12 md:px-8">
      <ArticlesContent articles={articles} />
    </div>
  )
}
