"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Play, Users, Fish } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cartoon Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-80"
        />
        <motion.div 
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-48 h-24 bg-white rounded-full opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
            >
                <div className="inline-block px-6 py-2 mb-6 rounded-full bg-cartoon-yellow border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                    <span className="text-black font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                    <Fish className="w-4 h-4" /> AI Fishing For Everyone!
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-none text-stroke">
                    CLAW
                    <br />
                    <span className="text-cartoon-pink">FISHING</span>
                </h1>
                
                <p className="text-xl md:text-3xl text-ink-blue mb-10 max-w-2xl mx-auto lg:mx-0 font-bold">
                    Catch real fish with your computer! 
                    <br />
                    Beep boop, fishy scoop! 🐟🤖
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <Button size="lg" className="w-full sm:w-auto group rotate-1">
                    Buy $CF Tokens <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto -rotate-1" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Play className="ml-2 w-6 h-6 mr-2" /> Play Demo
                    </Button>
                </div>
            </motion.div>

            {/* Right Content - Token Card */}
            <motion.div 
                className="flex-1 flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
            >
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center animate-float">
                    <div className="absolute -top-6 -right-6 bg-cartoon-orange text-white px-4 py-2 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black rotate-12">
                        COMING SOON!
                    </div>
                    
                    <div className="w-48 h-48 rounded-full bg-cartoon-blue border-4 border-black mb-4 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <Fish className="w-24 h-24 text-white drop-shadow-lg" />
                    </div>
                    
                    <div className="text-center">
                        <div className="text-6xl font-black text-black mb-1">$CF</div>
                        <div className="text-cartoon-purple font-bold tracking-widest text-2xl">TOKEN</div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
