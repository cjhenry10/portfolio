/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx', 'md', 'js', 'jsx'],
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX(nextConfig);
