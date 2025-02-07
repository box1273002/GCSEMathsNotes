'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import { shadowsIntoLight } from '@/app/ui/fonts';
const links = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Topics', href: '/topics'},
  {name: 'Questions', href: '/questions'}
] 
export default function NavLinks() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
  <div className={`${shadowsIntoLight.className} flex-row text-xl `}>
      {links.map((link) => {
        return (
        <Link
          key={link.name}
          href={link.href + '?' + searchParams.toString() }
          className={clsx("hover:underline hover:bold w-4 p-4", 
              {"text-cyan-400": pathname === link.href})} 
          >
            {link.name}
        </Link>
        );
      })}
  </div>
  );
}
