import { useState, useEffect } from "react";

const ROLES = [
  "Full Stack Developer",
  "React Engineer",
  "Node.js Builder",
  "AI Enthusiast",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    let t;
    if (!del && text.length < w.length)
      t = setTimeout(() => setText(w.slice(0, text.length + 1)), 80);
    else if (!del) t = setTimeout(() => setDel(true), 2000);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 42);
    else { setDel(false); setWi((wi + 1) % words.length); }
    return () => clearTimeout(t);
  }, [text, del, wi, words]);
  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="glow-pulse absolute top-[15%] -left-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 65%)" }} />
        <div className="glow-pulse absolute bottom-[5%] -right-[8%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 65%)", animationDelay: "1.8s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8" style={{ borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.06)" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 block" style={{ boxShadow: "0 0 8px #10b981" }} />
            <span className="text-xs font-semibold text-emerald-400 tracking-widest">Open to junior roles & internships</span>
          </div>

          {/* Name */}
          <div className="fade-up mb-2" style={{ animationDelay: "0.08s" }}>
            <span className="text-slate-500 font-medium text-sm tracking-wide">Hi, I'm</span>
          </div>
          <h1 className="fade-up text-5xl md:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-4" style={{ animationDelay: "0.12s" }}>
            <span className="shimmer-text">Christella</span><br />
            <span className="text-slate-100">Umutoni</span>
          </h1>

          {/* Typewriter */}
          <div className="cursor fade-up font-mono text-emerald-400 text-lg mb-6 min-h-[30px]" style={{ animationDelay: "0.2s" }}>
            {typed}
          </div>

          {/* Bio */}
          <p className="fade-up text-slate-400 text-base leading-relaxed max-w-lg mb-10" style={{ animationDelay: "0.28s" }}>
            Information Systems student at <strong className="text-slate-300">University of Rwanda</strong> with hands-on experience in web development, databases, and AI. I build clean, full-stack web apps with <strong className="text-slate-300">React</strong>, <strong className="text-slate-300">Node.js</strong>, and <strong className="text-slate-300">PostgreSQL</strong>.
          </p>

          {/* CTAs */}
          <div className="fade-up flex flex-wrap gap-3 mb-12" style={{ animationDelay: "0.36s" }}>
            <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              See My Projects →
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="fade-up flex gap-10 flex-wrap" style={{ animationDelay: "0.44s" }}>
            {[["5+", "Projects Built"], ["2", "Years Learning"], ["3", "Certifications"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-black shimmer-text leading-none">{n}</div>
                <div className="text-xs text-slate-500 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Graphic */}
        <div className="hidden lg:flex justify-center">
          <div className="float relative w-64 h-64">
            <svg className="spin-slow absolute inset-0 w-full h-full" viewBox="0 0 260 260">
              <circle cx="130" cy="130" r="122" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1" strokeDasharray="6 16" />
            </svg>
            <svg className="spin-reverse absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)]" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" strokeDasharray="3 10" />
            </svg>
            <div className="morph absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 flex items-center justify-center text-5xl"
              style={{ background: "linear-gradient(135deg,rgba(16,185,129,0.1),rgba(139,92,246,0.07))", border: "1px solid rgba(16,185,129,0.2)" }}>
              👩‍💻
            </div>
            {[
              { label: "React", pos: "top-0 left-1/2 -translate-x-1/2", color: "#61dafb" },
              { label: "Node", pos: "bottom-4 left-0", color: "#68a063" },
              { label: "SQL", pos: "top-[38%] -right-4", color: "#336791" },
              { label: "AWS", pos: "bottom-4 right-0", color: "#ff9900" },
            ].map((b) => (
              <div key={b.label} className={`absolute ${b.pos} px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono`}
                style={{ background: "#0a1628", border: `1px solid ${b.color}55`, color: b.color, boxShadow: `0 4px 16px ${b.color}22` }}>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(#10b981, transparent)" }} />
      </div>
    </section>
  );
}