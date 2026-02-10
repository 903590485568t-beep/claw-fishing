"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Fish, FishRef } from "./Fish";

export function Experience({ isPlaying, onCatch }: { isPlaying: boolean; onCatch: () => void }) {
  const [hookPos, setHookPos] = useState(new THREE.Vector3(0, 2, 0));
  const [isCasting, setIsCasting] = useState(false);
  const clawRef = useRef<THREE.Group>(null);
  const fishRefs = useRef<{ [key: string]: FishRef | null }>({});
  
  // Generate initial fish
  const [fishes, setFishes] = useState(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      id: i.toString(),
      position: [
        (Math.random() - 0.5) * 16,
        -1 + Math.random() * 0.5,
        (Math.random() - 0.5) * 16
      ] as [number, number, number],
      speed: 1 + Math.random()
    }))
  );

  const handlePointerMove = (e: any) => {
    if (!isPlaying || isCasting) return;
    // Project to water plane
    setHookPos(new THREE.Vector3(e.point.x, 2, e.point.z));
  };

  const castClaw = () => {
    if (!isPlaying || isCasting) return;
    setIsCasting(true);
  };

  useFrame((state, delta) => {
    if (!clawRef.current) return;

    // Claw animation logic
    if (isCasting) {
      // Move down
      if (clawRef.current.position.y > -1) {
        clawRef.current.position.y -= delta * 5;
      } else {
        // Hit bottom/water depth, check collision
        let caught = false;
        Object.entries(fishRefs.current).forEach(([id, fish]) => {
          if (fish && !caught) {
            const dist = fish.position.distanceTo(clawRef.current!.position);
            if (dist < 1.5) {
              fish.catch();
              onCatch();
              caught = true;
            }
          }
        });
        
        // Reset immediately after checking (simplified logic)
        // In a real game, we'd wait or animate up with the fish
        setTimeout(() => {
           // This is a hack for the loop reset, better to use state but setTimeout is fine for simple logic
           // We'll handle the "up" animation in the next frames via state if we wanted complex logic
        }, 200);
        
        // Return up logic would be here, but for simplicity we just snap back or animate up?
        // Let's animate up
        setIsCasting(false); // Reset to allow control, but position needs to go back
        clawRef.current.position.y = 2; // Snap back for now to keep it responsive
      }
    } else {
       // Smooth follow mouse
       clawRef.current.position.lerp(hookPos, delta * 5);
    }
  });

  const handleDespawn = (id: string) => {
     // Remove fish from state to stop rendering it?
     // Or just let it hide itself?
     // Better to remove from list to spawn new one
     setFishes(prev => prev.filter(f => f.id !== id));
     
     // Respawn a new one after delay
     setTimeout(() => {
        setFishes(prev => [...prev, {
            id: Date.now().toString(),
            position: [
                (Math.random() - 0.5) * 16,
                -1 + Math.random() * 0.5,
                (Math.random() - 0.5) * 16
            ],
            speed: 1 + Math.random()
        }]);
     }, 1000);
  };

  return (
    <>
      <color attach="background" args={["#020617"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="#bd00ff" />

      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.2} minDistance={5} maxDistance={20} />

      {/* Water Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} onPointerMove={handlePointerMove} onClick={castClaw}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#001e36" transparent opacity={0.8} roughness={0.1} metalness={0.8} />
      </mesh>

      <gridHelper args={[20, 20, 0x00f3ff, 0x112233]} position={[0, -0.49, 0]} />

      {/* Claw / Hook */}
      <group ref={clawRef} position={[0, 2, 0]}>
         <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 20]} /> {/* Line */}
            <meshBasicMaterial color="white" transparent opacity={0.3} />
         </mesh>
         <mesh position={[0, -0.2, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.3, 0.5, 4]} />
            <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.8} />
         </mesh>
         <pointLight distance={3} intensity={2} color="#ff00ff" />
      </group>

      {/* Fishes */}
      {fishes.map((fish) => (
        <Fish
          key={fish.id}
          {...fish}
          ref={(el) => { fishRefs.current[fish.id] = el; }}
          onDespawn={handleDespawn}
        />
      ))}

      <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#00f3ff" />
      
      {!isPlaying && (
        <Text position={[0, 1, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
           Click Start to Play
        </Text>
      )}
    </>
  );
}
