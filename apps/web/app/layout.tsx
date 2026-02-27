import type { Metadata } from "next";
import { Lexend, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const lexendDisplay = Lexend({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "NLPvision — Real-time Screen Translation for Manga & Gaming",
  description:
    "NLPvision translates manga, games, and on-screen content in real-time using Advanced AI. Built for readers and gamers who want zero-friction language translation. Early access 2026.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nlpvisions.com"),
  openGraph: {
    title: "NLPvision — Real-time Screen Translation",
    description:
      "Translate manga, games, and on-screen content in real-time. Built for readers and gamers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NLPvision — Real-time Screen Translation",
    description:
      "Translate manga, games, and on-screen content in real-time. Built for readers and gamers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${lexendDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
