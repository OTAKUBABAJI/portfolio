'use client';

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const roles = [
  {
    company: "Petition.io",
    role: "Blockchain Developer (ZK Systems)",
    badge: "Intern → Full-time (Jun 2026)",
    period: "Apr 2026 – Present",
    stack: ["ZK Proofs", "Polygon ID", "Privado", "Identity", "Web3"],
    points: [
      "Built a decentralized KYC system using zero-knowledge proofs — verifying identity without exposing user data.",
      "Integrated Privado and Polygon ID for verifiable credentials and privacy-preserving authentication.",
      "Designed attestation-based identity architecture with secure wallet interactions.",
      "Developed aggregation logic for multi-source attestations and improved ZK onboarding UX.",
    ],
  },
  {
    company: "PitchMatter Ventures LLC",
    role: "Blockchain Developer Intern",
    badge: "Internship",
    period: "Jan 2026 – Apr 2026",
    stack: ["Ethereum", "Solidity", "Hardhat", "EVM", "Testnets"],
    points: [
      "Developed Ethereum dApps with Solidity and Hardhat, focusing on contract optimization and testing.",
      "Integrated smart contracts into React frontends using Wagmi and Web3 libraries.",
      "Improved contract security through debugging, testing, and best practices.",
      "Contributed to architecture discussions, sprint planning, and code reviews.",
    ],
  },
];

function TimelineItem({ item, index }) {
  return (
    <motion.article
      className="relative pl-12 md:pl-20"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: "easeOut" }}
    >
      {/* node */}
      <motion.span
        className="absolute left-2 top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-300/60 bg-black md:left-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-70 blur-[3px]" />
        <span className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300" />
      </motion.span>

      <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/15">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-light text-white">{item.company}</h3>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-200/80">
            {item.badge}
          </span>
        </div>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-white/70">{item.role}</p>
          <p className="font-mono text-xs text-white/40">{item.period}</p>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-white/60">
          {item.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40">
          {item.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="px-6 py-32">
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">Experience</p>
        <h2 className="mt-4 text-3xl font-light text-white">Where I&apos;ve been building</h2>

        <div ref={ref} className="relative mt-12">
          {/* base rail */}
          <span className="absolute left-2 top-0 h-full w-px bg-white/10 md:left-4" />
          {/* animated fill that draws on scroll */}
          <motion.span
            className="absolute left-2 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent md:left-4"
            style={{ scaleY }}
          />
          {/* travelling glow */}
          <motion.span
            aria-hidden
            className="absolute left-2 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-md md:left-4"
            style={{ top: glowY }}
          />

          <div className="flex flex-col gap-10">
            {roles.map((item, index) => (
              <TimelineItem key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
