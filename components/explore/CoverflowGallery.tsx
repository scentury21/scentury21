"use client";

import { useState, useCallback, useRef, useEffect, type CSSProperties } from "react";
import type { Product } from "@/data/products";

interface CoverflowGalleryProps {
  products: Product[];
  cardWidth?: number;
  cardHeight?: number;
  tilt?: number;
  gap?: number;
}

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const DEPTH = 240;

export function CoverflowGallery({
  products,
  cardWidth = 320,
  cardHeight = 420,
  tilt = 10,
  gap = 6,
}: CoverflowGalleryProps) {
  const n = products.length;
  const [active, setActive] = useState(0);
  const lockRef = useRef(false);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 500);
  }, []);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock]
  );

  const handleCardClick = useCallback(
    (i: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (i === a ? (a + 1) % n : i));
    },
    [n, lock]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [step]);

  const rootStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: cardHeight + 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: `${PERSPECTIVE}px`,
    overflow: "hidden",
  };

  return (
    <div style={rootStyle} role="group" aria-roledescription="carousel">
      <div
        style={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          transformStyle: "preserve-3d",
        }}
      >
        {products.map((product, i) => {
          let rel = i - active;
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;
          const ax = Math.abs(rel);
          const visible = ax <= 2;
          const isActive = rel === 0;
          const sc = Math.max(0.4, 1 - ax * SCALE_STEP);
          const tx = rel * (gap * 30);
          const tz = -ax * DEPTH;
          const ry = -rel * tilt;

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: cardWidth,
            height: cardHeight,
            borderRadius: 24,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
            transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s, box-shadow 0.6s",
            opacity: visible ? 1 : 0,
            cursor: isActive ? "default" : "pointer",
            pointerEvents: visible ? "auto" : "none",
            background:
              "linear-gradient(160deg, var(--color-graphite), var(--color-charcoal))",
            border: isActive
              ? "1px solid rgba(201,169,110,0.5)"
              : "1px solid var(--color-graphite)",
            boxShadow: isActive
              ? "0 20px 60px -15px rgba(201,169,110,0.35)"
              : "0 10px 30px -10px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "1.75rem",
          };

          return (
            <div
              key={product.slug}
              style={cardStyle}
              onClick={() => handleCardClick(i)}
              aria-label={product.name}
              aria-hidden={!visible}
            >
              <p className="text-xs text-champagne uppercase tracking-widest mb-2">
                {product.family}
              </p>
              <p className="font-display text-2xl text-pearl mb-2">
                {product.name}
              </p>
              <p className="text-sm text-smoke mb-3">{product.description}</p>
              <p className="text-sm text-pearl">
                ₦{product.price.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
