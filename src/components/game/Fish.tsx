"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";

export interface FishRef {
  position: THREE.Vector3;
  catch: () => void;
}

export const Fish = forwardRef<FishRef, { position: [number, number, number], speed?: number, id: string, onDespawn: (id: string) => void }>(
  ({ position, speed = 1, id, onDespawn }, ref) => {
    const mesh = useRef<THREE.Group>(null);
    const direction = useRef(new THREE.Vector3(Math.random() - 0.5, 0, Math.random() - 0.5).normalize());
    const speedRef = useRef(speed * (0.5 + Math.random()));
    const isCaught = useRef(false);
    
    const color = useMemo(() => {
      const colors = ["#00f3ff", "#ff00ff", "#bd00ff", "#ffffff"];
      return colors[Math.floor(Math.random() * colors.length)];
    }, []);

    useImperativeHandle(ref, () => ({
      get position() {
        return mesh.current ? mesh.current.position : new THREE.Vector3();
      },
      catch: () => {
        isCaught.current = true;
        // Animation for catch can go here
        onDespawn(id);
      }
    }));

    useFrame((state, delta) => {
      if (!mesh.current || isCaught.current) return;

      // Move fish
      mesh.current.position.add(direction.current.clone().multiplyScalar(speedRef.current * delta));

      // Rotate to face direction
      const angle = Math.atan2(direction.current.z, direction.current.x);
      mesh.current.rotation.y = -angle;

      // Bounce off walls (simple box bounds)
      const bound = 8;
      if (Math.abs(mesh.current.position.x) > bound) {
        direction.current.x *= -1;
        mesh.current.position.x = Math.sign(mesh.current.position.x) * bound;
      }
      if (Math.abs(mesh.current.position.z) > bound) {
        direction.current.z *= -1;
        mesh.current.position.z = Math.sign(mesh.current.position.z) * bound;
      }
      
      // Slight bobbing
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + parseInt(id)) * 0.2;
    });

    if (isCaught.current) return null;

    return (
      <group ref={mesh} position={position}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.8, 0.3, 0.2]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        {/* Tail */}
        <mesh position={[-0.5, 0, 0]} castShadow>
          <coneGeometry args={[0.2, 0.4, 4]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    );
  }
);

Fish.displayName = "Fish";
