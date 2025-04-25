import type { Metadata } from "next";
import "./index.css";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["cyrillic"],
  variable: "--font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Engineering tolerance",
  description: "Engineering tolerance",
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
      <body className={font.className}>
        <div id="root">
          {children}
          {modal}
        </div>
      </body>
    </html>
  );
}
