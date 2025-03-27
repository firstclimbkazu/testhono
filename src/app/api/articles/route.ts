import { NextResponse } from 'next/server'
import { Hono } from 'hono'

export const runtime = 'edge'

const app = new Hono()

// 記事一覧を取得するエンドポイント
app.get('/', (c) => c.json({ 
  articles: [
    { id: 1, title: '記事1', content: '内容1' },
    { id: 2, title: '記事2', content: '内容2' }
  ]
}))

// 新規記事を作成するエンドポイント
app.post('/', async (c) => {
  const body = await c.req.json()
  return c.json({ 
    message: '記事が作成されました',
    article: body
  })
})

export async function GET() {
  const res = await app.fetch(new Request('http://localhost/'), {
    headers: { 'x-custom': 'hello' }
  })
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const res = await app.fetch(request)
  const data = await res.json()
  return NextResponse.json(data)
} 