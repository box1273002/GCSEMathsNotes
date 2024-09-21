import dynamic from 'next/dynamic';
import { Suspense } from 'react';
export default function Page({ 
  params, 
  }: {
    params: {subjectId: string[]};
  }) {
  const Content = dynamic(()=> import(`./${params.subjectId[0]}/${params.subjectId[1]}`), {
    suspense: true,
  });
  return (
  <>
      <Suspense fallback={<div>Loading...</div>}>
    <Content />
    </Suspense>
  </>
  );
}
