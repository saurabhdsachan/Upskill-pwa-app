/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'tailwindui.com',
      'storage.googleapis.com',
      'secure.img1-fg.wfcdn.com',
    ],
  },
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    fallbacks: {
      image: '/images/spj-happy-customer_ahkoxm.webp',
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
  },
});
