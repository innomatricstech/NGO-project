// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  Heart, ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Quote, Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a] font-sans selection:bg-amber-500">
      
      {/* --- 1. HERO: CINEMATIC 5-IMAGE MESH --- */}
      <section className="relative h-[110vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Layered Images */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-5 opacity-40">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000" className="h-full w-full object-cover border-r border-white/5" alt="H1" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000" className="h-full w-full object-cover border-r border-white/5 hidden md:block" alt="H2" />
          <img src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1000" className="h-full w-full object-cover border-r border-white/5" alt="H3" />
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000" className="h-full w-full object-cover border-r border-white/5 hidden md:block" alt="H4" />
          <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000" className="h-full w-full object-cover" alt="H5" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-transparent to-black/80"></div>

        <div className="relative z-10 w-full max-w-[1400px] px-6">
          <h1 className="text-[12vw] md:text-[9vw] font-serif leading-[0.8] tracking-tighter text-white">
            THE <span className="text-amber-500 italic">FUTURE</span> <br /> OF INDIA.
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/80 mt-10 max-w-2xl leading-relaxed">
            Protecting the childhood of millions through elite systems of care.
          </p>
          <Link to="/donate" className="mt-12 inline-flex items-center gap-4 bg-amber-500 text-black px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all">
            ACT NOW <ArrowRight />
          </Link>
        </div>
      </section>

      {/* --- 2. ABOUT: THE STORY TELLER (5 IMAGES) --- */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" className="rounded-2xl h-60 w-full object-cover mt-20 shadow-xl" alt="A1" />
            <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800" className="rounded-2xl h-80 w-full object-cover shadow-xl" alt="A2" />
            <img src="https://images.unsplash.com/photo-1531206715517-5ca5c7f50ebb?q=80&w=800" className="rounded-2xl h-80 w-full object-cover -mt-20 shadow-xl" alt="A3" />
            <img src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=800" className="rounded-2xl h-60 w-full object-cover shadow-xl" alt="A4" />
            <div className="col-span-2 relative">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200" className="rounded-3xl h-64 w-full object-cover shadow-2xl" alt="A5" />
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-amber-600 mb-6">4 Decades of Excellence</h2>
            <h3 className="text-6xl md:text-8xl font-serif mb-8 leading-none">Our Legacy.</h3>
            <p className="text-2xl text-slate-600 font-light leading-relaxed mb-10">
              Trishula Trust provides premium education and medical safety nets for children across 19 Indian states. We transform lives with surgical precision.
            </p>
            <Link to="/about" className="text-2xl font-bold border-b-4 border-amber-500 pb-2 w-fit hover:text-amber-600 transition-all">VIEW STORY</Link>
          </div>
        </div>
      </section>

      {/* --- 3. CAUSES: MISSION GRID (5 IMAGES) --- */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-5xl md:text-7xl font-serif mb-20 text-center">Critical Missions</h3>
          <div className="grid md:grid-cols-5 gap-4 h-[600px]">
            {[
              { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800", title: "Education" },
              { img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800", title: "Health" },
              { img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800", title: "Safety" },
              { img: "https://images.unsplash.com/photo-1511949863663-92c5c06824c2?q=80&w=800", title: "Nutrition" },
              { img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800", title: "Voices" }
            ].map((m, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl cursor-pointer">
                <img src={m.img} className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xl font-serif">{m.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/causes" className="text-amber-500 uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2">VIEW ALL INITIATIVES <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* --- 4. DONATE: PATRONAGE (5 IMAGES) --- */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-10">
              <h2 className="text-7xl font-serif">Impact is <br/><span className="italic text-amber-600">The Ultimate Luxury.</span></h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">Your patronage funds classrooms, medical bills, and safe-houses. Join us in making a difference.</p>
              <div className="flex gap-4">
                 {[1500, 3000, 5000].map(amt => (
                   <Link key={amt} to="/donate" className="flex-1 text-center py-6 border border-slate-200 rounded-2xl hover:border-amber-500 hover:bg-amber-50 transition-all">
                     <p className="text-xs uppercase tracking-widest text-slate-400">INR</p>
                     <p className="text-2xl font-bold">₹{amt}</p>
                   </Link>
                 ))}
              </div>
              <Link to="/donate" className="block text-center bg-slate-900 text-white py-6 rounded-2xl font-bold text-xl hover:bg-amber-600 transition-all shadow-xl">DONATE NOW</Link>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px]">
                {/* 5 Stacked Images for Patronage */}
                <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600" className="absolute top-0 right-0 w-64 h-80 object-cover rounded-3xl shadow-2xl z-10 hover:scale-105 transition-all" alt="D1" />
                <img src="https://images.unsplash.com/photo-1505373633572-2d069c3d4220?q=80&w=600" className="absolute top-20 right-40 w-64 h-80 object-cover rounded-3xl shadow-2xl z-20 hover:scale-105 transition-all hidden md:block" alt="D2" />
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600" className="absolute bottom-0 right-20 w-64 h-80 object-cover rounded-3xl shadow-2xl z-30 hover:scale-105 transition-all" alt="D3" />
                <img src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600" className="absolute top-10 left-0 w-48 h-64 object-cover rounded-3xl shadow-2xl z-0 opacity-40" alt="D4" />
                <img src="https://images.unsplash.com/photo-1454165833267-028ec3600938?q=80&w=600" className="absolute bottom-10 left-20 w-48 h-64 object-cover rounded-3xl shadow-2xl z-0 opacity-40 hidden md:block" alt="D5" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CONTACT: CONNECT (5 VISUALS) --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-6xl font-serif mb-12">Connect.</h3>
                <div className="grid grid-cols-2 gap-4 mb-12">
                   <img src="https://images.unsplash.com/photo-1516245556508-7a60d4ff0f39?q=80&w=600" className="h-40 w-full object-cover rounded-2xl opacity-50" alt="C1" />
                   <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600" className="h-40 w-full object-cover rounded-2xl opacity-50" alt="C2" />
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 border border-white/10 rounded-3xl hover:bg-white/5 transition-all cursor-pointer">
                        <Phone className="text-amber-500" /> <div><p className="text-xs uppercase tracking-widest opacity-40 text-white">Call</p><p className="text-xl">+91 74836 64359</p></div>
                    </div>
                    <div className="flex items-center gap-6 p-6 border border-white/10 rounded-3xl hover:bg-white/5 transition-all cursor-pointer">
                        <Mail className="text-amber-500" /> <div><p className="text-xs uppercase tracking-widest opacity-40 text-white">Email</p><p className="text-xl">trishulatrust@gmail.com</p></div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-black p-10 md:p-16 rounded-[40px]">
                <h4 className="text-3xl font-serif mb-8 text-center uppercase tracking-widest">Message Us</h4>
                <div className="space-y-4">
                   <input type="text" placeholder="FULL NAME" className="w-full border-b border-slate-200 py-4 focus:outline-none focus:border-amber-500 placeholder:text-slate-300" />
                   <input type="email" placeholder="EMAIL ADDRESS" className="w-full border-b border-slate-200 py-4 focus:outline-none focus:border-amber-500 placeholder:text-slate-300" />
                   <textarea placeholder="YOUR MESSAGE" className="w-full border-b border-slate-200 py-4 h-32 focus:outline-none focus:border-amber-500 placeholder:text-slate-300 resize-none"></textarea>
                   <button className="w-full py-6 bg-black text-white font-bold rounded-full mt-6 hover:bg-amber-600 transition-all">DISPATCH MESSAGE</button>
                   <div className="text-center pt-6">
                      <Link to="/contact" className="text-xs font-bold border-b border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">VIEW FULL CONTACT DETAILS</Link>
                   </div>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center bg-white border-t border-slate-100">
         <Star className="mx-auto mb-6 text-amber-500" fill="currentColor" />
         <p className="text-slate-400 text-xs tracking-[1em] uppercase">Trishula Trust • Foundation of Hope</p>
      </footer>
    </div>
  );
}