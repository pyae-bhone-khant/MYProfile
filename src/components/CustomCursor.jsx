import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [trail, setTrail] = useState([]);
  const cursorRef = useRef(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Calculate color based on cursor position (cyan to magenta transition)
  const getColorFromPosition = (x, y) => {
    const xPercent = x / window.innerWidth;
    const yPercent = y / window.innerHeight;
    
    // Interpolate between cyan (180°) and magenta (300°)
    const hue = 180 + (xPercent * 120);
    const saturation = 80 + (yPercent * 20);
    const lightness = 55 + (yPercent * 10);
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const color = getColorFromPosition(e.clientX, e.clientY);
      
      // Create trail particle with current color
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: color,
        size: 8 + Math.random() * 4,
      };
      
      setTrail((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const currentColor = getColorFromPosition(
    cursorX.get() || window.innerWidth / 2,
    cursorY.get() || window.innerHeight / 2
  );

  return (
    <>
      {/* Ethereal Trail */}
      {trail.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${particle.size * 6}px ${particle.color}40`,
          }}
          initial={{ 
            opacity: 0.6, 
            scale: 1,
            x: particle.x - particle.size / 2,
            y: particle.y - particle.size / 2,
          }}
          animate={{ 
            opacity: 0,
            scale: 0.3,
            x: particle.x - particle.size / 2,
            y: particle.y - particle.size / 2,
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: index * 0.02,
          }}
        />
      ))}

      {/* Minimalist Glowing Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 32,
            height: 32,
            backgroundColor: currentColor,
            boxShadow: `0 0 20px ${currentColor}, 0 0 40px ${currentColor}60, 0 0 60px ${currentColor}30`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Core cursor */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 12,
            height: 12,
            backgroundColor: currentColor,
            boxShadow: `0 0 15px ${currentColor}, 0 0 30px ${currentColor}80`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center dot */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: 4,
            height: 4,
            boxShadow: `0 0 10px ${currentColor}`,
          }}
        />
      </motion.div>
    </>
  );
}
