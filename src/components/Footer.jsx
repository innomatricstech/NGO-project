// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#0b1220] text-white
        px-6 py-16 sm:py-20
        border-t border-white/10
      "
    >
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-40 left-0 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(79,141,245,.18),transparent)] animate-glow" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,92,255,.18),transparent)] animate-glow" style={{ animationDelay: "900ms" }} />

      <div className="mx-auto max-w-7xl">
        {/* top row */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/mnt/data/55e97727-134a-43f4-9027-2bacfd8977e2.png"
                alt="HopeForAll Logo"
                className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/20"
              />
              <div>
                <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  HopeForAll
                </h2>
                <p className="text-[11px] text-white/60">Since 2010</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-xs">
              We empower underprivileged children with education, nutrition,
              safety and the voice to shape their future.
            </p>

            {/* trust badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ["80G/12A", "Programs-First"],
                ["CSR-1", "Compliant"],
                ["Audited", "Annually"],
              ].map(([a, b]) => (
                <span
                  key={a}
                  className="rounded-full bg-white/8 px-3 py-1 text-[11px] text-white/90 ring-1 ring-white/15"
                >
                  <span className="font-semibold">{a}</span> • {b}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#home" className="hover:text-[#F6C20E] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#F6C20E] transition">About Us</a></li>
              <li><a href="#causes" className="hover:text-[#F6C20E] transition">What We Do</a></li>
              <li><a href="#donate" className="hover:text-[#F6C20E] transition">Donate</a></li>
              <li><a href="#contact" className="hover:text-[#F6C20E] transition">Contact</a></li>
            </ul>

            {/* Newsletter */}
            <div className="mt-5">
              <p className="text-sm text-slate-300 mb-2">Subscribe for updates</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/5 backdrop-blur"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none"
                />
                <button
                  className="px-4 text-sm font-semibold text-black hover:-translate-y-0.5 transition"
                  style={{ backgroundColor: "#F6C20E" }}
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Address</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              HopeForAll Foundation <br />
              123 Charity Avenue, Greenfield Colony,<br />
              Hyderabad, Telangana – 500089, India
            </p>

            <h4 className="mt-4 text-sm font-semibold text-white">Office Hours</h4>
            <p className="text-slate-300 text-sm">Mon–Sat: 10:00 AM – 6:00 PM</p>
          </div>

          {/* Contact + Certificates */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>📧 info@hopeforall.org</li>
              <li>🌐 www.hopeforall.org</li>
            </ul>

            <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <p className="font-semibold text-white">🧾 NGO 18G Certificate</p>
              <p className="text-xs mt-1 text-slate-300">
                Donations are eligible for tax benefits under Section 18G.
              </p>
              <a
                href="#certificate"
                className="inline-block mt-2 text-[#F6C20E] text-xs hover:underline"
              >
                View Certificate →
              </a>
            </div>

            {/* Socials */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {["Facebook", "X", "Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full bg-[#FFF4BE]/10 px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/15 hover:bg-[#FFF4BE]/20 transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* middle highlight bar */}
        <div className="mt-10 h-1.5 w-28 rounded-full bg-[#F6C20E] opacity-90 animate-fade-up" />

        {/* bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} HopeForAll Foundation. All rights reserved.</p>

           

          {/* payment icons (text pills as placeholders) */}
          <div className="flex flex-wrap items-center gap-2">
            {["Powered by innometrics tech"].map((p) => (
              <span
                key={p}
                className="rounded-full bg-white/8 px-2.5 py-1 text-[10px] text-white/90 ring-1 ring-white/15"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
