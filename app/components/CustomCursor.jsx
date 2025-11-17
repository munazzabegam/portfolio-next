"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Check if device has fine pointer (mouse) - only show on desktop
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    let isHovering = false;
    let rafId = null;

    // Update mouse position (no animation here, just store values)
    const updateMousePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Ultra-smooth animation loop using requestAnimationFrame
    const animate = () => {
      // Smooth cursor dot with slight delay for elegance
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;

      // Smooth follower with more delay
      const followerSpeed = isHovering ? 0.18 : 0.1;
      followerX += (mouseX - followerX) * followerSpeed;
      followerY += (mouseY - followerY) * followerSpeed;

      // Use GSAP set for instant updates (no tweening, just position)
      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
        force3D: true,
      });

      gsap.set(follower, {
        x: followerX,
        y: followerY,
        force3D: true,
      });

      rafId = requestAnimationFrame(animate);
    };

    // Handle mouse move
    const handleMouseMove = (e) => {
      updateMousePosition(e);
      // Show cursor immediately on first move
      if (cursor.style.opacity === "0" || cursor.style.opacity === "") {
        gsap.to([cursor, follower], {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    // Handle mouse enter (show cursor)
    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Handle mouse leave (hide cursor)
    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        scale: 0,
        duration: 0.2,
      });
    };

    // Handle interactive elements hover
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass") ||
        target.closest(".skill") ||
        target.closest(".project-card") ||
        target.closest(".service-card") ||
        target.closest(".ach-card") ||
        target.closest(".contact-item") ||
        target.closest(".nav-link") ||
        target.closest(".exp-card") ||
        target.closest(".edu-node");

      if (isInteractive) {
        isHovering = true;
        gsap.to(cursor, {
          scale: 1.8,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(follower, {
          scale: 2.5,
          borderWidth: "3px",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        isHovering = false;
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(follower, {
          scale: 1,
          borderWidth: "2px",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    // Initialize - show cursor immediately
    gsap.set([cursor, follower], {
      opacity: 1,
      scale: 1,
    });

    // Initialize mouse position to center of screen
    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;
    cursorX = mouseX;
    cursorY = mouseY;
    followerX = mouseX;
    followerY = mouseY;

    // Set initial positions
    gsap.set(cursor, { x: cursorX, y: cursorY, force3D: true });
    gsap.set(follower, { x: followerX, y: followerY, force3D: true });

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Start smooth animation loop
    animate();

    // Hide default cursor on desktop
    document.body.style.cursor = "none";

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="custom-cursor-dot fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] shadow-lg"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 1,
          background: "linear-gradient(135deg, #7b61ff, #d25eff)",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />

      {/* Follower circle */}
      <div
        ref={followerRef}
        className="custom-cursor-follower fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 1,
          border: "2px solid rgba(123, 97, 255, 0.6)",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
    </>
  );
}

