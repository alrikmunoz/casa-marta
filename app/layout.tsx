import type { Metadata } from "next";
import "./globals.css";
import { Arsenal } from 'next/font/google';
import clsx from 'clsx';

const arsenal = Arsenal({ subsets: ["latin-ext"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Casa Marta",
  description: "Bienvenidos a un restaurante con un ambiente familiar en Premià de Mar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={clsx('min-h-screen', arsenal.className)}>
        {children}
      </body>
    </html>
  );
}
