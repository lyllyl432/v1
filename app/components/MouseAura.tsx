"use client";
import React from "react";
import { useEffect, useRef } from "react";

const MouseAura = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseEffect = (e: MouseEvent) => {
      if (ref.current) {
        const auraRadius = ref.current.offsetWidth / 2; // Half the aura size
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate new positions, ensuring the aura stays within the viewport
        const newX = Math.min(
          Math.max(e.clientX, auraRadius),
          viewportWidth - auraRadius
        );
        const newY = Math.min(
          Math.max(e.clientY, auraRadius),
          viewportHeight - auraRadius
        );

        // Update the position considering scroll
        ref.current.style.left = newX + window.scrollX + "px";
        ref.current.style.top = newY + window.scrollY + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseEffect);

    return () => {
      document.removeEventListener("mousemove", handleMouseEffect);
    };
  }, []);

  return <div ref={ref} className="aura"></div>;
};

export default MouseAura;
