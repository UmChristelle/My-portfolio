import { useState, useEffect, useRef } from "react";
import { Layers, Server, Wrench, TrendingUp } from "lucide-react";

const SKILLS = [
  { name: "HTML & CSS",            pct: 88, cat: "Frontend" },
  { name: "JavaScript (ES6+)",     pct: 80, cat: "Frontend" },
  { name: "React.js",              pct: 75, cat: "Frontend" },
  { name: "Tailwind CSS",          pct: 82, cat: "Frontend" },
  { name: "PHP",                   pct: 65, cat: "Frontend" },
  { name: "Node.js / Express",     pct: 70, cat: "Backend"  },
  { name: "Python",                pct: 72, cat: "Backend"  },
  { name: "PostgreSQL / MySQL",    pct: 74, cat: "Backend"  },
  { name: "REST API Design",       pct: 70, cat: "Backend"  },
  { name: "JWT / Auth",            pct: 65, cat: "Backend"  },
  { name: "AWS (basics)",          pct: 55, cat: "Tools"    },
  { name: "Git / GitHub",          pct: 82, cat: "Tools"    },
  { name: "AI / Machine Learning", pct: 60, cat: "Tools"    },
  { name: "Microsoft Office",      pct: 90, cat: "Tools"    },
];

const EXTRAS = [
  "TypeScript", "Next.js", "Socket.io", "Figma", "Postman",
  "Vercel", "Netlify", "Linux CLI", "Agile / Scrum",
  "GitHub Actions", "Docker (basics)", "NLP basics",
];

const CAT_ICONS = {
  All:      null,
  Frontend: <Layers size={13} />,
  Backend:  <Server size={13} />,
  Tools:    <Wrench size={13} />,
};

function SkillBar({ name, pct }) {
  const ref            = useRef(null);
  const [active, setActive] = useState(false);
  const [hov,    setHov]    = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="flex justify-between mb-2">
        <span className="text-[13px] font-medium transition-colors duration-200"
          style={{ color: hov ? "var(--text-primary)" : "var(--text-secondary)" }}>
          {name}
        </span>
        <span className="text-[11px] font-mono transition-colors duration-200"
          style={{ color: hov ? "var(--accent)" : "var(--text-faint)" }}>
          {pct}%
        </span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: active ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState("All");
  const cats    = ["All", ...Array.from(new Set(SKILLS.map((s) => s.cat)))];
  const visible = tab === "All" ? SKILLS : SKILLS.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="section-line" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
              Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            Tech Stack
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal flex gap-2 flex-wrap mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200"
              style={{
                borderColor: tab === c ? "rgba(16,185,129,0.4)" : "var(--border)",
                background:  tab === c ? "rgba(16,185,129,0.1)" : "transparent",
                color:       tab === c ? "var(--accent)"        : "var(--text-muted)",
              }}
            >
              {CAT_ICONS[c]}
              {c}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="reveal grid md:grid-cols-2 gap-x-14 gap-y-5">
          {visible.map((s) => <SkillBar key={s.name} name={s.name} pct={s.pct} />)}
        </div>

        {/* Also learning */}
        <div className="reveal mt-14 p-8 rounded-2xl border"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5 text-center"
            style={{ color: "var(--text-muted)" }}>
            Also Learning & Exploring
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {EXTRAS.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-[11px] font-mono border"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--bg-card-solid)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Growing banner */}
        <div className="reveal mt-6 p-5 rounded-2xl flex items-center gap-4 flex-wrap border"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.05), rgba(139,92,246,0.05))",
            borderColor: "rgba(16,185,129,0.15)",
          }}>
          <TrendingUp size={22} style={{ color: "var(--accent)", flexShrink: 0 }} />
          <div>
            <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>Always Growing</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Currently deepening React & Node.js skills, exploring TypeScript,
              and building more AI-powered projects with Python.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}