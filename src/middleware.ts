import createMiddleware from 'next-intl/middleware';
import {localePrefix, defaultLocale, locales } from './config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix
});

export const config = {
  matcher: [
    '/',
    '/pt|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};