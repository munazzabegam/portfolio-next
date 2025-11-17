"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedGradientMesh({ className = "", colors = ["#7b61ff", "#d25eff"] }) {
  const meshRef = useRef(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Create animated gradient mesh
    const animateMesh = () => {
      gsap.to(mesh, {
        backgroundPosition: "200% 200%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    };

    animateMesh();
  }, []);

  return (
    <div
      ref={meshRef}
      className={`absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(circle at 20% 30%, ${colors[0]}15, transparent 50%),
                     radial-gradient(circle at 80% 70%, ${colors[1]}15, transparent 50%),
                     radial-gradient(circle at 40% 80%, ${colors[0]}10, transparent 50%)`,
        backgroundSize: "200% 200%",
        filter: "blur(80px)",
        opacity: 0.6,
        animation: "pulse 8s ease-in-out infinite",
      }}
    />
  );
}

