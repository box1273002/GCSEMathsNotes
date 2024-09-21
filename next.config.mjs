/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','jsx','md','mdx','ts','tsx'],
  async redirects() {
    
    return [

    {
      source: '/',
      destination: '/?level=foundation',
      permanent: true,
      missing: [
        {
          type: 'query',
          key: 'level',  // Redirect if 'level' query parameter is missing
        },
      ],
    }
   ];
  },
};

export default nextConfig;
