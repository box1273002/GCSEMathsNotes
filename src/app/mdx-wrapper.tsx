
'use client';


import { compileMDX } from 'next-mdx-remote/rsc'

import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'
import '@/app/ui/markdown.css';
import Image from 'next/image';

export default async function MarkdownRenderer({ source }: { source: string }) {
  const { content, frontmatter } = await compileMDX<{ title: string }>(
    {
      source,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [rehypeKatex, rehypeMathJax],
          format: 'mdx',
        },
        parseFrontmatter: true
      },
      components: { Image }
    });
  return (
    <>
      <h1>{frontmatter.title}</h1>
      {content}
    </>
  );
}

