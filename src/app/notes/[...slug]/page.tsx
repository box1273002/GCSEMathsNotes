import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import { promises as fs } from 'fs'
import path from 'path'
export default async function Page({ params } : {params : {slug: string[]}}) {
  console.log("help");
  let mdxPath: string = path.join(process.cwd(),'src/app/notes');
  for (const param of params.slug ) {
    mdxPath = path.join(mdxPath,param);
  };
  const source = await fs.readFile(mdxPath + ".mdx",'utf-8');
  return (
    <>
      <MDXRemote source={source}/>
    </>
  );
};
