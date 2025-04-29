import { Alexandria, Arimo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";

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

// SEO Metadata for Plantify.tech
export const metadata: Metadata = {
  title: "Plantify Tech- Connecting everyday people with real farms for impact-driven returns.",
  description: "Enabling individuals to invest in farm plots and earn a share of future harvest profits.",
  keywords: ["Smart Farming", "AgriTech", "AI in Agriculture", "Sustainable Farming", "Crop Management", "Plantify", "Investment", "Investing", "Southern Africa"],
  authors: [{ name: "Plantify Tech" }],
  metadataBase: new URL("https://plantify.tech"),
  openGraph: {
    title: "Plantify Tech - Connecting everyday people with real farms for impact-driven returns.",
    description: "Enabling individuals to invest in farm plots and earn a share of future harvest profits",
    url: "https://plantify.tech",
    siteName: "Plantify Tech",
    images: [
      {
        url: "C:\Users\faith\OneDrive\Documents\GitHub\plantify\public\phone.svg",
        width: 1200,
        height: 630,
        alt: "Plantify Tech- AI Smart Farming",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /*twitter: {
    card: "summary_large_image",
    title: "Plantify Tech- Connecting everyday people with real farms for impact-driven returns.",
    description: "Enabling individuals to invest in farm plots and earn a share of future harvest profits",
    images: ["C:\Users\faith\OneDrive\Documents\GitHub\plantify\public\phone.svg"],
    creator: "@Plantify", // Optional if you have a Twitter handle
  },*/

};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${alexandria.className} ${arimo.className}`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
