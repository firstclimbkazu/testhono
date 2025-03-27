import type { Article } from '@/types/api'

export async function getHelloMessage() {
  return {
    message: 'Hello from Hono API!'
  }
}

export async function getArticlesList(): Promise<{ articles: Article[] }> {
  return {
    articles: [
      { id: 1, title: '記事1', content: '内容1' },
      { id: 2, title: '記事2', content: '内容2' }
    ]
  }
} 