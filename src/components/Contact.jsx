import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Phone, Send, CheckCircle, RotateCcw } from "lucide-react";

const contactLinks = [
  { icon: <Mail     size={16} />, label: "Email",    val: "umutonichristella17@gmail.com",   href: "mailto:umutonichristella17@gmail.com" },
  { icon: <MapPin   size={16} />, label: "Location", val: "Kigali, Rwanda (Remote OK)",       href: "#" },
  { icon: <Github   size={16} />, label: "GitHub",   val: "github.com/UmChristelle",          href: "https://github.com/UmChristelle" },
  { icon: <Linkedin size={16} />, label: "LinkedIn", val: "umutoni-christella",               href: "https://www.linkedin.com/in/umutoni-christella-259961241/" },
  { icon: <Phone    size={16} />, label: "Phone",    val: "+250 785 313 081",                 href: "tel:+250785313081" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const fieldStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "14px",
    border: "1px solid var(--border)",
    background: "var(--bg-input)",
    color: "var(--text-primary)",
    fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",
    outline: "none",
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="section-line" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            Let's Connect
          </h2>
          <p className="text-sm mt-3 max-w-md leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I'm actively looking for my first full-time role. If you have an opportunity,
            a project, or just want to chat — I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-14">

          {/* ── Contact info ── */}
          <div className="reveal flex flex-col gap-4">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.35)";
                  e.currentTarget.style.transform   = "translateX(6px)";
                  e.currentTarget.style.boxShadow   = "0 4px 20px rgba(16,185,129,0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform   = "translateX(0)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(16,185,129,0.08)", color: "var(--accent)" }}
                >
                  {c.icon}
                </span>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
                    style={{ color: "var(--text-muted)" }}>
                    {c.label}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {c.val}
                  </div>
                </div>
              </a>
            ))}

            {/* Available badge */}
            <div
              className="p-4 rounded-2xl border mt-2"
              style={{ background: "rgba(16,185,129,0.05)", borderColor: "rgba(16,185,129,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full block"
                  style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
                <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>Available Now</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Open to full-time roles, internships, and freelance projects.
                Based in Kigali — open to remote work worldwide.
              </p>
            </div>
          </div>

          {/* ── Form ── */}
          <div
            className="reveal p-8 rounded-2xl border"
            style={{ background: "var(--bg-card-solid)", borderColor: "var(--border)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-16">
                <CheckCircle size={52} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
                <h3 className="text-xl font-black" style={{ color: "var(--text-primary)" }}>
                  Message sent!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out! I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", msg: "" }); }}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold border transition-all hover:opacity-90"
                  style={{ color: "var(--accent)", borderColor: "rgba(16,185,129,0.3)", background: "rgba(16,185,129,0.08)" }}
                >
                  <RotateCcw size={14} /> Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="flex flex-col gap-5"
              >
                <div>
                  <h3 className="text-lg font-black" style={{ color: "var(--text-primary)" }}>Send a message</h3>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>I read every message personally.</p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}>Your Name</label>
                  <input
                    required type="text" placeholder="Jane Smith"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={fieldStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.12)"; }}
                    onBlur={e  => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}>Email Address</label>
                  <input
                    required type="email" placeholder="jane@company.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={fieldStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.12)"; }}
                    onBlur={e  => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea
                    required rows={4}
                    placeholder="Hi Christella, I'd love to chat about an opportunity..."
                    value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    style={{ ...fieldStyle, resize: "none" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.12)"; }}
                    onBlur={e  => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}