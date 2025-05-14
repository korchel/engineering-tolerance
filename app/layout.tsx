import type { Metadata } from "next";
import "./index.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const font = Inter({
  subsets: ["cyrillic"],
  variable: "--font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Limits & fits",
  description: "Limits & fits",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ru">
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
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={font.className}>
        <div id="root">
          <Suspense fallback={<Loading />}>
            {children}
            {modal}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
