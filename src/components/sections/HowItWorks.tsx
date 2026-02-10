"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coins, MonitorPlay, Ticket, Trophy } from "lucide-react";

const steps = [
  {
    icon: <Coins className="w-8 h-8 text-black" />,
    title: "Buy $CF Tokens",
    desc: "Purchase ClawFishing tokens on Pump.fun or Raydium.",
    color: "bg-cartoon-yellow"
  },
  {
    icon: <Ticket className="w-8 h-8 text-black" />,
    title: "Get Subscription",
    desc: "Use $CF to buy time on the fishing rig.",
    color: "bg-cartoon-pink"
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-black" />,
    title: "Connect & Play",
    desc: "Access the live stream and take control of the AI agent.",
    color: "bg-cartoon-blue"
  },
  {
    icon: <Trophy className="w-8 h-8 text-black" />,
    title: "Catch & Earn",
    desc: "Catch fish to earn rewards, NFTs, and leaderboard spots.",
    color: "bg-cartoon-green"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white border-y-4 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-stroke tracking-wide">How It Works</h2>
          <p className="text-xl font-bold text-black">From token to tackle in 4 simple steps! 🎣</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-3 border-t-4 border-black border-dashed -z-0" />

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center flex-1"
                >
                    <div className={`w-32 h-32 rounded-full border-4 border-black ${step.color} flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000] rotate-${index % 2 === 0 ? '3' : '-3'}`}>
                        {step.icon}
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-3 border-black rounded-full flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_#000]">
                            {index + 1}
                        </div>
                    </div>
                    
                    <div className="cartoon-card p-6 w-full min-h-[180px] bg-white">
                        <h3 className="text-xl font-black mb-2 text-black">{step.title}</h3>
                        <p className="text-black font-medium">{step.desc}</p>
                    </div>
                    
                    {index < steps.length - 1 && (
                        <div className="md:hidden my-4">
                            <ArrowRight className="w-8 h-8 text-black animate-bounce" />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
