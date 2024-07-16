'use client';
import Link from 'next/link';
import { subjects } from '@/app/topics/topics';
import { useContext } from 'react';
import { DifficultyContext } from '@/app/context';
import clsx from 'clsx';

export default function Page() {
  const { difficulty, setDifficulty} = useContext(DifficultyContext);
  return (
  <main className="px-6 pt-6">
    {subjects.map((subject) => {
        return (
        <div key={subject.id}>
        <div id={subject.id} className="text-6xl underline mb-4">{subject.name}</div>
        <div className="grid grid-cols-2 md:grid-cols-3">
            {subject.topics.map((topic) => {
              let sanitised: string = topic.name.toLowerCase().replace(/\s+/g, '-');
              sanitised = sanitised.replace(/[^a-z0-9-]/g, '');
              sanitised = sanitised.replace(/^-+|-+$/g, '');
              return (
              <Link key={sanitised} href={`/topics/${sanitised}`} className={clsx("flex-auto text-wrap rounded border-2 mr-3 mb-3 px-1.5 min-h-32 max-w-96 bg-[url('/blurry-gradient.svg')]", 
                    {"hidden" : topic.higher === true && difficulty === 'foundation'})}>
                <div className="text-base font-bold pb-1 underline pt-1">{topic.name}</div>
                <div className="text-sm">{topic.description}</div>
              </Link>
              );})}
        </div></div>
        );
      })}
  </main>
  )
}
