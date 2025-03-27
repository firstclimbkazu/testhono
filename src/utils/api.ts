import { hc } from 'hono/client'
import type { AppType } from '@/app/api/routes'

// APIクライアントの設定
const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    // サーバーサイドでの実行時
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  }
  // クライアントサイドでの実行時
  return window.location.origin
}

// RPCクライアントの初期化
export const client = hc<AppType>(`${getBaseUrl()}/api`) 