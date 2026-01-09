// src/components/Contact.jsx
import React, { useState } from "react";

const YELLOW = "#F6C20E";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", agree: false });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(false);
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "", agree: false });
    }, 900);
  };

  const d = (ms) => ({ animationDelay: `${ms}ms` });

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#fffdf6] text-zinc-900
        px-6 py-16 sm:py-20 lg:py-24
      "
    >
      {/* soft vignette to match site feel */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent)]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="animate-fade-up text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900"
            style={d(40)}
          >
            Contact Us
          </h2>
          <p
            className="animate-fade-up mt-3 mx-auto max-w-2xl text-zinc-600"
            style={d(120)}
          >
            We’d love to hear from you — questions, ideas, or ways to get involved.
            Let’s create happier childhoods together.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1.5 w-24 rounded-full" style={{ backgroundColor: YELLOW }} />
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* LEFT: Form Card */}
          <div
            className="
              animate-fade-up
              rounded-3xl border border-zinc-200 bg-white
              p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)]
            "
            style={d(160)}
          >
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Name */}
              <label className="block">
                <span className="mb-1 block text-sm text-zinc-700">Your Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g., Aisha Khan"
                  className="
                    w-full rounded-xl border border-zinc-200 bg-white
                    px-4 py-3 text-zinc-900 placeholder:text-zinc-400
                    outline-none transition focus:ring-4 focus:ring-[rgba(246,194,14,.28)]
                  "
                />
              </label>

              {/* Email + Subject */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-sm text-zinc-700">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="
                      w-full rounded-xl border border-zinc-200 bg-white
                      px-4 py-3 text-zinc-900 placeholder:text-zinc-400
                      outline-none transition focus:ring-4 focus:ring-[rgba(246,194,14,.28)]
                    "
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm text-zinc-700">Subject (optional)</span>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="How can we help?"
                    className="
                      w-full rounded-xl border border-zinc-200 bg-white
                      px-4 py-3 text-zinc-900 placeholder:text-zinc-400
                      outline-none transition focus:ring-4 focus:ring-[rgba(246,194,14,.28)]
                    "
                  />
                </label>
              </div>

              {/* Message */}
              <label className="block">
                <span className="mb-1 block text-sm text-zinc-700">Your Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us how you'd like to help…"
                  className="
                    w-full resize-y rounded-xl border border-zinc-200 bg-white
                    px-4 py-3 text-zinc-900 placeholder:text-zinc-400
                    outline-none transition focus:ring-4 focus:ring-[rgba(246,194,14,.28)]
                  "
                />
              </label>

              {/* Consent */}
              <label className="flex items-start gap-3 text-sm text-zinc-700">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-black focus:ring-[rgba(246,194,14,.35)]"
                />
                <span>
                  I agree to be contacted and accept the{" "}
                  <a href="#privacy" className="underline decoration-[--yellow] underline-offset-2" style={{ ["--yellow"]: YELLOW }}>
                    privacy policy
                  </a>.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || !form.agree}
                className="
                  relative mt-2 inline-flex w-full items-center justify-center gap-2
                  rounded-xl px-6 py-3 text-center font-semibold transition
                  hover:-translate-y-0.5 focus:outline-none focus:ring-4
                  disabled:cursor-not-allowed disabled:opacity-70
                  group
                "
                style={{
                  backgroundColor: YELLOW,
                  boxShadow: "0 14px 30px rgba(246,194,14,.35)",
                }}
              >
                {/* shine on hover */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute -left-1/3 top-0 h-full w-1/3 translate-x-[-120%] opacity-0 bg-white/40 rotate-[12deg] group-hover:animate-shine" />
                </span>
                {sending ? "Sending…" : "Send Message"}
              </button>

              {/* Success note */}
              {sent && (
                <div className="animate-pop rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                  ✅ Thanks! We’ll get back to you within 24–48 hours.
                </div>
              )}
            </form>

            {/* assurances */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-600">
              <span>📨 Replies within 24–48 hrs</span>
              <span className="h-3 w-px bg-zinc-200" />
              <span>🔒 Your info stays private</span>
              <span className="h-3 w-px bg-zinc-200" />
              <span>🤝 80G receipts available</span>
            </div>
          </div>

          {/* RIGHT: Info + Decorative Image */}
          <div className="space-y-6">
            {/* Decorative image card */}
            <div
              className="animate-fade-up relative rounded-[2rem] border border-zinc-200 bg-white shadow-[0_25px_60px_rgba(0,0,0,.08)]"
              style={d(200)}
            >
              {/* soft aura */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(246,194,14,.28),transparent)] blur-2xl" />
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/mnt/data/7be44299-4fa4-4487-bec9-d96584df13ca.png"
                  alt="Community in action"
                  className="block h-64 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              {/* floating chips */}
              <div
                className="pointer-events-none absolute -right-3 top-3 rounded-xl bg-[#FFF4BE] px-3 py-2 text-xs text-zinc-900 border border-black/5 shadow animate-float"
                style={{ animationDelay: "300ms" }}
              >
                🎒 Education Drives
              </div>
              <div
                className="pointer-events-none absolute -left-3 bottom-3 rounded-xl bg-[#FFF4BE] px-3 py-2 text-xs text-zinc-900 border border-black/5 shadow animate-float"
                style={{ animationDelay: "900ms" }}
              >
                🥗 Nutrition Camps
              </div>
            </div>

            {/* Contact details card */}
            <div
              className="animate-fade-up rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.06)]"
              style={d(260)}
            >
              <h3 className="text-lg font-semibold text-zinc-900">Reach Us</h3>
              <div className="mt-3 space-y-3 text-sm text-zinc-700">
                <p>📍 HopeForAll Foundation<br />123 Charity Avenue, Greenfield Colony,<br />Hyderabad, Telangana 500089</p>
                <p>📧 info@hopeforall.org</p>
                <p>📞 +91 98765 43210</p>
                <p>🕒 Mon–Sat: 10:00 AM – 6:00 PM</p>
              </div>

              {/* Socials */}
              <div className="mt-4 flex items-center gap-3">
                {["facebook", "x", "instagram", "linkedin", "youtube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="rounded-full bg-[#FFF4BE] px-3 py-2 text-xs font-semibold text-zinc-900 ring-1 ring-black/5 hover:translate-y-[-1px] transition"
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                ))}
              </div>

              {/* mini badges */}
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["Projects", "140+"],
                  ["Lives", "2.1M+"],
                  ["Years", "40+"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-white p-3 text-sm shadow ring-1 ring-zinc-200">
                    <div className="font-bold text-zinc-900">{v}</div>
                    <div className="text-zinc-600">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom paint sweep for section separation */}
      <div className="mx-auto mt-16 h-6 max-w-7xl rounded-full bg-[#f6c20ea6] blur-[2px]" />
    </section>
  );
}
