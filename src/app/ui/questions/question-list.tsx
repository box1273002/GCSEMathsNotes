
'use client'
import { useState } from 'react';
import clsx from 'clsx';
type answer = [string, boolean]

type Question = [string, answer[]]
export default function QuestionList({ Questions }: { Questions: Question[] }) {
  const [marked, setMarked] = useState<boolean>(false);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const numQuestions: number = Questions.length;
  const markedOnClick = () => {
    setMarked(true);
  }
  return (
    <>
      <div className='flex justify-between items-center w-full'>
        <span className={clsx({ "hidden": !marked, "text-red-500": totalCorrect === numQuestions, "text-green-600": totalCorrect !== numQuestions })}>Grade: {totalCorrect}/{numQuestions}</span>
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

