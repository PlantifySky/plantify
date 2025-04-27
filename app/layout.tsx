import type { Metadata } from "next";
import { Alexandria, Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '700'],
});

const alexandria = Alexandria({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${alexandria.className} ${arimo.className}`}>
        {children}
      </body>
    </html>
  );
}
