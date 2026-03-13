import { useState, useEffect, useRef } from "react";

const SKILLS = [
  { name: "HTML & CSS", pct: 88, cat: "Frontend" },
  { name: "JavaScript (ES6+)", pct: 80, cat: "Frontend" },
  { name: "React.js", pct: 75, cat: "Frontend" },
  { name: "Tailwind CSS", pct: 82, cat: "Frontend" },
  { name: "PHP", pct: 65, cat: "Frontend" },
  { name: "Node.js / Express", pct: 70, cat: "Backend" },
  { name: "Python", pct: 72, cat: "Backend" },
  { name: "PostgreSQL / MySQL", pct: 74, cat: "Backend" },
  { name: "REST API Design", pct: 70, cat: "Backend" },
  { name: "JWT / Auth", pct: 65, cat: "Backend" },
  { name: "AWS (basics)", pct: 55, cat: "Tools" },
  { name: "Git / GitHub", pct: 82, cat: "Tools" },
  { name: "AI / Machine Learning", pct: 60, cat: "Tools" },
  { name: "Microsoft Office", pct: 90, cat: "Tools" },
];

const EXTRAS = ["TypeScript", "Next.js", "Socket.io", "Figma", "Postman", "Vercel", "Netlify", "Linux CLI", "Agile / Scrum", "GitHub Actions", "Docker (basics)", "NLP basics"];

function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="flex justify-between mb-2">
        <span className="text-[13px] font-medium transition-colors duration-200" style={{ color: hov ? "#f8fafc" : "#94a3b8" }}>{name}</span>
        <span className="text-[11px] font-mono transition-colors duration-200" style={{ color: hov ? "#10b981" : "#334155" }}>{pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: active ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState("All");
  const cats = ["All", ...Array.from(new Set(SKILLS.map(s => s.cat)))];
  const visible = tab === "All" ? SKILLS : SKILLS.filter(s => s.cat === tab);

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "#060c14" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1.5px]" style={{ background: "linear-gradient(90deg,#10b981,#8b5cf6)" }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-emerald-400">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100">Tech Stack</h2>
        </div>

        {/* Tabs */}
        <div className="reveal flex gap-2 flex-wrap mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setTab(c)}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200"
              style={{
                borderColor: tab === c ? "rgba(16,185,129,0.4)" : "#1e2d3d",
                background: tab === c ? "rgba(16,185,129,0.1)" : "transparent",
                color: tab === c ? "#10b981" : "#475569",
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="reveal grid md:grid-cols-2 gap-x-14 gap-y-5">
          {visible.map(s => <SkillBar key={s.name} name={s.name} pct={s.pct} />)}
        </div>

        {/* Extras */}
        <div className="reveal mt-14 p-8 rounded-2xl border border-[#1e2d3d]" style={{ background: "rgba(10,22,40,0.5)" }}>
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-500 mb-5 text-center">Also Learning & Exploring</p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {EXTRAS.map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-[11px] font-mono border border-[#1e2d3d] text-slate-500" style={{ background: "#0a1628" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Growing banner */}
        <div className="reveal mt-6 p-5 rounded-2xl flex items-center gap-4 flex-wrap border" style={{ background: "linear-gradient(135deg,rgba(16,185,129,0.05),rgba(139,92,246,0.05))", borderColor: "rgba(16,185,129,0.15)" }}>
          <span className="text-2xl">🌱</span>
          <div>
            <p className="text-sm font-bold text-slate-200 mb-1">Always Growing</p>
            <p className="text-xs text-slate-400 leading-relaxed">Currently deepening React & Node.js skills, exploring TypeScript, and building more AI-powered projects with Python.</p>
          </div>
        </div>
      </div>
    </section>
  );
}