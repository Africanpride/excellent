/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const nextTranslate = require('next-translate');

module.exports = {
  images: {
    domains: 
    [
    'mdbootstrap.com',
    'https://images.unsplash.com',
    'cdn.pixabay.com',
    'dummyimage.com',
    'placehold.it'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },  
  nextConfig,
  nextTranslate,

}
