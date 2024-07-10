import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales, localePrefix } from "./config";
import { defaultLocale } from "src/config";

const nextIntlNavigation = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});

export const currentLocale = defaultLocale;

export const { Link, redirect, useRouter, usePathname, permanentRedirect } =
  nextIntlNavigation;
