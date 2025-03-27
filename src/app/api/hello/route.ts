import { NextResponse } from 'next/server'
import { Hono } from 'hono'

export const runtime = 'edge'

const app = new Hono()
app.get('/', (c) => c.json({ message: 'Hello from Hono API!' }))

export async function GET() {
  const res = await app.fetch(new Request('http://localhost/'), {
    headers: { 'x-custom': 'hello' }
  })
  const data = await res.json()
  return NextResponse.json(data)
} 