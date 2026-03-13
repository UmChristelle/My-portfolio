import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "#080f1a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1.5px]" style={{ background: "linear-gradient(90deg,#10b981,#8b5cf6)" }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-emerald-400">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100">Let's Connect</h2>
          <p className="text-slate-400 text-sm mt-3 max-w-md leading-relaxed">
            I'm actively looking for my first full-time role. If you have an opportunity, a project, or just want to chat — I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-14">
          {/* Info */}
          <div className="reveal flex flex-col gap-4">
            {[
              {
  icon: <FaEnvelope />,
  label: "Email",
  value: "umutonichristella17@gmail.com"
},
{
  icon: <FaMapMarkerAlt />,
  label: "Location",
  value: "Kigali, Rwanda (Remote OK)"
},
{
  icon: <FaGithub />,
  label: "GitHub",
  value: "github.com/UmChristelle"
},
{
  icon: <FaLinkedin />,
  label: "LinkedIn",
  value: "umutoni-christella"
},
   {
    icon: <FaPhone />,
    label: "Phone",
    value: "+250 785 313 081"
   }

            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#1e2d3d] transition-all duration-300 group"
                style={{ background: "rgba(10,22,40,0.5)" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"; e.currentTarget.style.transform = "translateX(6px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "#1e2d3d"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(16,185,129,0.08)" }}>{c.icon}</span>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">{c.label}</div>
                  <div className="text-sm font-semibold text-slate-200">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Available badge */}
            <div className="p-4 rounded-2xl border mt-2" style={{ background: "rgba(16,185,129,0.05)", borderColor: "rgba(16,185,129,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 block" style={{ boxShadow: "0 0 8px #10b981" }} />
                <span className="text-xs font-bold text-emerald-400">Available Now</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Open to full-time roles, internships, and freelance projects. Based in Kigali — open to remote work worldwide.</p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal p-8 rounded-2xl border border-[#1e2d3d]" style={{ background: "#0a1628" }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-16">
                <div className="text-5xl">🎉</div>
                <h3 className="text-xl font-black text-slate-100">Message sent!</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Thank you for reaching out! I'll reply within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", msg: "" }); }}
                  className="mt-2 px-6 py-2.5 rounded-xl text-sm font-bold text-emerald-400 border border-emerald-500/30 transition-all hover:bg-emerald-500/10"
                  style={{ background: "rgba(16,185,129,0.08)" }}>
                  Send another ↺
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-lg font-black text-slate-100">Send a message</h3>
                  <p className="text-xs text-slate-500 mt-1">I read every message personally.</p>
                </div>
                {[
                  { k: "name", l: "Your Name", t: "text", p: "Jane Smith" },
                  { k: "email", l: "Email Address", t: "email", p: "jane@company.com" },
                ].map(f => (
                  <div key={f.k}>
                    <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-2">{f.l}</label>
                    <input required type={f.t} placeholder={f.p} value={form[f.k]}
                      onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#1e2d3d] text-slate-200 placeholder-slate-600 transition-all duration-200"
                      style={{ background: "rgba(6,12,20,0.8)", fontFamily: "inherit" }} />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-2">Message</label>
                  <textarea required rows={4} placeholder="Hi Christella, I'd love to chat about an opportunity..."
                    value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#1e2d3d] text-slate-200 placeholder-slate-600 transition-all duration-200 resize-none"
                    style={{ background: "rgba(6,12,20,0.8)", fontFamily: "inherit" }} />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}