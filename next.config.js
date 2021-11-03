module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['images.pexels.com'],
  },
  pageExtensions: [
    'page.js'
  ],
}
