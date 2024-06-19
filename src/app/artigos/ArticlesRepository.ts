import { Article } from './Article'

export interface ArticlesRepository {
  findMany(): Promise<Article[]>
}
