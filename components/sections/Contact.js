'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

function createTxHash() {
  return (
    "0x" +
    Array.from({ length: 64 })
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  );
}

const contactHeadline = "Let’s ship something on-chain";
const contactDescription = "Reach out for freelance builds, junior roles, or smart-contract collaborations. Fast replies, clean repos.";
const nameLabel = "Name";
const namePlaceholder = "Your name";
const emailLabel = "Email";
const emailPlaceholder = "name@domain.com";
const messageLabel = "Message";
const messagePlaceholder = "Tell me about the project, scope, and timelines.";
const statusIdleCopy = "status: ready → awaiting transaction";
const primaryEmail = "praj02422@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/mohak-pawar-407686218/";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [txHash, setTxHash] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setTxHash("");
    setTimeout(() => {
      setStatus("confirmed");
      setTxHash(createTxHash());
    }, 1600);
  }

  return (
    <section id="contact" className="px-6 py-32">
      <motion.div
        className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Contact</p>
          <h3 className="mt-4 text-3xl font-light text-white">
            {contactHeadline}
          </h3>
          <p className="mt-4 text-sm text-white/60">
            {contactDescription}
          </p>
          <div className="mt-10 space-y-3 text-sm text-white/70">
            <p>
              Email:{" "}
              <a className="text-cyan-300 hover:underline" href={`mailto:${primaryEmail}`}>
                {primaryEmail}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="text-cyan-300 hover:underline"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                {linkedinUrl}
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8"
        >
          <div className="space-y-3">
            <Label htmlFor="name">{nameLabel}</Label>
            <Input
              id="name"
              name="name"
              placeholder={namePlaceholder}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email">{emailLabel}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={emailPlaceholder}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="message">{messageLabel}</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder={messagePlaceholder}
              required
            />
          </div>
          <div className="space-y-4">
            <Button
              type="submit"
              size="lg"
              variant="glow"
              className="w-full border border-white/10 py-3 text-sm uppercase tracking-[0.4em]"
            >
              {status === "sending" ? "Sending Transaction…" : "Send Message"}
            </Button>
            <div className="min-h-[64px] rounded-2xl border border-white/10 bg-black/40 p-4 text-xs font-mono text-white/70">
              {status === "idle" && statusIdleCopy}
              {status === "sending" && "status: pending → mempool"}
              {status === "confirmed" && (
                <div className="space-y-1">
                  <p className="text-green-400">Transaction Confirmed</p>
                  <p>hash: {txHash}</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

