'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Blaze NFT Marketplace",
    description: "Full-stack marketplace with custom ERC-721 contracts, IPFS pinning, and live mint dashboard.",
    chains: ["Ethereum", "Base"],
    href: "https://blaze-marketplace-psi.vercel.app/",
  },
  {
    id: 2,
    title: "ERC-20 Tokens + Staking Suite",
    description: "Suite of audited ERC-20 tokens with staking rewards, Foundry test harness, and deployment scripts.",
    chains: ["Ethereum"],
    href: "#",
  },
  {
    id: 3,
    title: "Weather Oracle dApp",
    description: "Hybrid dApp pulling weather feeds on-chain with Hardhat automation and minimalist Next.js front-end.",
    chains: ["Base"],
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/40">Selected Work</p>
            <h2 className="mt-4 text-3xl font-light text-white">Projects</h2>
          </div>
          <ArrowUpRight className="hidden h-6 w-6 text-white/30 md:block" />
        </div>
        <div className="soft-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 pb-4 pt-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card relative flex min-w-[280px] flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-transparent to-transparent p-6 transition hover:border-white/15 hover:bg-white/5"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              whileHover={{ y: -12 }}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/5 bg-black/60">
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10" />
                <p className="relative flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.4em] text-white/40">
                  Preview coming soon
                </p>
                <div className="matrix-overlay" />
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                <h3 className="text-xl font-light text-white">{project.title}</h3>
                <p className="text-sm text-white/60">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-white/40">
                  {project.chains.map((chain) => (
                    <span key={chain} className="rounded-full border border-white/10 px-3 py-1">
                      {chain}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
                  whileHover={{ x: 4 }}
                >
                  Visit
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

