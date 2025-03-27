import { getHelloMessage } from '@/lib/data'

export async function HelloMessage() {
  const data = await getHelloMessage()
  
  return (
    <div className="text-xl font-bold text-center">
      {data.message}
    </div>
  )
} 