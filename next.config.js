/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: { styledComponents: { ssr: true } },
}
module.exports = config
