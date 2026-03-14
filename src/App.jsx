import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(true);

  // Apply dark/light class and persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("christella-theme", dark ? "dark" : "light");
  }, [dark]);

  // Read saved preference on first load
  useEffect(() => {
    const saved = localStorage.getItem("christella-theme");
    if (saved === "light") setDark(false);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Crafted with{" "}
          <span style={{ color: "var(--accent)" }}>♥</span> by{" "}
          <span className="font-bold shimmer-text">Christella Umutoni</span>{" "}
          · {new Date().getFullYear()}
        </p>
        <p className="text-xs mt-1 font-mono" style={{ color: "var(--text-faint)" }}>
          React · Tailwind CSS · Vite
        </p>
      </footer>
    </div>
  );
}