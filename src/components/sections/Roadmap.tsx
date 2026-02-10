"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    title: "Phase 1: The Hook",
    items: [
      "Website Launch & Branding",
      "$CF Token Deployment",
      "Community Building (Telegram/Discord)",
      "Initial Marketing Push",
      "CoinGecko/CMC Listings"
    ],
    status: "current"
  },
  {
    title: "Phase 2: The Cast",
    items: [
      "Prototype Fishing Rig Live Stream",
      "First Public Control Beta",
      "Influencer Partnerships",
      "CEX Listings",
      "Audit Completion"
    ],
    status: "upcoming"
  },
  {
    title: "Phase 3: The Catch",
    items: [
      "Full 24/7 Live Fishing Platform",
      "NFT Integration (Catch-to-Mint)",
      "Mobile App Release",
      "Global Fishing Tournaments",
      "DAO Governance for Rig Locations"
    ],
    status: "upcoming"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-neon-pink">Roadmap</span>
          </h2>
          <p className="text-gray-400">Our journey to decentralized fishing domination.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl border ${
                phase.status === "current" 
                  ? "border-neon-cyan bg-neon-cyan/5 shadow-[0_0_20px_rgba(0,243,255,0.1)]" 
                  : "border-white/10 bg-white/5"
              }`}
            >
              {phase.status === "current" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-cyan text-deep-ocean font-bold text-xs rounded-full uppercase tracking-wider">
                  Current Phase
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-6 ${phase.status === "current" ? "text-white" : "text-gray-300"}`}>
                {phase.title}
              </h3>
              
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {phase.status === "current" ? (
                      <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                    )}
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
