'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const heroEyebrow = "Based in India · Available remote";
const heroName = "Mohak Pawar";
const heroTagline = "Full-stack blockchain developer crafting production-ready smart contracts and sleek dApps.";

function useTypedValue(value, fallback) {
  const target = useMemo(() => value || fallback, [value, fallback]);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      setDisplay(target.slice(0, frame + 1));
      frame += 1;
      if (frame >= target.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [target]);

  return display;
}

export function Hero() {
  const typedName = useTypedValue(heroName, heroName);
  const typedTagline = useTypedValue(heroTagline, heroTagline);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.span
          className="text-xs uppercase tracking-[0.4em] text-white/40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {heroEyebrow}
        </motion.span>
        <motion.h1
          data-text={typedName}
          className="glitch mt-6 text-5xl font-light tracking-tight text-white md:text-7xl"
        >
          {typedName}
        </motion.h1>
        <p className="mt-6 text-lg text-white/70">{typedTagline}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="glow"
            className="border border-white/10 px-8 py-3"
            href="#projects"
          >
            View Work ↓
          </Button>
          <Button size="lg" variant="ghost" className="px-8 py-3" href="#contact">
            Contact
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-[10px] uppercase tracking-[0.4em] text-white/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Scroll
        <span className="mt-2 h-12 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

