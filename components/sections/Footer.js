'use client';

import { Github, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/OTAKUBABAJI" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/MohakPawar_dev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohak-pawar-407686218/" },
  { icon: LinkIcon, label: "Etherscan", href: "https://portfolio-iota-sepia-feyijzub8x.vercel.app/" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center text-xs text-white/40">
      <div className="flex items-center justify-center gap-4">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-white/30 hover:text-white"
          >
            <Icon className="h-4 w-4" aria-label={label} />
          </a>
        ))}
      </div>
      <p className="mt-4">© {new Date().getFullYear()} Mohak Pawar. Building trustless systems.</p>
    </footer>
  );
}

