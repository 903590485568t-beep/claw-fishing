import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Token } from "@/components/sections/Token";
import { Subscription } from "@/components/sections/Subscription";
import { Footer } from "@/components/sections/Footer";
import { FishingGame } from "@/components/game/FishingGame";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-ocean text-white selection:bg-neon-cyan selection:text-deep-ocean">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <HowItWorks />
      
      <Token />

      <Roadmap />
      
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">
                Live Demo
              </span>
            </h2>
            <p className="text-gray-400">Try the simulation before the real hardware goes live.</p>
          </div>
          
          <FishingGame />
        </div>
      </section>

      <Subscription />
      
      <Footer />
    </main>
  );
}
