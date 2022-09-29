/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  basePath: "/client",
  env: {
    HOST: process.env.HOST,
  },
}

module.exports = nextConfig
