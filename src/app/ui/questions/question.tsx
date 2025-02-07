'use client'
import clsx from 'clsx';
import { useState } from 'react';

type QuestionProps = {
  answers: [string, boolean][],
  question: string,
  marked: boolean;         // A boolean indicating if the question is marked
  setMarked: (value: boolean) => void; // A function to update the marked state
  totalCorrect: number;
  setTotalCorrect: (value: number) => void;
}

export default function Question({ answers, question, marked, setMarked, totalCorrect, setTotalCorrect }: QuestionProps) {

  const [pushed, setPushed] = useState<boolean[]>(answers.map(() => false)); // defaulting to all false

  const correctAnswers: boolean[] = answers.map(([_, isTrue]) => isTrue); // defaulting to all false
  var answeredCorrectly: boolean = false;

  const updateCorrect = () => {
    var updatedCorrect: boolean = true;
    for (let x = 0; x < correctAnswers.length; x++) {
      answeredCorrectly = updatedCorrect && (correctAnswers[x] === pushed[x])
    }

    if (updatedCorrect !== answeredCorrectly) {
      if (updatedCorrect == true) {
        setTotalCorrect(totalCorrect + 1);
      } else {
        setTotalCorrect(totalCorrect - 1);
      }
    }
  }
  updateCorrect();

  for (let x = 0; x < correctAnswers.length; x++) {
    answeredCorrectly = answeredCorrectly && (correctAnswers[x] === pushed[x])
  }

  const handleClick = (index: number) => {

    const updatedPushes = [...pushed];
    updatedPushes[index] = !updatedPushes[index];
    setPushed(updatedPushes);

    updateCorrect();
    setMarked(false);
  }

  return (
    <>
      <div>{question}</div>

      <div className="grid grid-cols-2">
        {answers.map(([text, isCorrect], index) => {
          return (
            <button
              key={index}
              className={clsx(
                "hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded",
                {
                  "bg-green-600 text-white":
                    (pushed[index] && !marked) ||
                    (pushed[index] === correctAnswers[index] && marked),
                  "bg-red-600 text-white":
                    marked && pushed[index] !== correctAnswers[index],
                }
              )}
              onClick={() => handleClick(index)} // Fix the onClick handler to pass the index properly
            >
              {text}
            </button>
          );
        })}
      </div>
    </>
  );

}
