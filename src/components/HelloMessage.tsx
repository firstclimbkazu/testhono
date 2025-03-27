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
      <h2 className="text-xl font-bold mb-2 text-gray-900">連絡</h2>
      <p className="text-gray-800">{data.message}</p>
    </div>
  )
} 