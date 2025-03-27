import { hc } from 'hono/client'
import type { AppType } from '@/app/api/routes'

// APIクライアントの設定
const BASE_URL = typeof window !== 'undefined' 
  ? window.location.origin 
  : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export const client = hc<AppType>(`${BASE_URL}/api`) 