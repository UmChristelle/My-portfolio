import { useState } from "react";
import { ExternalLink, Github, LayoutGrid, List } from "lucide-react";

const PROJECTS = [
  {
    id: 1, num: "01", title: "TaskFlow", tag: "Productivity App", year: "2024",
    desc: "A full-stack task management app with real-time collaboration, drag-and-drop boards, and team workspaces. Built with React, Node.js, and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind"],
    accent: "#10b981", link: "#", github: "https://github.com/UmChristelle",
    stats: ["Real-time sync", "Team boards", "Drag & drop"],
  },
  {
    id: 2, num: "02", title: "ShopNest", tag: "E-Commerce", year: "2024",
    desc: "A fully functional e-commerce platform with product listings, cart management, Stripe payments, and an admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS S3"],
    accent: "#8b5cf6", link: "#", github: "https://github.com/UmChristelle",
    stats: ["Stripe payments", "Admin panel", "AWS hosting"],
  },
  {
    id: 3, num: "03", title: "WeatherNow", tag: "Weather App", year: "2023",
    desc: "A beautiful weather dashboard with 7-day forecasts, location search, and animated weather icons using OpenWeather API.",
    tech: ["React", "OpenWeather API", "CSS Animations", "Vite"],
    accent: "#f59e0b", link: "#", github: "https://github.com/UmChristelle",
    stats: ["7-day forecast", "Location search", "Animated UI"],
  },
  {
    id: 4, num: "04", title: "DevBlog API", tag: "REST API", year: "2023",
    desc: "A RESTful blog API with JWT authentication, role-based access, pagination, and full CRUD for posts, tags, and comments.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Jest"],
    accent: "#ec4899", link: "#", github: "https://github.com/UmChristelle",
    stats: ["JWT auth", "Role-based", "80% test coverage"],
  },
  {
    id: 5, num: "05", title: "AI Study Helper", tag: "AI Tool", year: "2023",
    desc: "An AI-powered study assistant that summarizes notes, generates quiz questions, and tracks learning progress using Python and NLP.",
    tech: ["Python", "NLP", "Flask", "React", "PostgreSQL"],
    accent: "#06b6d4", link: "#", github: "https://github.com/UmChristelle",
    stats: ["NLP powered", "Quiz generator", "Progress tracking"],
  },
];

function ProjectCard({ p, list }) {
  const [hov, setHov] = useState(false);

  if (list) {
    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="reveal flex items-start gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer"
        style={{
          borderColor: hov ? "var(--border-hover)" : "var(--border)",
          background: hov ? `${p.accent}08` : "var(--bg-card)",
          transform: hov ? "translateX(6px)" : "none",
          boxShadow: hov ? `0 8px 30px ${p.accent}18` : "none",
        }}
      >
        <span className="text-[11px] font-mono font-bold pt-1 shrink-0" style={{ color: p.accent }}>
          {p.num}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{p.title}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold border"
              style={{ color: p.accent, background: `${p.accent}11`, borderColor: `${p.accent}44` }}>
              {p.tag}
            </span>
            <span className="text-[11px] ml-auto font-mono" style={{ color: "var(--text-faint)" }}>{p.year}</span>
          </div>
          <p className="text-[13px] leading-relaxed mb-3 line-clamp-2" style={{ color: "var(--text-secondary)" }}>
            {p.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-md font-mono border"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--bg-card-solid)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200"
            style={{ borderColor: hov ? `${p.accent}55` : "var(--border)", color: hov ? p.accent : "var(--text-muted)" }}>
            <ExternalLink size={12} />
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200"
            style={{ borderColor: hov ? `${p.accent}55` : "var(--border)", color: hov ? p.accent : "var(--text-muted)" }}>
            <Github size={12} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="reveal rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer relative flex flex-col"
      style={{
        borderColor: hov ? "var(--border-hover)" : "var(--border)",
        background: "var(--bg-card-solid)",
        transform: hov ? "translateY(-5px)" : "none",
        boxShadow: hov ? `0 20px 55px ${p.accent}1e` : "none",
      }}
    >
      {/* Top accent line */}
      <div className="h-[1.5px] w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
      {/* Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500"
        style={{ background: p.accent, filter: "blur(50px)", opacity: hov ? 0.09 : 0 }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex justify-between items-start mb-5">
          <span className="text-[11px] font-mono font-bold" style={{ color: "var(--text-faint)" }}>{p.num}</span>
          <div className="flex gap-2">
            <a href={p.link} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all duration-200"
              style={{ borderColor: hov ? `${p.accent}44` : "var(--border)", color: hov ? p.accent : "var(--text-muted)" }}>
              <ExternalLink size={10} /> Live
            </a>
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all duration-200"
              style={{ borderColor: hov ? `${p.accent}44` : "var(--border)", color: hov ? p.accent : "var(--text-muted)" }}>
              <Github size={10} /> Code
            </a>
          </div>
        </div>

        <h3 className="text-base font-bold mb-1 transition-colors duration-200"
          style={{ color: hov ? p.accent : "var(--text-primary)" }}>
          {p.title}
        </h3>
        <p className="text-[11px] font-semibold mb-3 tracking-wide" style={{ color: "var(--text-faint)" }}>
          {p.tag} · {p.year}
        </p>
        <p className="text-[13px] leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
          {p.desc}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1 mb-4 p-2.5 rounded-xl" style={{ background: "var(--bg-primary)" }}>
          {p.stats.map((s) => (
            <div key={s} className="text-center text-[10px] font-semibold leading-snug" style={{ color: "var(--text-muted)" }}>
              {s}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-md font-mono border"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--bg-primary)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [view, setView] = useState("grid");

  return (
    <section id="projects" className="py-28 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="section-line" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
                Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              Things I've Built
            </h2>
            <p className="text-sm mt-3 max-w-md leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Real projects I've designed, built, and shipped — from idea to deployed product.
            </p>
          </div>
          {/* View toggle */}
          <div className="flex gap-1 p-1 rounded-xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
            {[{ v: "grid", icon: <LayoutGrid size={15} /> }, { v: "list", icon: <List size={15} /> }].map(({ v, icon }) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="w-9 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: view === v ? "rgba(16,185,129,0.15)" : "transparent",
                  color: view === v ? "var(--accent)" : "var(--text-muted)",
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-5" : "flex flex-col gap-3"}>
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} list={view === "list"} />)}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/UmChristelle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            <Github size={15} />
            View all on GitHub
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}