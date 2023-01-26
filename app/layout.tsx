import { Inter } from "@next/font/google";
import localFont from "@next/font/local";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const gothamBold = localFont({
  src: "./fonts/gotham-bold.otf",
  variable: "--font-gotham-bold",
});
const gothamMedium = localFont({
  src: "./fonts/gotham-medium.otf",
  variable: "--font-gotham-medium",
});
const gothamBook = localFont({
  src: "./fonts/gotham-book.otf",
  variable: "--font-gotham-book",
});

const gothamLight = localFont({
  src: "./fonts/gotham-light.otf",
  variable: "--font-gotham-light",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`text-primaryBlack ${gothamBold.variable} ${gothamBook.variable} ${gothamMedium.variable} ${gothamLight.variable}  ${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
