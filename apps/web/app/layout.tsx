import type { Metadata } from 'next';
import { Lexend, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const lexendDisplay = Lexend({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NLPvision — Real-time Screen Translation for Manga & Gaming',
  description: 'NLPvision translates manga, games, and on-screen content in real-time using Gemini AI. Built for readers and gamers who want zero-friction language translation. Early access 2026.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${lexendDisplay.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
