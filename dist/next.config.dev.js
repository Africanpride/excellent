"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true
};

var nextTranslate = require('next-translate');

module.exports = {
  images: {
    domains: ['mdbootstrap.com', 'https://images.unsplash.com', 'cdn.pixabay.com', 'dummyimage.com', 'placehold.it'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  },
  nextConfig: nextConfig,
  nextTranslate: nextTranslate
};