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
    recommended: false,
    color: "bg-white"
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
    recommended: true,
    color: "bg-cartoon-yellow"
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
    recommended: false,
    color: "bg-white"
  }
];

export function Subscription() {
  return (
    <section id="subscription" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-stroke tracking-wide">Choose Your Tier</h2>
          <p className="text-xl font-bold text-black">Unlock the full power of ClawFishing! 🔓</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`cartoon-card p-8 relative ${plan.color} ${plan.recommended ? 'transform scale-105 z-10' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cartoon-pink text-white border-3 border-black font-black px-6 py-2 rounded-full shadow-[2px_2px_0px_#000] rotate-2">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-3xl font-black mb-2 text-black">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-black text-black" style={{ WebkitTextStroke: "1px black", color: plan.recommended ? "white" : "black" }}>{plan.price}</span>
                {plan.period && <span className="text-black font-bold text-sm mb-1 opacity-70">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-black font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-black flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-black" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.recommended ? "primary" : "outline"}
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
