import { promises as fs } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { TopicList, Subject, Topic } from '@/app/ui/topics/topic-list'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'

export default async function Page() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/app/(maths_notes)'));
  let subjects: Record<string, Subject> = {};
  await Promise.all(filenames.map(async (filename) => {
    const source = await fs.readFile(path.join(process.cwd(), 'src/app/(maths_notes)', filename), 'utf-8');
    const { content, frontmatter } = await compileMDX<{ title: string, description: string, level: string, subject: string }>({
      source, options:
      {
        mdxOptions: {
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [rehypeKatex, rehypeMathJax],
          format: 'mdx',
        },
        parseFrontmatter: true
      },
    });

    let topic: Topic = {
      slug: filename.replace('.mdx', ''),
      title: frontmatter.title,
      description: frontmatter.description,
      level: frontmatter.level,
    };

    if (frontmatter.subject in subjects) {
      subjects[frontmatter.subject].topics.push(topic);
    } else {
      let id: string = frontmatter.subject.toLowerCase().replace(/\s+/g, '-');
      subjects[frontmatter.subject] = {
        id: id,
        name: frontmatter.subject,
        topics: [topic],
      };
    };
  }
  ));

  return (
    <main className="px-6 pt-6 ">
      <TopicList subjects={subjects} />
    </main>
  )
};
