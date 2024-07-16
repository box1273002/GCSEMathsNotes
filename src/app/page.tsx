import Link from 'next/link'
import TopNav from '@/app/ui/home/top-nav'
import { shadowsIntoLight } from '@/app/ui/fonts'
export default function Home() {
  return (
    <main className={`${shadowsIntoLight.className} flex flex-col justify-center items-center h-screen w-screen bg-[url('/blackboard.jpg')] bg-cover absolute top-0 z-0`}>
      <div className="text-8xl text-center pb-6">Maths is Fun <br/> (Mostly)</div>
      <div className="flex flex-row justify-center ">
      <Link href='/topics/' className=' flex-auto text-3xl w-16 mx-16 text-center hover:underline hover:font-bold'>Notes</Link> 
      <Link href='/topics/' className='flex-auto text-3xl w-16 mx-16 text-center hover:underline hover:font-bold'>Questions</Link>
      </div>
    </main>
  );
}
