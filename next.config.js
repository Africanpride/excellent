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
/*   experimental: {
    nextScriptWorkers: true,
  }, */
  nextConfig,
  nextTranslate,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}
