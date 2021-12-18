const PLAUSIBLE_URL = process.env.SELF_HOSTED_PLAUSIBLE_URL || 'https://plausible.io/';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: `${PLAUSIBLE_URL}/js/plausible.js`,
      },
      {
        source: '/api/event',
        destination: `${PLAUSIBLE_URL}/api/event`,
      },
    ];
  },
}
