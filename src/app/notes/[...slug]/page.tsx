import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'
import path from 'path'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'
import createMDX from '@next/mdx'
import '@/app/ui/markdown.css';

export default async function Page({ params } : {params : {slug: string[]}}) {
  let mdxPath: string = path.join(process.cwd(),'src/app/notes');
  for (const param of params.slug ) {
    mdxPath = path.join(mdxPath,param);
  };
  const source = await fs.readFile(mdxPath + ".mdx",'utf-8');
  const { content, frontmatter } = await compileMDX<{ title: string }>({source,options:
    { 
        mdxOptions: {
          remarkPlugins:[remarkMath, remarkGfm],
          rehypePlugins:[rehypeKatex,rehypeMathJax],
          format: 'mdx',
        },
        parseFrontmatter: true},})
  return (
    <> 
      <div className="flex justify-center">
      <div className="flex-col max-w-3xl">
        <h1>{frontmatter.title}</h1>
        {content}
      </div>
      </div>
    </>
  );
};
