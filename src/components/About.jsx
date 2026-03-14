import { Github, Linkedin, Mail, Award, BrainCircuit, BarChart2, Rocket, BookOpen, GraduationCap, Zap } from "lucide-react";

const timeline = [
  {
    year: "2025",
    role: "Advanced Frontend Development",
    org: "SheCanCODE Bootcamp – Igire Rwanda",
    type: "edu",
    bullets: [
      "Intensive training in modern frontend technologies (Ongoing)",
      "Building responsive web applications using React, JavaScript, and Tailwind CSS",
      "Strengthening skills in Git, UI/UX principles, and collaborative development",
    ],
  },
  {
    year: "2024",
    role: "Web Development Intern",
    org: "eShuri Ltd",
    type: "work",
    bullets: [
      "Gained hands-on experience in frontend and backend development",
      "Used HTML, Tailwind CSS, JavaScript, PHP, and MySQL",
    ],
  },
  {
    year: "2023",
    role: "AI for Software Engineering",
    org: "Power Learn Project (PLP)",
    type: "edu",
    bullets: [
      "Completed Python, databases, software & web development coursework",
      "Specialized in AI techniques applied to real-world solutions",
    ],
  },
  {
    year: "2022",
    role: "BSc Information Systems",
    org: "University of Rwanda",
    type: "edu",
    bullets: [
      "Expected graduation 2026 — Nyarugenge Campus",
      "Studying web development, databases, programming & AI",
    ],
  },
];

const certifications = [
  { icon: <BrainCircuit size={16} />, name: "AI Fundamentals",             org: "Udacity"                      },
  { icon: <Award        size={16} />, name: "AI for Software Engineering", org: "Power Learn Project"          },
  { icon: <BarChart2    size={16} />, name: "Data Science",                org: "Digital Talent Program – IHS" },
];

const socials = [
  { icon: <Github   size={14} />, label: "GitHub",   href: "https://github.com/UmChristelle" },
  { icon: <Linkedin size={14} />, label: "LinkedIn", href: "https://www.linkedin.com/in/umutoni-christella-259961241/" },
  { icon: <Mail     size={14} />, label: "Email",    href: "mailto:umutonichristella17@gmail.com" },
];

const metrics = [
  { n: "5+", l: "Projects Built", icon: <Rocket        size={26} strokeWidth={1.5} /> },
  { n: "2",  l: "Years Learning", icon: <BookOpen      size={26} strokeWidth={1.5} /> },
  { n: "3",  l: "Certifications", icon: <GraduationCap size={26} strokeWidth={1.5} /> },
  { n: "4+", l: "Technologies",   icon: <Zap           size={26} strokeWidth={1.5} /> },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="section-line" />
            <span
              className="text-xs font-bold tracking-[0.22em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              About Me
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            My Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Bio ── */}
          <div className="reveal">
            {[
              "I'm Christella Umutoni, a motivated Information Systems student at the University of Rwanda, Kigali, with hands-on experience in web development, databases, programming, and AI.",
              "My journey started with an academic internship at eShuri Ltd where I built real frontend and backend features, followed by the Power Learn Project's AI for Software Engineering track where I deepened my Python and AI skills.",
              "I'm currently enrolled in the SheCanCODE Bootcamp by Igire Rwanda, deepening my React and modern frontend skills. I'm a quick learner and reliable team player actively looking for opportunities to grow and build impactful digital products.",
            ].map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {p}
              </p>
            ))}

            {/* Certifications card */}
            <div
              className="mt-8 p-5 rounded-2xl border"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Certifications
              </p>
              {certifications.map((c) => (
                <div key={c.name} className="flex items-center gap-3 mb-3 last:mb-0">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(16,185,129,0.08)", color: "var(--accent)" }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {c.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {c.org}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold font-mono transition-all duration-200"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Timeline ── */}
          <div className="reveal relative">
            <div
              className="absolute left-[11px] top-2 bottom-2 w-px"
              style={{
                background: "linear-gradient(rgba(16,185,129,0.6), rgba(139,92,246,0.4), transparent)",
              }}
            />
            <div className="flex flex-col gap-10">
              {timeline.map((t, i) => (
                <div key={i} className="pl-10 relative">
                  {/* Year dot */}
                  <div
                    className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-bold font-mono"
                    style={{
                      background: "var(--bg-primary)",
                      border: `1.5px solid ${t.type === "work" ? "var(--accent)" : "#8b5cf6"}`,
                      color: t.type === "work" ? "var(--accent)" : "#8b5cf6",
                    }}
                  >
                    {t.year.slice(2)}
                  </div>

                  {/* Role + org badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.role}
                    </span>

                    {/* Ongoing badge — only for SheCanCODE */}
                    {i === 0 && (
                      <span
                        className="text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase"
                        style={{
                          color: "var(--accent)",
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.3)",
                        }}
                      >
                        Ongoing
                      </span>
                    )}

                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                      style={{
                        color: t.type === "work" ? "var(--accent)" : "#8b5cf6",
                        background: t.type === "work" ? "rgba(16,185,129,0.08)" : "rgba(139,92,246,0.08)",
                        border: `1px solid ${t.type === "work" ? "rgba(16,185,129,0.25)" : "rgba(139,92,246,0.25)"}`,
                      }}
                    >
                      {t.org}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5">
                    {t.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-[13px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Metrics row ── */}
        <div
          className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border)" }}
        >
          {metrics.map((m, i) => (
            <div
              key={m.l}
              className="py-10 px-4 flex flex-col items-center gap-4"
              style={{
                background: "var(--bg-card)",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  color: "var(--accent)",
                }}
              >
                {m.icon}
              </div>
              <div className="text-center">
                <div className="text-3xl font-black shimmer-text leading-none">{m.n}</div>
                <div
                  className="text-xs mt-2 tracking-wide"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.l}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}