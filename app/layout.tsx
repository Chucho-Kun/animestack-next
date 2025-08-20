import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastifyNotifications from "@/src/components/main/ToastifyNotifications";

const inter = Inter({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Animestack",
  description: "Developed by Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
      </head>
      <body
        className={`${inter.className}`}
      >
        {children}
        <ToastifyNotifications />
      </body>
    </html>
  );
}
