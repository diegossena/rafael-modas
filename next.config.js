/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: '/rafael-modas',
  compiler: { styledComponents: { ssr: true } },
}
module.exports = config
