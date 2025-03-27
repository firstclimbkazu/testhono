import type { Article } from '@/types/api'
import { getArticlesList } from '@/lib/data'

export async function ArticleList() {
  const data = await getArticlesList()
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">記事一覧</h2>
      <div className="grid gap-4">
        {data.articles.map((article: Article) => (
          <div key={article.id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="mt-2 text-gray-600">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 