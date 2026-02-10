"use client";

import { motion } from "framer-motion";
import { Bot, Fish, Gamepad2, Radio } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-black" />,
    title: "AI Agents",
    description: "Our advanced AI interprets your commands and controls the fishing gear in real-time.",
    color: "bg-cartoon-blue"
  },
  {
    icon: <Radio className="w-10 h-10 text-black" />,
    title: "Live Stream",
    description: "Watch the action unfold on a high-definition, low-latency video feed from the fishing spot.",
    color: "bg-cartoon-pink"
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-black" />,
    title: "Remote Control",
    description: "Take control of the rod. Cast, reel, and hook fish from the comfort of your home.",
    color: "bg-cartoon-yellow"
  },
  {
    icon: <Fish className="w-10 h-10 text-black" />,
    title: "Real Fish",
    description: "Interact with nature. Every catch is real, handled ethically and released.",
    color: "bg-cartoon-green"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-stroke tracking-wide">
            What is <span className="text-cartoon-yellow" style={{ textShadow: "4px 4px 0 #000", WebkitTextStroke: "2px #000" }}>ClawFishing</span>?
          </h2>
          <p className="text-xl font-bold text-black max-w-2xl mx-auto">
            The bridge between digital assets and physical reality! 🌉
            <br/>Fish in the real world using crypto! 🐠
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              className={`cartoon-card p-6 ${feature.color} border-4 border-black rounded-3xl relative`}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 rounded-full bg-white border-3 border-black shadow-[2px_2px_0px_#000]">
                {feature.icon}
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-black mb-3 text-black">{feature.title}</h3>
                <p className="text-black font-medium leading-relaxed">
                    {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
