"use client";

import { Fish, Twitter, Send, Disc } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Fish className="w-8 h-8 text-neon-cyan" />
              <span className="text-2xl font-bold text-white">ClawFishing</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              The world's first decentralized physical fishing platform. 
              Control real world hardware with blockchain technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors">
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">Live Stream</Link></li>
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">Marketplace</Link></li>
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">Leaderboard</Link></li>
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">My Catch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">Whitepaper</Link></li>
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">Tokenomics</Link></li>
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">Contract</Link></li>
              <li><Link href="#" className="hover:text-neon-cyan transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2025 ClawFishing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
