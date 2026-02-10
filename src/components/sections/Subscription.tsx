"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Viewer",
    price: "Free",
    features: [
      "Watch live streams",
      "Access community chat",
      "View leaderboard",
      "Limited voting rights"
    ],
    recommended: false
  },
  {
    name: "Fisher",
    price: "1,000 $CF",
    period: "/ hour",
    features: [
      "Control the fishing claw",
      "High-priority queue",
      "Keep digital catch (NFTs)",
      "Ad-free experience"
    ],
    recommended: true
  },
  {
    name: "AI Operator",
    price: "5,000 $CF",
    period: "/ day",
    features: [
      "Train custom AI agents",
      "Automated fishing 24/7",
      "Revenue sharing",
      "Exclusive dev access"
    ],
    recommended: false
  }
];

export function Subscription() {
  return (
    <section id="subscription" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Tier</h2>
          <p className="text-gray-400">Unlock the full power of the ClawFishing platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.recommended 
                  ? "bg-gradient-to-b from-white/10 to-transparent border-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.2)]" 
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan text-deep-ocean font-bold px-4 py-1 rounded-full text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-neon-pink">{plan.price}</span>
                {plan.period && <span className="text-gray-400 text-sm mb-1">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-neon-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.recommended ? "primary" : "outline"}
                glow={plan.recommended}
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
