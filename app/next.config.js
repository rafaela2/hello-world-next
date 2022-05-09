/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_TITLE: process.env.NEXT_PUBLIC_TITLE,
  },
}

module.exports = nextConfig