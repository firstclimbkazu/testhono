import { hc } from 'hono/client'
import type { AppType } from '@/app/api/routes'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ''
export const client = hc<AppType>(baseUrl) 