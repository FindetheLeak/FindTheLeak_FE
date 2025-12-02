import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const goormSans = localFont({
  src: [
    {
      path: "./fonts/goorm-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/goorm-sans-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/goorm-sans-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-goorm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FindTheLeak",
  description: "누구나 하는 버그바운티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${goormSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
