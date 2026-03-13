import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["hero", "about", "projects", "skills", "contact"];
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#060c14]/95 backdrop-blur-xl border-b border-[#1e2d3d]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-mono text-sm font-bold tracking-tight shimmer-text"
        >
          christella.dev
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-emerald-400" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: "linear-gradient(90deg, #10b981, #8b5cf6)",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="relative w-11 h-6 rounded-full border transition-all duration-300"
            style={{
              background: dark ? "rgba(16,185,129,0.1)" : "#e2e8f0",
              borderColor: dark ? "rgba(16,185,129,0.3)" : "#cbd5e1",
            }}
          >
            <span
              className="absolute top-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] transition-all duration-300"
              style={{
                left: dark ? "23px" : "3px",
                background: dark ? "#10b981" : "#94a3b8",
              }}
            >
              {dark ? "🌙" : "☀️"}
            </span>
          </button>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #10b981, #8b5cf6)",
              boxShadow: "0 0 20px rgba(16,185,129,0.3)",
            }}
          >
            Resume ↓
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobOpen(!mobOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[1.5px] bg-slate-400 rounded-full transition-all duration-300"
                style={{
                  width: i === 1 ? "14px" : "22px",
                  transform:
                    mobOpen && i === 0
                      ? "rotate(45deg) translateY(6px)"
                      : mobOpen && i === 2
                      ? "rotate(-45deg) translateY(-6px)"
                      : "none",
                  opacity: mobOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobOpen && (
        <div className="md:hidden bg-[#060c14]/98 border-t border-[#1e2d3d] px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-sm font-medium text-slate-400 border-b border-[#1e2d3d] hover:text-emerald-400 transition-colors capitalize"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center py-2.5 rounded-xl text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, #10b981, #8b5cf6)" }}
          >
            Download Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
}