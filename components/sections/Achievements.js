'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  {
    value: 10,
    prefix: "#",
    suffix: "",
    label: "ZK Private Voting dApp Hackathon (Scroll)",
    sub: "out of 4,800+ participants",
  },
  {
    value: 60,
    prefix: "Top ",
    suffix: "",
    label: "Superteam India Earn Cohort",
    sub: "selected builders",
  },
  {
    value: 3,
    prefix: "#",
    suffix: "",
    label: "Fall 2024 Hackathon",
    sub: "out of 900+ teams",
  },
  {
    value: 1,
    prefix: "Top ",
    suffix: "%",
    label: "CryptoZombies — global rank",
    sub: "2,100+ points",
  },
];

function Counter({ value, prefix, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-32">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">Achievements</p>
        <h2 className="mt-4 text-3xl font-light text-white">Proof of work</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              whileHover={{ y: -6 }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-4xl font-light text-transparent">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-4 text-sm text-white/70">{stat.label}</p>
              <p className="mt-1 font-mono text-xs text-white/40">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
