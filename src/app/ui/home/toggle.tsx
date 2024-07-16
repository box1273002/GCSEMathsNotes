import { DifficultyContext } from '@/app/context';
import { useContext } from 'react';
import clsx from 'clsx';
export default function Toggle() {
  const { difficulty, setDifficulty} = useContext(DifficultyContext);
  return (
  <div className="ml-auto mr-4 bg-slate-200 text-black rounded-3xl">
    <button className={clsx("-mr-1  px-3 py-1 rounded-3xl", 
          {"text-white bg-green-600": difficulty ===  'foundation'})} onClick={() => setDifficulty('foundation')}>
          Foundation
    </button>
    <button className={clsx("-ml-1 px-3 py-1 rounded-3xl",
          {"text-white bg-green-600": difficulty === 'higher'})} onClick={() => setDifficulty('higher')}>
          Higher
    </button>
  </div>);
}
