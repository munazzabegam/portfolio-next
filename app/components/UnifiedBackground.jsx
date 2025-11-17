"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function UnifiedBackground({ className = "" }) {
  const meshRef = useRef(null);
  const lightOverlayRef = useRef(null);
  const darkOverlayRef = useRef(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Animate gradient mesh
    gsap.to(mesh, {
      backgroundPosition: "200% 200%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // Update overlay visibility based on theme
    const updateTheme = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (lightOverlayRef.current) {
        lightOverlayRef.current.style.display = isLight ? "block" : "none";
      }
      if (darkOverlayRef.current) {
        darkOverlayRef.current.style.display = isLight ? "none" : "block";
      }
    };

    // Initial theme check
    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Base gradient layer - works for both themes */}
      <div 
        className={`absolute inset-0 ${className}`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(123, 97, 255, 0.15), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(210, 94, 255, 0.15), transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(123, 97, 255, 0.1), transparent 50%),
            radial-gradient(circle at 60% 20%, rgba(210, 94, 255, 0.1), transparent 50%)
          `,
          backgroundSize: "200% 200%",
          filter: "blur(100px)",
          opacity: 1,
        }}
      />
      
      {/* Animated mesh layer */}
      <div
        ref={meshRef}
        className={`absolute inset-0 ${className}`}
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(123, 97, 255, 0.2), transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(210, 94, 255, 0.2), transparent 60%)
          `,
          backgroundSize: "200% 200%",
          filter: "blur(120px)",
          opacity: 0.8,
        }}
      />

      {/* Light theme overlay - softer, brighter */}
      <div 
        ref={lightOverlayRef}
        className={`absolute inset-0 ${className}`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(123, 97, 255, 0.06), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(210, 94, 255, 0.06), transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent 70%)
          `,
          filter: "blur(90px)",
          display: "none",
        }}
      />

      {/* Dark theme overlay - more vibrant */}
      <div 
        ref={darkOverlayRef}
        className={`absolute inset-0 ${className}`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(123, 97, 255, 0.12), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(210, 94, 255, 0.12), transparent 50%)
          `,
          filter: "blur(100px)",
          display: "block",
        }}
      />
    </>
  );
}

