import { Suspense } from 'react'
import { ArticleList } from '@/components/ArticleList'
import { HelloMessage } from '@/components/HelloMessage'

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <Suspense fallback={<div>メッセージを読み込み中...</div>}>
        <HelloMessage />
      </Suspense>
      
      <Suspense fallback={<div>記事を読み込み中...</div>}>
        <ArticleList />
      </Suspense>
    </main>
  )
}
