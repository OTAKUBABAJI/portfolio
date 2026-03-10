'use client';

import { motion } from "framer-motion";

const summary = `Self-taught blockchain developer currently building decentralized applications and smart contract systems across the Web3 ecosystem.

I’m currently working as a Blockchain Developer Intern at PitchMatter Ventures (Dubai) where I contribute to smart contract development, Web3 integrations, and production-level decentralized applications.

I enjoy designing systems that combine smart contracts, decentralized finance mechanics, and real user interfaces. My focus is building complete end-to-end Web3 products — from Solidity contracts to frontend dApps. My development workflow includes Solidity, Hardhat, Foundry testing, Wagmi/Viem integrations, and React-based Web3 frontends.

I’m passionate about open-source collaboration, DeFi protocols, and building real on-chain applications that solve practical problems.

Currently open to junior blockchain roles, freelance smart contract work, and Web3 collaborations where I can continue shipping production-level systems and growing as a developer.`;

export function About() {
  return (
    <motion.section
      id="about"
      className="relative mx-auto max-w-3xl px-6 py-32 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-white/40">About</p>
      <p className="mt-6 text-xl leading-relaxed text-white/70 whitespace-pre-line">
        {summary}
      </p>
    </motion.section>
  );
}
