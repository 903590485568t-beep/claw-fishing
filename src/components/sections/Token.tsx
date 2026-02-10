"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Copy } from "lucide-react";

export function Token() {
  return (
    <section id="token" className="py-20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6"
            >
                <span className="text-neon-cyan">$CF</span> Tokenomics
            </motion.h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                The fuel for the ClawFishing ecosystem. Use $CF to buy fishing time, upgrade your gear, and tip the AI agents.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                    <div className="text-gray-400 text-sm mb-2">Total Supply</div>
                    <div className="text-xl md:text-2xl font-bold text-white">1B</div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                    <div className="text-gray-400 text-sm mb-2">Liquidity</div>
                    <div className="text-xl md:text-2xl font-bold text-neon-pink">Burned</div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                    <div className="text-gray-400 text-sm mb-2">Tax</div>
                    <div className="text-xl md:text-2xl font-bold text-neon-cyan">0%</div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                    <div className="text-gray-400 text-sm mb-2">Network</div>
                    <div className="text-xl md:text-2xl font-bold text-white">Solana</div>
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-sm text-gray-400">Contract Address</div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-neon-cyan/30 w-full max-w-md">
                    <span className="font-mono text-gray-400 text-sm truncate flex-1 text-left">
                        7xK...pump
                    </span>
                    <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText("7xK...pump")}>
                        <Copy className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
