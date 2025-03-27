import { Hono } from 'hono'
import { cors } from 'hono/cors'
import type { HelloResponse, ArticlesResponse, CreateArticleRequest, CreateArticleResponse } from '@/types/api'

const app = new Hono()

// CORSミドルウェアを追加
app.use('*', cors())

const routes = app
  .get('/hello', (c) => {
    return c.json<HelloResponse>({
      message: 'Hello from Hono API!'
    })
  })
  .get('/articles', (c) => {
    return c.json<ArticlesResponse>({
      articles: [
        { id: 1, title: '記事1', content: '内容1' },
        { id: 2, title: '記事2', content: '内容2' }
      ]
    })
  })
  .post('/articles', async (c) => {
    const body = await c.req.json<CreateArticleRequest>()
    return c.json<CreateArticleResponse>({ 
      message: '記事が作成されました',
      article: body
    })
  })

export type AppType = typeof routes
export { routes } 