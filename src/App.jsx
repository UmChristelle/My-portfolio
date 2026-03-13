import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#060c14] dark:bg-[#060c14] text-slate-100 transition-colors duration-500">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1e2d3d] text-center">
        <p className="text-sm text-slate-500">
          Crafted with 💚 by{" "}
          <span className="font-bold shimmer-text">
            Christella Umutoni
          </span>{" "}
          · {new Date().getFullYear()}
        </p>
        <p className="text-xs text-[#1e293b] mt-1 font-mono">
          React · Tailwind CSS · Vite
        </p>
      </footer>
    </div>
  );
}