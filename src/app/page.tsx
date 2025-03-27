import { Suspense } from 'react'
import { ArticleList } from '@/components/ArticleList'
import { HelloMessage } from '@/components/HelloMessage'

// Edge Runtimeを使用
export const runtime = 'edge'

// 動的レンダリングを有効化
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8 text-gray-900">
      <Suspense fallback={<div className="text-gray-900">メッセージを読み込み中...</div>}>
        <HelloMessage />
      </Suspense>
      
      <Suspense fallback={<div className="text-gray-900">記事を読み込み中...</div>}>
        <ArticleList />
      </Suspense>
    </main>
  )
}
