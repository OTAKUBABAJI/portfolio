'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const navInitials = "MP";
  const mobileMenuLabel = "Menu";

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-3"
    >
      <div
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-5 py-3 text-xs uppercase tracking-[0.35em] transition-all ${
          isSolid
            ? "border-white/10 bg-black/80 backdrop-blur-2xl"
            : "border-white/5 bg-black/20 backdrop-blur"
        }`}
      >
        <Link href="#hero" className="text-white/60">
          {navInitials}
        </Link>
        <div className="hidden gap-5 text-[11px] tracking-[0.2em] text-white/60 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <Button href="#contact" size="sm" variant="ghost" className="hidden tracking-[0.2em] md:inline-flex">
          Contact
        </Button>
        <span className="text-white/60 md:hidden">{mobileMenuLabel}</span>
      </div>
    </motion.nav>
  );
}

