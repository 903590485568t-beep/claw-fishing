"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coins, MonitorPlay, Ticket, Trophy } from "lucide-react";

const steps = [
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Buy $CF Tokens",
    desc: "Purchase ClawFishing tokens on Pump.fun or Raydium."
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "Get Subscription",
    desc: "Use $CF to buy time on the fishing rig."
  },
  {
    icon: <MonitorPlay className="w-6 h-6" />,
    title: "Connect & Play",
    desc: "Access the live stream and take control of the AI agent."
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Catch & Earn",
    desc: "Catch fish to earn rewards, NFTs, and leaderboard spots."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-deep-ocean/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400">From token to tackle in 4 simple steps.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/50 to-neon-pink/20 -translate-y-1/2 z-0" />

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center max-w-xs"
                >
                    <div className="w-16 h-16 rounded-full bg-deep-ocean border-2 border-neon-cyan flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
