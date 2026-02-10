import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Token } from "@/components/sections/Token";
import { Roadmap } from "@/components/sections/Roadmap";
import { Subscription } from "@/components/sections/Subscription";
import { Footer } from "@/components/sections/Footer";
import { FishingGame } from "@/components/game/FishingGame";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-100 text-slate-900 selection:bg-yellow-300 selection:text-black">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <HowItWorks />
      
      <Token />

      <Roadmap />
      
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-stroke tracking-wide">
              Live Demo
            </h2>
            <p className="text-xl font-bold text-black">Try before you buy! 🎮</p>
          </div>
          
          <div className="cartoon-card p-4 bg-black">
            <div className="rounded-xl overflow-hidden border-2 border-white/20">
               <FishingGame />
            </div>
          </div>
        </div>
      </section>

      <Subscription />
      
      <Footer />
    </main>
  );
}
