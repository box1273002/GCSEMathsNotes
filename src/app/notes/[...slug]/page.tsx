export const runtime = 'edge';
import { compileMDX } from 'next-mdx-remote/rsc'
import { redirect } from 'next/navigation'


import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import '@/app/ui/markdown.css';
import { getServerSideProps } from 'next/dist/build/templates/pages';


export default async function Page({ params }: { params: { slug: string[] } }) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/maths_notes/${params.slug[1]}.mdx`);

  if (!response.ok) {
    redirect("/");
  }
  const source = await response.text();

  const { content, frontmatter } = await compileMDX<{ title: string, subject: string, level: string, description: string }>(
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

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col max-w-3xl pt-4">
          <h1>{frontmatter.title}</h1>
          {content}
        </div>
      </div>
    </>
  );
};
