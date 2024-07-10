import { redirect } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) return redirect('/pt/home');

  return {
    messages: (await import(`../../../../messages/${locale}.json`)).default,
  };
});
