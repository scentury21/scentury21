"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";

interface ClickPoint {
  id: string;
  x: number;
  y: number;
}

interface ClickEffectsProps {
  color?: string;
  duration?: number;
  strokeWidth?: number;
  effectSize?: number;
}

export function ClickEffects({
  color = "#C9A96E",
  duration = 0.4,
  strokeWidth = 2,
  effectSize = 70,
}: ClickEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<ClickPoint[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const id = `${e.timeStamp}-${Math.round(x)}-${Math.round(y)}`;
      setPoints((prev) => [...prev, { id, x, y }]);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const svgStyle = (x: number, y: number): CSSProperties => ({
    position: "fixed",
    left: x - effectSize / 2,
    top: y - effectSize / 2,
    width: effectSize,
    height: effectSize,
    pointerEvents: "none",
    overflow: "visible",
    zIndex: 9999,
  });

  return (
    <div ref={containerRef}>
      {points.map((p) => (
        <svg
          key={p.id}
          style={svgStyle(p.x, p.y)}
          ref={(el) => {
            if (!el) return;
            const lines = el.querySelectorAll("line");
            lines.forEach((line, index) => {
              const angleDeg = [0, 90, 180, 270][index] ?? 0;
              const angle = angleDeg * (Math.PI / 180);
              const centerX = effectSize / 2;
              const centerY = effectSize / 2;
              const lineLength = effectSize * 0.2;
              const startX = centerX + 5 * Math.cos(angle);
              const startY = centerY - 5 * Math.sin(angle);
              const endX = centerX + (5 + lineLength) * Math.cos(angle);
              const endY = centerY - (5 + lineLength) * Math.sin(angle);
              gsap.set(line, {
                attr: { x1: startX, y1: startY, x2: endX, y2: endY },
                strokeWidth,
              });
              gsap
                .timeline()
                .to(line, {
                  attr: { x1: endX, y1: endY, x2: endX, y2: endY },
                  translateX: (5 + lineLength) * Math.cos(angle),
                  translateY: -(5 + lineLength) * Math.sin(angle),
                  duration,
                  ease: "power2.out",
                  onComplete: () =>
                    setPoints((prev) => prev.filter((pt) => pt.id !== p.id)),
                })
                .to(
                  line,
                  { strokeWidth: 0, duration: duration * 0.4, ease: "linear" },
                  duration * 0.6
                );
            });
          }}
        >
          {[0, 90, 180, 270].map((_, index) => {
            const centerX = effectSize / 2;
            const centerY = effectSize / 2;
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={centerX}
                y2={centerY}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="square"
              />
            );
          })}
        </svg>
      ))}
    </div>
  );
}
