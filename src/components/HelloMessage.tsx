import type { HelloResponse } from '@/types/api'
import { client } from '@/utils/api'

export async function HelloMessage() {
  const response = await client.hello.$get()
  
  if (!response.ok) {
    throw new Error('Failed to fetch hello message')
  }

  const data: HelloResponse = await response.json()
  
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">メッセージ</h2>
      <p>{data.message}</p>
    </div>
  )
} 