import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeMathJax from 'rehype-mathjax'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {

    return [
      {
        source: '/:path*', // Match any path
        destination: '/:path*?level=foundation',
        permanent: true,
        missing: [
          {
            type: 'query',
            key: 'level',  // Redirect if 'level' query parameter is missing
          },
        ],
      },
      {
        source: '/notes/:slug',
        destination: '/topics#:slug',
        permanent: true,
      },
      {
        source: '/notes',
        destination: '/topics',
        permanent: true,
      },

    ];
  },
};

const withMdx = createMDX({
  options: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex, rehypeMathJax],
  }
})
export default withMdx(nextConfig);
