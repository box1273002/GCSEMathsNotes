import '@/app/ui/global.css';
import NavLinks from '@/app/ui/home/nav-links';
import Toggle from '@/app/ui/home/toggle';
import Link from 'next/link';
export default function TopNav() {
  return (
    <div className='top-0 z-50 sticky'>
      <div className='h-14 w-screen items-center flex bg-gray-900'>
        <Link className='mx-4' href='/'>
          <img src="/web_images/icon.ico" alt="ICON" width="40" height="40" />
        </Link>
        <NavLinks />
        <Toggle />
      </div>
      <div className='h-px w-screen bg-gradient-to-r from-transparent via-slate-200 to-transparent' />
    </div>
  )
}
