import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function About() {
  const timeline = [
    { year: "2024", role: "Web Development Intern", org: "eShuri Ltd", type: "work", bullets: ["Gained hands-on experience in frontend and backend development", "Used HTML, Tailwind CSS, JavaScript, PHP, and MySQL"] },
    { year: "2023", role: "AI for Software Engineering", org: "Power Learn Project (PLP)", type: "edu", bullets: ["Completed Python, databases, software & web development coursework", "Specialized in AI techniques applied to real-world solutions"] },
    { year: "2022", role: "BSc Information Systems", org: "University of Rwanda", type: "edu", bullets: ["Expected graduation 2026 — Nyarugenge Campus", "Studying web development, databases, programming & AI"] },
  ];

  return (
    <section id="about" className="py-28 px-6" style={{ background: "#060c14" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1.5px]" style={{ background: "linear-gradient(90deg,#10b981,#8b5cf6)" }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-emerald-400">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100">My Story</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="reveal">
            {[
              "I'm Christella Umutoni — a motivated Information Systems student at the University of Rwanda, Kigali, with hands-on experience in web development, databases, programming, and AI.",
              "My journey started with an academic internship at eShuri Ltd where I built real frontend and backend features, followed by the Power Learn Project's AI for Software Engineering track where I deepened my Python and AI skills.",
              "I'm a quick learner and reliable team player with strong problem-solving skills. I'm actively looking for opportunities where I can grow, contribute, and build impactful digital products.",
            ].map((p, i) => (
              <p key={i} className="text-slate-400 text-[15px] leading-relaxed mb-5">{p}</p>
            ))}

            {/* Certifications */}
            <div className="mt-8 p-5 rounded-2xl border border-[#1e2d3d]" style={{ background: "rgba(10,22,40,0.5)" }}>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">Certifications</p>
              {[
                { icon: "🤖", name: "AI Fundamentals", org: "Udacity" },
                { icon: "💡", name: "AI for Software Engineering", org: "Power Learn Project" },
                { icon: "📊", name: "Data Science", org: "Digital Talent Program – IHS" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-3 mb-3 last:mb-0">
                  <span className="text-lg">{c.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-300">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 flex-wrap mt-8">
              {[
                { icon: <FaGithub />, label: "GitHub", href: "https://github.com/UmChristelle" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/umutoni-christella-259961241/" },
                { icon: <FaEnvelope />, label: "Email", href: "mailto:umutonichristella17@gmail.com" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#1e2d3d] text-slate-400 text-xs font-semibold font-mono transition-all duration-200 hover:border-emerald-500/40 hover:text-emerald-400">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="reveal relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(#10b981aa, #8b5cf666, transparent)" }} />
            <div className="flex flex-col gap-10">
              {timeline.map((t, i) => (
                <div key={i} className="pl-10 relative">
                  <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-bold font-mono"
                    style={{ background: "#060c14", border: `1.5px solid ${t.type === "edu" ? "#8b5cf6" : "#10b981"}`, color: t.type === "edu" ? "#8b5cf6" : "#10b981" }}>
                    {t.year.slice(2)}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-slate-200">{t.role}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                      style={{ color: t.type === "edu" ? "#8b5cf6" : "#10b981", background: t.type === "edu" ? "rgba(139,92,246,0.08)" : "rgba(16,185,129,0.08)", border: `1px solid ${t.type === "edu" ? "rgba(139,92,246,0.25)" : "rgba(16,185,129,0.25)"}` }}>
                      {t.org}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {t.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-[13px] text-slate-400 leading-relaxed">
                        <span className="text-emerald-400 mt-0.5 shrink-0">›</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-[#1e2d3d]">
          {[
            { n: "5+", l: "Projects Built", e: "🚀" },
            { n: "2", l: "Years Learning", e: "📚" },
            { n: "3", l: "Certifications", e: "🎓" },
            { n: "4+", l: "Technologies", e: "⚡" },
          ].map((m, i) => (
            <div key={m.l} className="py-8 px-4 text-center" style={{ background: "rgba(10,22,40,0.5)", borderRight: i < 3 ? "1px solid #1e2d3d" : "none" }}>
              <div className="text-2xl mb-2">{m.e}</div>
              <div className="text-3xl font-black shimmer-text leading-none">{m.n}</div>
              <div className="text-xs text-slate-500 mt-2 tracking-wide">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}