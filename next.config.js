/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const nextTranslate = require('next-translate');

module.exports = {

  images: {
    domains: ['https://images.unsplash.com','cdn.pixabay.com','dummyimage.com','placehold.it'],
},
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },  
  nextConfig,
  nextTranslate,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // env: {
  //   rawJsFromFile: fs.readFileSync('./test.js').toString()
  // }
}
