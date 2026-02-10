"use client";

import { Fish, Twitter, Send, Disc } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t-4 border-black pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-cartoon-cyan rounded-full border-2 border-white flex items-center justify-center">
                 <Fish className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-black text-white">ClawFishing</span>
            </Link>
            <p className="text-gray-300 max-w-sm mb-6 font-medium">
              The world's first decentralized physical fishing platform! 🎣
              <br/>Control real world hardware with blockchain technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-cartoon-blue border-2 border-white text-black hover:scale-110 transition-transform shadow-[4px_4px_0px_#fff]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-cartoon-pink border-2 border-white text-black hover:scale-110 transition-transform shadow-[4px_4px_0px_#fff]">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-cartoon-purple border-2 border-white text-black hover:scale-110 transition-transform shadow-[4px_4px_0px_#fff]">
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-cartoon-yellow text-lg mb-6 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">Live Stream</Link></li>
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">Marketplace</Link></li>
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">Leaderboard</Link></li>
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">My Catch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-cartoon-green text-lg mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">Whitepaper</Link></li>
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">Tokenomics</Link></li>
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">Contract</Link></li>
              <li><Link href="#" className="hover:text-cartoon-cyan transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm font-medium">
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
