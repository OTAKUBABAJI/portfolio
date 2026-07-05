'use client';

import { motion } from "framer-motion";

const summary = `Blockchain developer building end-to-end Web3 products — from Solidity contracts to the dApps people actually use.

I’m currently a full-time Blockchain Developer at Petition.io (ZK Systems), where I build decentralized KYC using zero-knowledge proofs — verifying identity without exposing user data. I work with Privado and Polygon ID for verifiable credentials, design attestation-based identity architecture, and build aggregation logic for multi-source attestations with a smoother ZK onboarding UX.

Before Petition.io I shipped Ethereum dApps at PitchMatter Ventures with Solidity and Hardhat — contract optimization, testing, and Wagmi/Viem integrations into React frontends.

My focus is systems that combine smart contracts, DeFi mechanics, privacy, and real interfaces. I care about clean repos, gas-conscious contracts, and on-chain products that solve practical problems.`;

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
