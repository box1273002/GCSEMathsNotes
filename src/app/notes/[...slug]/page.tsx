import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'
import fsSync from 'fs';
import path from 'path'

import '@/app/ui/markdown.css';
import { redirect } from 'next/navigation'
import MarkdownRenderer from '@/app/mdx-wrapper';
export default async function Page({ params }: { params: { slug: string[] } }) {
  let mdxPath: string = path.join(process.cwd(), 'src/app/(maths_notes)', `${params.slug[1]}.mdx`);
  if (!fsSync.existsSync(mdxPath)) {
    redirect("/");
  };
  const source = await fs.readFile(mdxPath, 'utf-8');

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col max-w-3xl pt-4">
          <MarkdownRenderer source={source} />
        </div>
      </div>
    </>
  );
};
