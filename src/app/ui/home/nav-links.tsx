'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { shadowsIntoLight } from '@/app/ui/fonts';
const links = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Topics', href: '/topics'}
] 
export default function NavLinks() {
  const pathname = usePathname();
  return (
  <div className={`${shadowsIntoLight.className} flex-row text-xl `}>
      {links.map((link) => {
        return (
        <Link
          key={link.name}
          href={link.href}
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
