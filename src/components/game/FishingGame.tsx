"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Experience } from "./Experience";
import { Loader } from "@react-three/drei";
import { Button } from "../ui/Button";
import { RefreshCcw } from "lucide-react";

export function FishingGame() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.1)] bg-deep-ocean/50">
      
      {!isPlaying && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-6 text-center">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink mb-4">
            ClawFishing Demo
          </h3>
          <p className="text-gray-300 mb-8 max-w-md">
            Cast your hook to catch rare fish! Use your mouse to aim and click to cast.
          </p>
          <Button onClick={startGame} size="lg" glow>
            Start Fishing
          </Button>
        </div>
      )}

      <div className="absolute top-4 left-4 z-10 glass px-4 py-2 rounded-full">
        <span className="text-neon-cyan font-bold">Score: {score}</span>
      </div>

      <div className="absolute top-4 right-4 z-10">
         <Button variant="ghost" size="sm" onClick={() => setScore(0)}>
            <RefreshCcw className="w-4 h-4 mr-2"/> Reset
         </Button>
      </div>

      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Experience isPlaying={isPlaying} onCatch={() => setScore(s => s + 10)} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
