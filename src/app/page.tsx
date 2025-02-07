'use client'
import Link from 'next/link'
import TopNav from '@/app/ui/home/top-nav'
import { shadowsIntoLight } from '@/app/ui/fonts'
import { useSearchParams } from 'next/navigation'
export default function Home() {
  const searchParams = useSearchParams();
  return (
    <main className={`${shadowsIntoLight.className} flex flex-col justify-center items-center h-screen w-screen bg-[url('/blackboard.jpg')] bg-cover absolute top-0 z-0`}>
      <div className="text-8xl text-center pb-6">Maths is Fun <br/> (Mostly)</div>
      <div className="flex flex-row justify-center ">
      <Link href={'/topics/' + '?' + searchParams.toString()}
          className=' flex-auto text-3xl w-16 mx-16 text-center hover:underline hover:font-bold'>
          Notes
      </Link> 
      <Link href={'/questions/'+ '?' + searchParams.toString()} className='flex-auto text-3xl w-16 mx-16 text-center hover:underline hover:font-bold'>Questions</Link>
      </div>
    </main>
  );
}
