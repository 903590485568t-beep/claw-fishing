import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en">
      <body
        className={`${fredoka.variable} antialiased bg-sky-100 text-slate-900 min-h-screen selection:bg-yellow-300 selection:text-black font-fredoka`}
      >
        {children}
      </body>
    </html>
  );
}
