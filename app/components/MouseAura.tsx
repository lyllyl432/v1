"use client";
import React from "react";
import { useEffect } from "react";

const MouseAura = () => {
  useEffect(() => {
    const handleMouseEffect = (e: MouseEvent) => {
      const aura = document.querySelector(".aura") as HTMLElement;
      if (aura) {
        const auraRadius = aura.offsetWidth / 2; // Half the aura size
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
        aura.style.left = newX + window.scrollX + "px";
        aura.style.top = newY + window.scrollY + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseEffect);

    return () => {
      document.removeEventListener("mousemove", handleMouseEffect);
    };
  }, []);

  return <div className="aura"></div>;
};

export default MouseAura;
