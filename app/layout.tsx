import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Home - Movar",
  description: "A Movie Recommendation Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${roboto.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
