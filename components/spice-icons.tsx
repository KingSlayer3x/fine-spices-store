"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Individual spice SVG icons
export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
    </svg>
  );
}

export function StarAniseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2L14.4,8.2L21,9.2L16.5,13.5L17.8,20L12,16.8L6.2,20L7.5,13.5L3,9.2L9.6,8.2L12,2Z"/>
    </svg>
  );
}

export function CinnamonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5,4C3.34,4 2,5.34 2,7V17C2,18.66 3.34,20 5,20H7V4H5M9,4V20H11V4H9M13,4V20H15V4H13M17,4V20H19C20.66,20 22,18.66 22,17V7C22,5.34 20.66,4 19,4H17Z"/>
    </svg>
  );
}

export function PepperIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16,12V10H14V12H16M12,12V10H10V12H12M8,12V10H6V12H8M16,6V4H14V6H16M12,6V4H10V6H12M8,6V4H6V6H8M12,20C7.58,20 4,16.42 4,12V2H20V12C20,16.42 16.42,20 12,20Z"/>
    </svg>
  );
}

export function SeedIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
    </svg>
  );
}

export function CloveIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2C14.5,2 16.5,4 16.5,6.5C16.5,8.5 15.5,10.5 14,11.5V22H10V11.5C8.5,10.5 7.5,8.5 7.5,6.5C7.5,4 9.5,2 12,2M12,4C10.62,4 9.5,5.12 9.5,6.5C9.5,7.88 10.62,9 12,9C13.38,9 14.5,7.88 14.5,6.5C14.5,5.12 13.38,4 12,4Z"/>
    </svg>
  );
}

export function CardamomIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2C9.24,2 7,4.24 7,7V10H5V22H19V10H17V7C17,4.24 14.76,2 12,2M12,4C13.66,4 15,5.34 15,7V10H9V7C9,5.34 10.34,4 12,4M9,14H11V18H9V14M13,12H15V20H13V12Z"/>
    </svg>
  );
}

export function BayLeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.5,12C4,12 2,14 2,16.5C2,18.4 3.2,20 5,20.7V22H7V20.7C8.8,20 10,18.4 10,16.5C10,14 8,12 6.5,12M17.5,2C13,2 9,5.5 9,10.5C9,14 11,17 14,18.5V22H16V18.5C19,17 21,14 21,10.5C21,5.5 17.5,2 17.5,2Z"/>
    </svg>
  );
}

// Floating spices with parallax effect for sections
export function FloatingSpices({ section }: { section: "blends" | "spices" | "recipes" | "about" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const spiceConfigs = {
    blends: [
      { Icon: StarAniseIcon, x: "5%", top: "15%", y: y1, rotate: rotate1, size: "w-8 h-8", opacity: 0.15 },
      { Icon: LeafIcon, x: "92%", top: "25%", y: y2, rotate: rotate2, size: "w-10 h-10", opacity: 0.12 },
      { Icon: CinnamonIcon, x: "8%", top: "60%", y: y3, rotate: rotate3, size: "w-6 h-6", opacity: 0.1 },
      { Icon: PepperIcon, x: "88%", top: "70%", y: y4, rotate: rotate1, size: "w-7 h-7", opacity: 0.15 },
    ],
    spices: [
      { Icon: SeedIcon, x: "3%", top: "20%", y: y2, rotate: rotate2, size: "w-9 h-9", opacity: 0.12 },
      { Icon: CloveIcon, x: "95%", top: "35%", y: y1, rotate: rotate1, size: "w-7 h-7", opacity: 0.15 },
      { Icon: CardamomIcon, x: "6%", top: "75%", y: y4, rotate: rotate3, size: "w-8 h-8", opacity: 0.1 },
      { Icon: BayLeafIcon, x: "90%", top: "80%", y: y3, rotate: rotate2, size: "w-10 h-10", opacity: 0.12 },
    ],
    recipes: [
      { Icon: LeafIcon, x: "4%", top: "10%", y: y1, rotate: rotate3, size: "w-8 h-8", opacity: 0.12 },
      { Icon: StarAniseIcon, x: "93%", top: "20%", y: y2, rotate: rotate1, size: "w-9 h-9", opacity: 0.15 },
      { Icon: PepperIcon, x: "7%", top: "65%", y: y3, rotate: rotate2, size: "w-6 h-6", opacity: 0.1 },
      { Icon: CinnamonIcon, x: "89%", top: "75%", y: y4, rotate: rotate3, size: "w-7 h-7", opacity: 0.12 },
    ],
    about: [
      { Icon: CardamomIcon, x: "5%", top: "25%", y: y2, rotate: rotate1, size: "w-8 h-8", opacity: 0.12 },
      { Icon: CloveIcon, x: "94%", top: "30%", y: y3, rotate: rotate2, size: "w-7 h-7", opacity: 0.15 },
      { Icon: SeedIcon, x: "8%", top: "70%", y: y1, rotate: rotate3, size: "w-9 h-9", opacity: 0.1 },
      { Icon: BayLeafIcon, x: "91%", top: "65%", y: y4, rotate: rotate1, size: "w-8 h-8", opacity: 0.12 },
    ],
  };

  const spices = spiceConfigs[section];

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {spices.map((spice, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: spice.x,
            top: spice.top,
            y: spice.y,
            rotate: spice.rotate,
          }}
        >
          <spice.Icon className={`${spice.size} text-accent`} style={{ opacity: spice.opacity }} />
        </motion.div>
      ))}
    </div>
  );
}

// WhatsApp-style pattern background for footer
export function SpicePatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("./images/spice-pattern.jpg")`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/50" />
    </div>
  );
}
