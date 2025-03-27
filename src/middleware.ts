import { Hono } from 'hono'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const app = new Hono()

// Hello APIエンドポイント
app.get('/api/hello', (c) => c.json({ message: 'Hello from Hono API!' }))

// 記事一覧を取得するエンドポイント
app.get('/api/articles', (c) => c.json({ 
  articles: [
    { id: 1, title: '記事1', content: '内容1' },
    { id: 2, title: '記事2', content: '内容2' }
  ]
}))

// 新規記事を作成するエンドポイント
app.post('/api/articles', async (c) => {
  const body = await c.req.json()
  return c.json({ 
    message: '記事が作成されました',
    article: body
  })
})

export async function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const path = url.pathname

  // APIリクエストの場合のみHonoで処理
  if (path.startsWith('/api/')) {
    const res = await app.fetch(request)
    const data = await res.json()
    return NextResponse.json(data)
  }

  // それ以外のリクエストは通常のNext.jsの処理に委ねる
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*']
} 