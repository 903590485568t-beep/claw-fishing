"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Fish } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Tokenomics", href: "#token" },
  { name: "Demo", href: "#demo" },
  { name: "Subscription", href: "#subscription" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b-4 border-black shadow-[0_4px_0_rgba(0,0,0,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 20 }}
            className="w-10 h-10 bg-cartoon-blue rounded-full border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]"
          >
            <Fish className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-2xl font-black text-black tracking-tight group-hover:text-cartoon-pink transition-colors" style={{ textShadow: "2px 2px 0px white" }}>
            ClawFishing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black font-bold hover:text-cartoon-pink hover:underline decoration-4 decoration-black underline-offset-4 transition-all"
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="bg-cartoon-green hover:bg-green-400 rotate-2 hover:rotate-0 transition-transform">
            Connect Wallet
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cartoon-yellow border-b-4 border-black overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-black text-black hover:text-white hover:text-stroke-sm p-2 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-cartoon-green" onClick={() => setIsOpen(false)}>
                Connect Wallet
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
