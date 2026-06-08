"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // Scroll kitna lamba chalega (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoothness curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,  // Scroll ki speed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Component unmount hone par clean up
    };
  }, []);

  return <>{children}</>;
}