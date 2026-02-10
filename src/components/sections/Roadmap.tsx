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
    status: "current",
    color: "bg-cartoon-yellow"
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
    status: "upcoming",
    color: "bg-cartoon-blue"
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
    status: "upcoming",
    color: "bg-cartoon-pink"
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
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-stroke tracking-wide">Roadmap</h2>
          <p className="text-xl font-bold text-black">Our journey to fishing domination! 🗺️</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ rotate: index % 2 === 0 ? 1 : -1 }}
              className={`cartoon-card p-8 ${phase.color} relative`}
            >
              {phase.status === "current" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-black font-black border-3 border-black rounded-full shadow-[2px_2px_0px_#000] rotate-[-2deg]">
                  Current Phase
                </div>
              )}
              
              <h3 className="text-2xl font-black mb-6 text-black border-b-2 border-black pb-2">
                {phase.title}
              </h3>
              
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {phase.status === "current" ? (
                      <CheckCircle2 className="w-6 h-6 text-black shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-6 h-6 text-black/50 shrink-0 mt-0.5" />
                    )}
                    <span className="text-black font-medium text-sm leading-relaxed">{item}</span>
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
