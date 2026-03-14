import { useState, useEffect } from "react";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobOpen,       setMobOpen]       = useState(false);

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
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMobOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "var(--bg-primary)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-mono text-sm font-bold tracking-tight shimmer-text"
        >
          christella.dev
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--text-secondary)"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: "linear-gradient(90deg, var(--accent), var(--accent-violet))",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative w-11 h-6 rounded-full border transition-all duration-300 flex items-center"
            style={{
              background: dark ? "rgba(16,185,129,0.1)" : "rgba(0,0,0,0.06)",
              borderColor: dark ? "rgba(16,185,129,0.35)" : "var(--border)",
            }}
          >
            <span
              className="absolute w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                left: dark ? "23px" : "3px",
                background: dark ? "var(--accent)" : "#64748b",
              }}
            >
              {dark
                ? <Moon size={10} strokeWidth={2.5} color="#fff" />
                : <Sun  size={10} strokeWidth={2.5} color="#fff" />
              }
            </span>
          </button>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-violet))",
              boxShadow: "0 0 20px rgba(16,185,129,0.25)",
            }}
          >
            <FileText size={13} strokeWidth={2.5} />
            Resume
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobOpen(!mobOpen)}
            className="md:hidden p-1.5 rounded-lg transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            aria-label={mobOpen ? "Close menu" : "Open menu"}
          >
            {mobOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: mobOpen ? "360px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "var(--bg-primary)",
          borderTop: mobOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 py-2.5 rounded-xl text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-violet))" }}
          >
            <FileText size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}