import { useState, useEffect } from "react";
import { ArrowDown, Briefcase, BookOpen, Award } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "React Engineer",
  "Node.js Builder",
  "AI Enthusiast",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wi,   setWi]   = useState(0);
  const [del,  setDel]  = useState(false);

  useEffect(() => {
    const w = words[wi];
    let t;
    if (!del && text.length < w.length)
      t = setTimeout(() => setText(w.slice(0, text.length + 1)), 80);
    else if (!del)
      t = setTimeout(() => setDel(true), 2000);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 42);
    else {
      setDel(false);
      setWi((wi + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [text, del, wi, words]);

  return text;
}

const stats = [
  { n: "5+", l: "Projects Built", icon: <Briefcase size={14} /> },
  { n: "2",  l: "Years Learning", icon: <BookOpen  size={14} /> },
  { n: "3",  l: "Certifications", icon: <Award     size={14} /> },
];

const techBadges = [
  { label: "React", pos: "top-0 left-1/2 -translate-x-1/2", color: "#61dafb" },
  { label: "Node",  pos: "bottom-4 left-0",                  color: "#68a063" },
  { label: "SQL",   pos: "top-[38%] -right-4",               color: "#336791" },
  { label: "AWS",   pos: "bottom-4 right-0",                 color: "#ff9900" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background dots + glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="glow-pulse absolute top-[15%] -left-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 65%)" }}
        />
        <div
          className="glow-pulse absolute bottom-[5%] -right-[8%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 65%)", animationDelay: "1.8s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* ── Left ── */}
        <div>
          {/* Open-to-work badge */}
          <div
            className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.06)" }}
          >
            <span
              className="w-2 h-2 rounded-full block"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
            />
            <span className="text-xs font-semibold tracking-widest" style={{ color: "var(--accent)" }}>
              Open to junior roles & internships
            </span>
          </div>

          {/* Name */}
          <div className="fade-up mb-2" style={{ animationDelay: "0.08s" }}>
            <span className="font-medium text-sm tracking-wide" style={{ color: "var(--text-muted)" }}>
              Hi, I'm
            </span>
          </div>
          <h1
            className="fade-up text-5xl md:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-4"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="shimmer-text">Christella</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Umutoni</span>
          </h1>

          {/* Typewriter */}
          <div
            className="cursor fade-up font-mono text-lg mb-6 min-h-[30px]"
            style={{ color: "var(--accent)", animationDelay: "0.2s" }}
          >
            {typed}
          </div>

          {/* Bio */}
          <p
            className="fade-up text-base leading-relaxed max-w-lg mb-10"
            style={{ color: "var(--text-secondary)", animationDelay: "0.28s" }}
          >
            Information Systems student at{" "}
            <strong style={{ color: "var(--text-primary)" }}>University of Rwanda</strong>{" "}
            with hands-on experience in web development, databases, and AI. I build clean,
            full-stack web apps with{" "}
            <strong style={{ color: "var(--text-primary)" }}>React</strong>,{" "}
            <strong style={{ color: "var(--text-primary)" }}>Node.js</strong>, and{" "}
            <strong style={{ color: "var(--text-primary)" }}>PostgreSQL</strong>.
          </p>

          {/* CTAs */}
          <div className="fade-up flex flex-wrap gap-3 mb-12" style={{ animationDelay: "0.36s" }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              See My Projects →
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="fade-up flex gap-10 flex-wrap" style={{ animationDelay: "0.44s" }}>
            {stats.map(({ n, l, icon }) => (
              <div key={l} className="flex items-start gap-2">
                <span className="mt-1" style={{ color: "var(--accent)" }}>{icon}</span>
                <div>
                  <div className="text-2xl font-black shimmer-text leading-none">{n}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Profile Photo ── */}
        <div className="hidden lg:flex justify-center">
          <div className="float relative w-64 h-64">
            {/* Outer spinning ring */}
            <svg className="spin-slow absolute inset-0 w-full h-full" viewBox="0 0 260 260">
              <circle cx="130" cy="130" r="122" fill="none" stroke="rgba(16,185,129,0.18)" strokeWidth="1" strokeDasharray="6 16" />
            </svg>
            {/* Inner spinning ring */}
            <svg className="spin-reverse absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)]" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(139,92,246,0.18)" strokeWidth="1" strokeDasharray="3 10" />
            </svg>

            {/* Profile photo */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full overflow-hidden"
              style={{
                border: "3px solid rgba(16,185,129,0.45)",
                boxShadow: "0 0 0 6px rgba(16,185,129,0.08), 0 0 50px rgba(16,185,129,0.2)",
              }}
            >
              <img
                src="/christella's profile.jpeg"
                alt="Christella Umutoni"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Tech badges */}
            {techBadges.map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.pos} px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono`}
                style={{
                  background: "var(--bg-card-solid)",
                  border: `1px solid ${b.color}55`,
                  color: b.color,
                  boxShadow: `0 4px 16px ${b.color}22`,
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <ArrowDown size={14} style={{ color: "var(--text-muted)" }} />
        <div className="w-px h-8" style={{ background: "linear-gradient(var(--accent), transparent)" }} />
      </div>
    </section>
  );
}
