import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClawFishing | $CF | AI Real-World Fishing",
  description: "Control real fishing streams with AI agents. The future of Web3 gaming on Solana.",
  keywords: ["Solana", "Memecoin", "Fishing", "AI", "Web3", "Crypto", "Game"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-ocean text-white min-h-screen selection:bg-neon-cyan selection:text-deep-ocean`}
      >
        {children}
      </body>
    </html>
  );
}
