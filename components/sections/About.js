'use client';

import { motion } from "framer-motion";

const summary = `Self-taught blockchain developer currently shipping on Ethereum and Base.

I’ve built and deployed:
• Blaze NFT Marketplace (full-stack dApp with Ethers + IPFS)
• Multiple ERC-20 tokens and staking contracts
• Weather oracle dApp
All contracts tested with Foundry, scripts ready, frontends live.

Still grinding every day – learning Rust/Solana on the side, but my production experience is 100% Ethereum ecosystem right now.

Looking for junior / intern roles or paid freelance gigs where I can write, test, and ship real smart contracts while leveling up fast.

If you need someone who actually finishes what he starts and replies in minutes – let’s talk.`;

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