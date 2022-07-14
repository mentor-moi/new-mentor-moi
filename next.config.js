/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      's3.amazonaws.com',
      'cdn.worldvectorlogo.com',
    ],
  },
}

module.exports = nextConfig
