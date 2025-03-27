import { handle } from 'hono/vercel'
import { routes } from '../routes'

// Edge Runtimeを使用
export const runtime = 'edge'

// 動的レンダリングを有効化
export const dynamic = 'force-dynamic'

// CORSを許可
export const fetchCache = 'force-no-store'

export const GET = handle(routes)
export const POST = handle(routes) 