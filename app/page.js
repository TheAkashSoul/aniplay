import Comments from '@/components/Comments'
import Trending from '@/components/Trending'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='bg-blue-200 w-[100%] min-h-[400px]'></div>
     <Trending />
     <Comments />
    </main>
  )
}
