interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage(props: ArticlePageProps) {
  return (
    <div>
      <h1>{props.params.slug}</h1>
    </div>
  )
}
