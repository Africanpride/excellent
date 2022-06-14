/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const nextTranslate = require('next-translate');

module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },  
  images: {
    domains: ["cdn.pixabay.com","*.dummyimage.com"]
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
