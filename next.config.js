/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
};
