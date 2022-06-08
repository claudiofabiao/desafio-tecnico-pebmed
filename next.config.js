/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/checkout',
        permanent: true
      }
    ];
  },
  experimental: {
    images: {
      layoutRaw: true
    }
  }
}

module.exports = nextConfig;
