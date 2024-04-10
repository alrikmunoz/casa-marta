import type { Metadata } from "next";
import "./globals.css";
import NavMenu from '@/app/ui/navmenu';
import { Arsenal } from 'next/font/google';
import clsx from 'clsx';

const arsenal = Arsenal({ subsets: ["latin-ext"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Casa Marta",
  description: "Bienvenidos a un restaurante con un ambiente familiar en Premià de Mar!",
};

const menuItems = [
  {
    name: "Menú",
    elementId: "menu",
  },
  {
    name: "Horario",
    elementId: "hours",
  },
  {
    name: "Contacto",
    elementId: "contact",
  },
  {
    name: "Sobre nosotros",
    elementId: "about",
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={clsx('min-h-screen', arsenal.className)}>
        <NavMenu menuItems={menuItems} />
        {children}
      </body>
    </html>
  );
}
