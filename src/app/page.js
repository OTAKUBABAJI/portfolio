import { Navbar } from "../../components/Navbar";
import { ParticlesBackground } from "../../components/ParticlesBackground";
import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import { Projects } from "../../components/sections/Projects";
import { Skills } from "../../components/sections/Skills";
import { Contact } from "../../components/sections/Contact";
import { Footer } from "../../components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 opacity-40">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto flex max-w-6xl flex-col">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,216,255,0.15),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(192,132,252,0.12),_transparent_40%)]" />
    </div>
  );
}
