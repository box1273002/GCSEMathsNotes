'use client'
import clsx from 'clsx';
import { CompileMDXResult } from 'next-mdx-remote/rsc';
import { useState, useEffect } from 'react';


type QuestionProps = {
  mdx_result: CompileMDXResult
  marked: boolean;         // A boolean indicating if the question is marked
  setMarked: (value: boolean) => void; // A function to update the marked state
  totalCorrect: number;
  setTotalCorrect: (value: number) => void;
}
type Answer = {
  text: string,
  isTrue: boolean,
}
export default function Question({ mdx_result, marked, setMarked, totalCorrect, setTotalCorrect }: QuestionProps) {

  let answers: Map<string, boolean> = new Map<string, boolean>();
  const { content, frontmatter } = mdx_result;
  for (const answer of frontmatter.correct_answers) {
    answers.set(answer, true);
  }
  for (const answer of frontmatter.incorrect_answers) {
    answers.set(answer, false);
  }

  const [pushed, setPushed] = useState<Map<string, boolean>>(
    new Map<string, boolean>(Array.from(answers.keys()).map(key => [key, false]))
  ); // defaulting to all false
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean>(false);

  useEffect(() => {
    var updatedCorrect: boolean = true;
    for (const [key, value] of answers.entries()) {
      updatedCorrect = updatedCorrect && (pushed.get(key) === value);
    }

    if (updatedCorrect !== answeredCorrectly) {
      setAnsweredCorrectly(updatedCorrect);
      setTotalCorrect((prevTotalCorrect) => {
        if (updatedCorrect) {
          return prevTotalCorrect + 1;
        } else {
          return prevTotalCorrect - 1;
        }
      });
    }
  }, [pushed, answeredCorrectly]); // Add answeredCorrectly as dependency

  const handleClick = (text: string) => {
    setPushed(prev => {
      const newMap = new Map(prev); // Create a new Map from the previous state
      newMap.set(text, !prev.get(text)); // Update the specific key (using the `text` value as the key)
      return newMap; // Set the new state
    });
    setMarked(false);
  }

  const button_texts: string[] = Array.from(answers.keys()).sort();
  return (
    <>
      <div>{content}</div>

      <div className="grid grid-cols-2">
        {button_texts.map((text) => {
          return (
            <button
              className={clsx(
                "font-semibold py-2 px-4 border border-gray-900  rounded m-2",
                {
                  "bg-green-600 text-white":
                    marked && pushed.get(text) && pushed.get(text) === answers.get(text),
                  "bg-green-400 text-black":
                    (marked && !pushed.get(text) && pushed.get(text) !== answers.get(text)),
                  "bg-red-600 text-white":
                    marked && pushed.get(text) && pushed.get(text) !== answers.get(text),
                  "bg-slate-400 && text-black":
                    marked && !pushed.get(text) && pushed.get(text) === answers.get(text),
                  "bg-blue-600 text-white":
                    !marked && pushed.get(text),
                  "bg-slate-200 && text-black hover:bg-blue-500 hover:border-blue-500  hover:text-white":
                    (!marked && !pushed.get(text)),
                }
              )
              }
              onClick={() => handleClick(text)} // Fix the onClick handler to pass the index properly
            >
              {text}
            </button>
          );
        })}
      </div >
    </>
  );

}
