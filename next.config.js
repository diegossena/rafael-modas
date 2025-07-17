/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: '/rafael-modas',
  compiler: { styledComponents: { ssr: true } },
  distDir: 'docs'
}
module.exports = config
