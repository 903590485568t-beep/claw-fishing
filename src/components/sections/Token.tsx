"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Copy, Coins, Flame, Ban, Globe } from "lucide-react";

export function Token() {
  return (
    <section id="token" className="py-20 relative overflow-hidden bg-cartoon-yellow/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold mb-6 text-stroke tracking-wide text-white"
            >
                Tokenomics
            </motion.h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium text-black">
                The fuel for the ClawFishing ecosystem! 
                <br/>Buy fishing time, upgrade gear, and feed the fish! 🐟
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <motion.div 
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="cartoon-card p-6 bg-cartoon-blue relative overflow-hidden group"
                >
                    <Coins className="w-12 h-12 text-white absolute -right-2 -bottom-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <div className="text-black font-bold text-lg mb-2 relative z-10">Total Supply</div>
                    <div className="text-4xl font-black text-white text-stroke-sm relative z-10">1B</div>
                </motion.div>

                <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="cartoon-card p-6 bg-cartoon-pink relative overflow-hidden group"
                >
                    <Flame className="w-12 h-12 text-white absolute -right-2 -bottom-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <div className="text-black font-bold text-lg mb-2 relative z-10">Liquidity</div>
                    <div className="text-4xl font-black text-white text-stroke-sm relative z-10">Burned</div>
                </motion.div>

                <motion.div 
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="cartoon-card p-6 bg-cartoon-green relative overflow-hidden group"
                >
                    <Ban className="w-12 h-12 text-white absolute -right-2 -bottom-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <div className="text-black font-bold text-lg mb-2 relative z-10">Tax</div>
                    <div className="text-4xl font-black text-white text-stroke-sm relative z-10">0%</div>
                </motion.div>

                <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="cartoon-card p-6 bg-cartoon-purple relative overflow-hidden group"
                >
                    <Globe className="w-12 h-12 text-white absolute -right-2 -bottom-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <div className="text-black font-bold text-lg mb-2 relative z-10">Network</div>
                    <div className="text-4xl font-black text-white text-stroke-sm relative z-10">Solana</div>
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <div className="text-xl font-bold text-black rotate-[-2deg]">Contract Address 👇</div>
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border-3 border-black shadow-[4px_4px_0px_#000] w-full max-w-lg"
                >
                    <span className="font-mono text-black font-bold text-lg truncate flex-1 text-center md:text-left">
                        7xK...pump
                    </span>
                    <Button 
                        size="sm" 
                        variant="primary" 
                        onClick={() => navigator.clipboard.writeText("7xK...pump")}
                        className="bg-cartoon-yellow hover:bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_#000]"
                    >
                        <Copy className="w-5 h-5 mr-2" />
                        Copy
                    </Button>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
