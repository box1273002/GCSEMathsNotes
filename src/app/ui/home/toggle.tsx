'use client'
 
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useContext, useCallback } from 'react';
import clsx from 'clsx';

export default function Toggle() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  return (
  <div className="ml-auto mr-4 bg-slate-200 text-black rounded-3xl">
    <button className={clsx("-mr-1  px-3 py-1 rounded-3xl", 
          {"text-white bg-green-600": searchParams.get('level') !==  'higher'})} onClick={() => {router.push(pathname + '?' + createQueryString('level', 'foundation'))}}>
          Foundation
    </button>
    <button className={clsx("-ml-1 px-3 py-1 rounded-3xl",
          {"text-white bg-green-600": searchParams.get('level') === 'higher'})} onClick={() => {router.push(pathname + '?' + createQueryString('level', 'higher'));}}>
          Higher
    </button>
  </div>);
}
