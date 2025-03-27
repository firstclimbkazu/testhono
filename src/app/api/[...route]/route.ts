import { Hono } from 'hono'
import { cors } from 'hono/cors'
import type { HelloResponse, ArticlesResponse, CreateArticleRequest, CreateArticleResponse } from '@/types/api'

// Edge Runtimeを使用
export const runtime = 'edge'

// 動的レンダリングを有効化
export const dynamic = 'force-dynamic'

// キャッシュを無効化
export const fetchCache = 'force-no-store'

// リクエストハンドラー
export async function GET(request: Request) {
  const app = new Hono()
  
  // CORSミドルウェアを追加
  app.use('*', cors())
  
  // ルートの定義
  app.get('/hello', (c) => {
    return c.json<HelloResponse>({
      message: 'Hello from Hono API!'
    })
  })
  
  app.get('/articles', (c) => {
    return c.json<ArticlesResponse>({
      articles: [
        { id: 1, title: '記事1', content: '内容1' },
        { id: 2, title: '記事2', content: '内容2' }
      ]
    })
  })

  // リクエストを処理
  const url = new URL(request.url)
  const path = url.pathname.replace(/^\/api/, '')
  return app.fetch(new Request(url.origin + path, request))
}

export async function POST(request: Request) {
  const app = new Hono()
  
  // CORSミドルウェアを追加
  app.use('*', cors())
  
  // ルートの定義
  app.post('/articles', async (c) => {
    const body = await c.req.json<CreateArticleRequest>()
    return c.json<CreateArticleResponse>({ 
      message: '記事が作成されました',
      article: body
    })
  })

  // リクエストを処理
  const url = new URL(request.url)
  const path = url.pathname.replace(/^\/api/, '')
  return app.fetch(new Request(url.origin + path, request))
} 