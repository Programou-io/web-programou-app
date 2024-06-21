import { Article } from './Article'

export interface ArticlesRepository {
  findMany(): Promise<Article[]>
  findBySlug(slug: string): Promise<Article | null>
}
