/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: false,
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  images: {
    domains: ['images.pep.live', 'd8f709fu111oc.cloudfront.net', 'res.cloudinary.com'],
  },
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    fallbacks: {
      image: '/images/spj-happy-customer_ahkoxm.jpg',
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
  },
});
