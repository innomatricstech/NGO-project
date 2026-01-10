// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo.png";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ ADD ONLY THIS

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1220] text-white border-t border-white/10">

      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-40 left-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(79,141,245,.18),transparent)]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,92,255,.18),transparent)]" />

      {/* FULL WIDTH CONTAINER */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-16">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Trishula Trust Logo"
                className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] rounded-full object-cover ring-2 ring-blue-400"
              />
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-300">
                  TRISHULA TRUST
                </h2>
                <p className="text-base sm:text-lg text-blue-200 font-semibold">
                  Educational & Charitable
                </p>
              </div>
            </div>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-md">
              Empowering underprivileged children through education, nutrition
              and safety for a brighter future.
            </p>

            {/* BADGES */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["80G Certified", "12A Registered", "CSR-1 Approved"].map((b) => (
                <span
                  key={b}
                  className="text-base px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/15"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS (ONLY UPDATED PART) */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-blue-200">
              Quick Links
            </h3>
            <ul className="space-y-4 text-lg text-slate-300">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Causes", path: "/causes" },
                { name: "Donate", path: "/donate" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    onClick={() => window.scrollTo(0, 0)} // ✅ ONLY REQUIRED UPDATE
                    className="hover:text-yellow-400 transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-blue-200 flex items-center gap-2">
              <MapPin size={22} /> Our Location
            </h3>

            <p className="text-lg text-slate-300 mb-5 leading-relaxed">
              Trishula Trust <br />
              Hyderabad, Telangana – 500089 <br />
              India
            </p>

            <div className="overflow-hidden rounded-xl border border-white/15 shadow-lg">
              <iframe
                title="Trishula Trust Location"
                src="https://www.google.com/maps?q=Hyderabad+Telangana+500089&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold mb-5 text-blue-200">
              Contact Us
            </h3>

            <ul className="space-y-4 text-lg text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={20} /> +91 74836 64359
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} /> trishulatrust@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Globe size={20} /> www.trishulatrust.org
              </li>
            </ul>

            <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/15">
              <p className="font-bold text-xl text-blue-100">
                🧾 80G Tax Benefit
              </p>
              <p className="text-base mt-2 text-slate-300">
                Donations are eligible for tax exemption under Section 80G.
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 h-1.5 w-36 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-base text-slate-400">
          <p>© {new Date().getFullYear()} Trishula Trust. All rights reserved.</p>

          <span className="px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/15">
            Powered by Innometrics Tech
          </span>
        </div>

      </div>
    </footer>
  );
}
