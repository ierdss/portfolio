"use client";

import gsap from "gsap";
import { Draggable } from "gsap/all";
import React, { ReactElement, useEffect, useRef } from "react";

interface MagneticWrapperProps {
  children: ReactElement; // Ensures it's a single React element (e.g., <button>...</button>)
}

export default function MagneticWrapper({ children }: MagneticWrapperProps) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      if (!magnetic.current) return;
      xTo(0);
      yTo(0);
    };

    const el = magnetic.current;
    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);

    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!magnetic.current) return;
    gsap.registerPlugin(Draggable);
    Draggable.create(magnetic.current, {
      onPress: function () {
        if (!this.origX || !this.origY) {
          this.origX = this.startX;
          this.origY = this.startY;
        }
      },
      onDragEnd: function () {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      },
    });
  }, []);
  return React.cloneElement(children, { ref: magnetic });
}
