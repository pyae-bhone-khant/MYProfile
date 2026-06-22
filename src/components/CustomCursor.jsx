"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail အတွက် နှေးကွေးတဲ့ spring configs တွေ
  const trailSprings = {
    damping: 30,
    stiffness: 200,
  };

  const trailX = useSpring(cursorX, trailSprings);
  const trailY = useSpring(cursorY, trailSprings);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Smooth Trailing Particle */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-purple-500/30 blur-sm pointer-events-none z-40"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
        </div>
      </motion.div>
    </>
  );
}