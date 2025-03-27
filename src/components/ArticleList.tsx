import type { ArticlesResponse } from '@/types/api'
import { client } from '@/utils/api'

export async function ArticleList() {
  const response = await client.articles.$get()
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles')
  }

  const data: ArticlesResponse = await response.json()
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">記事一覧</h2>
      <div className="grid gap-4">
        {data.articles.map((article) => (
          <div key={article.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-gray-900">{article.title}</h3>
            <p className="text-gray-800">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 