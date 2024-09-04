"use client";
import React from "react";
import { useEffect } from "react";

const MouseAura = () => {
  useEffect(() => {
    const handleMouseEffect = (e: MouseEvent) => {
      let aura = document.querySelector(".aura") as HTMLElement;
      if (aura) {
        aura.style.left = e.pageX + "px";
        aura.style.top = e.pageY + "px";
      }
    };
    document.addEventListener("mousemove", handleMouseEffect);
  }, []);
  return <div className="aura"></div>;
};

export default MouseAura;
