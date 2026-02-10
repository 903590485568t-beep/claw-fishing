"use client";

import { motion } from "framer-motion";
import { Bot, Fish, Gamepad2, Radio } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-neon-cyan" />,
    title: "AI Agents",
    description: "Our advanced AI interprets your commands and controls the fishing gear in real-time."
  },
  {
    icon: <Radio className="w-8 h-8 text-neon-pink" />,
    title: "Live Stream",
    description: "Watch the action unfold on a high-definition, low-latency video feed from the fishing spot."
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-neon-purple" />,
    title: "Remote Control",
    description: "Take control of the rod. Cast, reel, and hook fish from the comfort of your home."
  },
  {
    icon: <Fish className="w-8 h-8 text-white" />,
    title: "Real Fish",
    description: "Interact with nature. Every catch is real, handled ethically and released (or kept depending on location)."
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What is <span className="text-neon-cyan">ClawFishing</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The bridge between digital assets and physical reality. We use AI and IoT to let you fish in the real world using crypto.
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
              className="glass-panel p-6 rounded-2xl hover:border-neon-cyan/50 transition-colors group"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5 w-fit group-hover:bg-neon-cyan/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
