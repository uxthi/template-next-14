import { LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'pt' as const;
export const locales = ['pt', 'en'] as const;
export const localePrefix: LocalePrefix<typeof locales> = 'always';