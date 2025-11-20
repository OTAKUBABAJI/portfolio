'use client';

import { motion } from "framer-motion";

const categories = [
  {
    title: "Blockchain / Smart Contracts",
    items: [
      "Solidity",
      "Hardhat",
      "OpenZeppelin",
      "Ethers.js",
      "wagmi",
      "viem",
      "IPFS",
      "NFT.Storage",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Infra",
    items: ["Git", "GitHub", "MetaMask", "Alchemy", "Infura"],
  },
  {
    title: "Chains",
    items: ["Ethereum", "Base"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">Skills</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="rounded-3xl border border-white/5 bg-white/5 p-8 text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h3 className="text-lg font-light text-white">{category.title}</h3>
              <ul className="mt-6 space-y-4 text-sm text-white/60">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="relative flex items-center justify-center gap-2"
                  >
                    <motion.span
                      className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                      whileHover={{ scale: 1.6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

