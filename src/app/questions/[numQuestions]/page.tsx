'use client';
export const runtime = 'edge';
import QuestionList from '@/app/ui/questions/question-list';


import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc'

import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import '@/app/ui/markdown.css';
import { useRouter } from 'next/navigation';



export default async function Questions({ params }: { params: { numQuestions: string } }) {
  const numQuestions: number = Number(params.numQuestions);

  if (isNaN(numQuestions)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-white text-xl font-bold">
          Invalid Url (Incorrect number of Questions)
        </div>
      </div>
    );
  }

  const response = await fetch(`/questions/files.json`);
  const filenames = await response.json();
  let questions: CompileMDXResult[] = []
  for (let x = 0; x < numQuestions; x++) {
    const random_question = filenames[Math.floor(Math.random() * filenames.length)];
    const question_file = await fetch(`/questions/${random_question}`);
    const source = await question_file.text();
    const result = await compileMDX<{ correct_answers: string[], incorrect_answers: string[] }>(
      {
        source,
        options: {
          mdxOptions: {
            remarkPlugins: [remarkMath, remarkGfm],
            rehypePlugins: [rehypeKatex],
            format: 'mdx',
          },
          parseFrontmatter: true
        },
      });
    questions.push(result);

  }

  //add question 

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col w-2/3 max-w-3xl pt-4">
          <QuestionList Questions={questions} />
        </div>
      </div>
    </>
  );
}

