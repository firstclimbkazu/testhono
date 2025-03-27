import { handle } from 'hono/vercel'
import { routes } from '../routes'

export const runtime = 'edge'

export const GET = handle(routes)
export const POST = handle(routes) 