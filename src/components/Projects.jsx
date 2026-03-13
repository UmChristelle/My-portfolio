import { useState } from "react";

const PROJECTS = [
  { id: 1, num: "01", title: "TaskFlow", tag: "Productivity App", year: "2024", desc: "A full-stack task management app with real-time collaboration, drag-and-drop boards, and team workspaces. Built with React, Node.js, and PostgreSQL.", tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind"], accent: "#10b981", emoji: "✅", link: "#", github: "https://github.com/UmChristelle", stats: ["Real-time sync", "Team boards", "Drag & drop"] },
  { id: 2, num: "02", title: "ShopNest", tag: "E-Commerce", year: "2024", desc: "A fully functional e-commerce platform with product listings, cart management, Stripe payments, and an admin dashboard.", tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS S3"], accent: "#8b5cf6", emoji: "🛍️", link: "#", github: "https://github.com/UmChristelle", stats: ["Stripe payments", "Admin panel", "AWS hosting"] },
  { id: 3, num: "03", title: "WeatherNow", tag: "Weather App", year: "2023", desc: "A beautiful weather dashboard with 7-day forecasts, location search, and animated weather icons.", tech: ["React", "OpenWeather API", "CSS Animations", "Vite"], accent: "#f59e0b", emoji: "🌤️", link: "#", github: "https://github.com/UmChristelle", stats: ["7-day forecast", "Location search", "Animated UI"] },
  { id: 4, num: "04", title: "DevBlog API", tag: "REST API", year: "2023", desc: "A RESTful blog API with JWT authentication, role-based access, pagination, and full CRUD for posts, tags, and comments.", tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Jest"], accent: "#ec4899", emoji: "📡", link: "#", github: "https://github.com/UmChristelle", stats: ["JWT auth", "Role-based", "80% test coverage"] },
  { id: 5, num: "05", title: "AI Study Helper", tag: "AI Tool", year: "2023", desc: "An AI-powered study assistant that summarizes notes, generates quiz questions, and tracks learning progress using Python and NLP.", tech: ["Python", "NLP", "Flask", "React", "PostgreSQL"], accent: "#06b6d4", emoji: "🧠", link: "#", github: "https://github.com/UmChristelle", stats: ["NLP powered", "Quiz generator", "Progress tracking"] },
];

function ProjectCard({ p, idx, list }) {
  const [hov, setHov] = useState(false);
  if (list) return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="reveal flex items-start gap-5 p-5 rounded-2xl border transition-all duration-400 cursor-pointer"
      style={{ borderColor: hov ? "#334155" : "#1e2d3d", background: hov ? "rgba(16,185,129,0.03)" : "rgba(10,22,40,0.5)", transform: hov ? "translateX(6px)" : "none", boxShadow: hov ? `0 8px 30px ${p.accent}15` : "none" }}>
      <span className="text-2xl shrink-0">{p.emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm font-bold text-slate-200">{p.title}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold border" style={{ color: p.accent, background: `${p.accent}11`, borderColor: `${p.accent}44` }}>{p.tag}</span>
          <span className="text-[11px] text-slate-600 ml-auto font-mono">{p.year}</span>
        </div>
        <p className="text-[13px] text-slate-400 leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-md font-mono border border-[#1e293b] text-slate-500" style={{ background: "#0a1628" }}>{t}</span>)}
        </div>
      </div>
      <div className="flex gap-2 shrink-0">
        {[["↗", p.link], ["GH", p.github]].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-bold transition-all duration-200"
            style={{ borderColor: hov ? `${p.accent}55` : "#1e2d3d", color: hov ? p.accent : "#475569" }}>{label}</a>
        ))}
      </div>
    </div>
  );

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="reveal rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer relative"
      style={{ borderColor: hov ? "#334155" : "#1e2d3d", background: "#0a1628", transform: hov ? "translateY(-5px)" : "none", boxShadow: hov ? `0 20px 55px ${p.accent}1e` : "none" }}>
      <div className="h-[1.5px] w-full" style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full transition-opacity duration-500" style={{ background: p.accent, filter: "blur(50px)", opacity: hov ? 0.09 : 0 }} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{p.emoji}</span>
            <span className="text-[11px] font-mono text-slate-700">{p.num}</span>
          </div>
          <div className="flex gap-2">
            {[["↗", p.link], ["GitHub", p.github]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all duration-200"
                style={{ borderColor: hov ? `${p.accent}44` : "#1e293b", color: hov ? p.accent : "#475569" }}>{label}</a>
            ))}
          </div>
        </div>
        <h3 className="text-base font-bold mb-1 transition-colors duration-200" style={{ color: hov ? p.accent : "#f8fafc" }}>{p.title}</h3>
        <p className="text-[11px] text-slate-600 font-semibold mb-3 tracking-wide">{p.tag} · {p.year}</p>
        <p className="text-[13px] text-slate-400 leading-relaxed mb-4">{p.desc}</p>
        <div className="grid grid-cols-3 gap-1 mb-4 p-2.5 rounded-xl" style={{ background: "#060c14" }}>
          {p.stats.map(s => <div key={s} className="text-center text-[10px] font-semibold text-slate-500 leading-snug">{s}</div>)}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-md font-mono border border-[#1e293b] text-slate-500" style={{ background: "#060c14" }}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [view, setView] = useState("grid");
  return (
    <section id="projects" className="py-28 px-6" style={{ background: "#080f1a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1.5px]" style={{ background: "linear-gradient(90deg,#10b981,#8b5cf6)" }} />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-emerald-400">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100">Things I've Built</h2>
            <p className="text-slate-400 text-sm mt-3 max-w-md leading-relaxed">Real projects I've designed, built, and shipped — from idea to deployed product.</p>
          </div>
          <div className="flex gap-1 p-1 rounded-xl border border-[#1e2d3d]" style={{ background: "#0a1628" }}>
            {[["grid", "⊞"], ["list", "≡"]].map(([v, icon]) => (
              <button key={v} onClick={() => setView(v)}
                className="w-9 h-8 rounded-lg text-sm transition-all duration-200"
                style={{ background: view === v ? "rgba(16,185,129,0.15)" : "transparent", color: view === v ? "#10b981" : "#475569" }}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-5" : "flex flex-col gap-3"}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} idx={i} list={view === "list"} />)}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/UmChristelle" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e2d3d] text-slate-400 text-sm font-semibold transition-all duration-200 hover:border-emerald-500/40 hover:text-emerald-400">
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}