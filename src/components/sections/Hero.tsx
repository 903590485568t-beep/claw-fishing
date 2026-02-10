"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Play, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-deep-ocean z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-deep-ocean to-deep-ocean" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-neon-cyan/30 blur-sm"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 + "vh"],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-sm">
                    <span className="text-neon-cyan font-semibold tracking-wider text-sm uppercase">
                    The First AI-Powered Real World Fishing Game
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                    <span className="text-white">CLAW</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink text-glow">
                    FISHING
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Control real fishing streams with AI agents. 
                    Buy $CF, cast your hook, and catch real fish remotely.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Button size="lg" glow className="w-full sm:w-auto group">
                    Buy $CF Tokens <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Play className="ml-2 w-5 h-5 mr-2" /> Play Demo
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                    <Users className="ml-2 w-5 h-5 mr-2" /> Join Community
                    </Button>
                </div>
            </motion.div>

            {/* Right Content - Token Card */}
            <motion.div 
                className="flex-1 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-neon-cyan/20 flex items-center justify-center animate-pulse-glow bg-black/30 backdrop-blur-sm animate-float">
                    <div className="absolute inset-0 rounded-full border border-neon-pink/30 animate-spin-slow" />
                    <div className="absolute inset-4 rounded-full border border-neon-purple/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                    <div className="text-center z-10">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">$CF</div>
                        <div className="text-neon-cyan font-bold tracking-widest text-xl">TOKEN</div>
                        <div className="text-xs text-neon-pink mt-2 font-mono tracking-widest">COMING SOON</div>
                    </div>
                    
                    {/* Decorative Orbs */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-neon-cyan/50 blur-md animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-neon-pink/50 blur-md animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-neon-cyan rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
