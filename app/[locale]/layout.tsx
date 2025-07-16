import type { Metadata } from "next";
import "./index.scss";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

import Loading from "./loading";
import { Header } from "../../components";

const font = Inter({
  subsets: ["cyrillic"],
  variable: "--font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Limits & fits",
  description: "Limits & fits",
};

export default async function RootLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <NextIntlClientProvider>
        <body className={font.className}>
          <Header />
          <div className="content">
            <Suspense fallback={<Loading />}>
              {children}
              {modal}
            </Suspense>
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
