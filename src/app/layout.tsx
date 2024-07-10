import type { Metadata } from "next";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { AppWrapper } from "./wrapper";

export const metadata: Metadata = {
  title: "Next 13 Template",
  description: "Next Template with MUI, Emotion, Jest, RTL and Axios",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppWrapper>{children}</AppWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
