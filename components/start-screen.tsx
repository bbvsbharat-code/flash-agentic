"use client";

import CoffeeGlass from "@/components/coffee-glasses";
import { micBlockMessage, type MicPermission } from "@/lib/mic-permission";
import { hintLine, ORDER_HINTS } from "@/lib/start-gate";
import { START_GLASSES } from "@/lib/start-scene";
import { DRINK_TITLES } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type CSSProperties } from "react";

export default function StartScreen({ onStart, permission }: { onStart: () => void; permission: MicPermission }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ORDER_HINTS.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, []);

  const line = hintLine(ORDER_HINTS[index]);
  const blocked = micBlockMessage(permission);

  return (
    <motion.div
      className="absolute inset-0 z-30 flex items-center justify-center bg-[#1d332c] px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      <div className="start-floats" data-floats aria-hidden>
        {START_GLASSES.map((glass) => (
          <div
            key={glass.id}
            data-float={glass.corner}
            className={`float-cup${glass.edge ? " float-edge" : ""}`}
            style={
              {
                top: glass.top != null ? `${glass.top}%` : undefined,
                bottom: glass.bottom != null ? `${glass.bottom}%` : undefined,
                left: glass.left != null ? `${glass.left}%` : undefined,
                right: glass.right != null ? `${glass.right}%` : undefined,
                "--size": `${glass.size}px`,
                "--tilt": `${glass.tilt}deg`,
                "--dx": `${glass.dx}px`,
                "--dy": `${glass.dy}px`,
                "--spin": `${glass.spin}deg`,
                "--from-x": `${glass.fromX}px`,
                "--from-y": `${glass.fromY}px`,
                "--dur": `${glass.dur}s`,
                "--delay": `${glass.delay}s`,
                "--fade": String(glass.fade),
              } as CSSProperties
            }
          >
            <CoffeeGlass kind={glass.kind} />
          </div>
        ))}
      </div>
      <motion.div
        className="relative z-10 flex w-full max-w-[680px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[12px] font-medium tracking-[0.22em] text-[#8a9990] uppercase">Voice counter</p>
        <h1
          id="start-title"
          className="mt-4 text-[clamp(42px,4.4vw,68px)] leading-[1.02] font-medium tracking-[-0.035em] text-white"
        >
          What are you drinking?
        </h1>
        <p className="mt-4 max-w-[460px] text-[clamp(15px,1.45vh,18px)] leading-relaxed text-[#8a9990]">
          {DRINK_TITLES.matcha}, {DRINK_TITLES.cappuccino}, or {DRINK_TITLES.latte}. Tall, grande, or venti — shots, milk, hot or iced.
        </p>
        <div className="mt-7 flex h-[74px] items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="rounded-full bg-[#152621] px-5 py-3 text-[clamp(15px,1.5vh,18px)] text-[#d5e0db]"
              aria-live="polite"
            >
              Try: “{line}”
            </motion.p>
          </AnimatePresence>
        </div>
        {blocked && (
          <p role="alert" data-mic-block className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-[#f3f1ea]">
            {blocked}
          </p>
        )}
        <button type="button" data-start autoFocus onClick={onStart} className="sketch-start">
          <svg className="sketch-svg" viewBox="0 0 140 140" aria-hidden>
            <g className="sketch-back">
              <path
                className="sketch-stroke"
                d="M72 16 C 102 12, 124 38, 122 70 C 126 102, 100 126, 68 122 C 38 126, 16 102, 18 70 C 14 38, 42 12, 72 16 Z"
              />
            </g>
            <path
              className="sketch-stroke sketch-front"
              pathLength="100"
              d="M70 11 C 106 7, 131 36, 128 70 C 132 106, 104 131, 70 128 C 34 132, 9 104, 12 70 C 8 34, 36 8, 70 11 Z"
            />
          </svg>
          <span>Start</span>
        </button>
        <p className="mt-5 text-[13px] tracking-[0.08em] text-[#c5d1cb]">Enter or Space</p>
      </motion.div>
    </motion.div>
  );
}
