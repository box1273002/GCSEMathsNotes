
'use client'
import { useState } from 'react';
import clsx from 'clsx';
import Question from './question';
import { CompileMDXResult } from 'next-mdx-remote/rsc';

import '@/app/ui/markdown.css';



export default function QuestionList({ Questions }: { Questions: CompileMDXResult[] }) {
  const [marked, setMarked] = useState<boolean>(false);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const numQuestions: number = Questions.length;

  return (
    <>
      <ol className='list-decimal'>
        {Questions.map((question) => {
          return (
            <li className='mb-16'>
              <Question mdx_result={question} marked={marked} setMarked={setMarked} totalCorrect={totalCorrect} setTotalCorrect={setTotalCorrect} />
            </li>
          )
        })}
      </ol>
      <div className='flex justify-between items-center w-full'>
        <span className={clsx({ "hidden": !marked, "text-red-500": totalCorrect !== numQuestions, "text-green-600": totalCorrect === numQuestions })}>Grade: {totalCorrect}/{numQuestions}</span>
        <div className='flex-grow'></div>
        <button
          onClick={() => {
            setMarked(true);
          }}
          className="bg-slate-200 text-black rounded"
        >
          <div className={clsx(
            "hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded",
            { "bg-green-600 text-white": marked })}>
            Grade
          </div>
        </button>
      </div>
    </>
  );
}

