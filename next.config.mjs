/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx', 'md', 'js', 'jsx'],
}


export default nextConfig;
