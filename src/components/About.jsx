import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, Shield, Users, Award, Sparkles, Globe, 
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, Star, Quote, 
  Zap, Rocket, HandHelping, Anchor, Scale, Landmark, History
} from "lucide-react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2880" 
            className="w-full h-full object-cover" 
            alt="Happy Children" 
          />
          {/* Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <span className="text-amber-400 font-bold tracking-[0.6em] uppercase text-sm mb-6 block">Legacy Since 1979</span>
          <h1 className="text-[10vw] md:text-[8vw] font-serif leading-none text-white tracking-tighter">
            ARCHITECTS OF <br /> <span className="italic text-amber-400">HOPE.</span>
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mt-8 font-light max-w-2xl mx-auto bg-black/20 backdrop-blur-sm p-4 rounded-xl">
            Empowering every child with the dignity they deserve.
          </p>
        </div>
      </section>

      {/* 2. OUR ROOTS - (IMAGE: Child Smiling) */}
      <section className="py-32 px-6 bg-[#fcfcfc]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <History size={18}/> 01. Our Roots
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-8 italic leading-tight text-slate-900">The Humble Spark.</h3>
            <div className="space-y-6 text-xl text-slate-700 font-light leading-relaxed">
              <p>In 1979, Trishula Trust was born from a radical belief: that poverty is a circumstance, not a destiny. We started by helping children on the streets of Bangalore find a safe place to learn.</p>
              <p>Over four decades, we have focused solely on the child—ensuring that every boy and girl under our care receives the same elite education and healthcare as any privileged child in the country.</p>
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200" className="rounded-[40px] shadow-2xl h-[550px] w-full object-cover border-8 border-white" alt="Child in school" />
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (IMAGE: Kids Playing) */}
      <section className="py-24 bg-slate-900 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=2000" className="w-full h-full object-cover" alt="Background children" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-md p-16 rounded-[50px] shadow-xl reveal opacity-0 translate-y-10 transition-all duration-700">
              <Zap className="text-amber-600 mb-8" size={48} />
              <h4 className="text-4xl font-serif mb-6 text-slate-900">Our Mission</h4>
              <p className="text-xl text-slate-700 leading-relaxed italic">"To provide world-class education and healthcare to underprivileged children, creating a path for them to lead tomorrow's world."</p>
            </div>
            <div className="bg-amber-500/95 backdrop-blur-md p-16 rounded-[50px] shadow-xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <Rocket className="text-slate-900 mb-8" size={48} />
              <h4 className="text-4xl font-serif mb-6 text-slate-900">Our Vision</h4>
              <p className="text-xl text-slate-900 leading-relaxed italic font-medium">"A nation where every child—regardless of their background—has the power to dream, innovate, and succeed."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 45-YEAR EVOLUTION - (3 CHILD IMAGES) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-6xl font-serif text-center mb-24 reveal opacity-0 translate-y-10 transition-all text-slate-900">The Evolution.</h2>
          <div className="space-y-20 relative before:absolute before:left-0 md:before:left-1/2 before:w-[1px] before:h-full before:bg-slate-200">
            {[
              { year: "1979", title: "Genesis", img: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=800", desc: "Started with a vision to shield children from the hardships of the street." },
              { year: "2005", title: "Digital Empowerment", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", desc: "Introduced technology and smart-learning for rural children." },
              { year: "2024", title: "Global Impact", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800", desc: "Recognized as a leading force in child welfare and holistic development." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 reveal opacity-0 translate-y-10 transition-all duration-1000 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                   <img src={item.img} className="rounded-3xl shadow-lg h-72 w-full object-cover" alt="Evolution child" />
                </div>
                <div className="w-full md:w-1/2 bg-white p-10 border border-slate-100 rounded-[40px] shadow-sm">
                   <span className="text-amber-600 font-bold text-4xl font-serif mb-2 block">{item.year}</span>
                   <h5 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h5>
                   <p className="text-slate-600 text-lg font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (Cards) */}
      <section className="py-32 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Shield size={40}/>, title: "Integrity", desc: "We are accountable to every child and every donor with absolute transparency." },
              { icon: <Globe size={40}/>, title: "Universalism", desc: "Love and care for children across all religions, castes, and boundaries." },
              { icon: <Scale size={40}/>, title: "Equity", desc: "Ensuring high-quality resources reach the most remote child." }
            ].map((val, i) => (
              <div key={i} className="p-12 bg-white rounded-[40px] shadow-sm border border-slate-100 hover:border-amber-500 transition-all duration-500 group">
                <div className="mb-8 text-amber-600">{val.icon}</div>
                <h4 className="text-3xl font-serif mb-6 text-slate-900">{val.title}</h4>
                <p className="text-slate-500 text-lg leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP (Text Focused) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24 reveal opacity-0 translate-y-10 transition-all">
            <h2 className="text-6xl font-serif mb-6 text-slate-900">Our Leadership.</h2>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">The hearts behind the mission.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-20">
             <div className="text-center p-12 bg-slate-50 rounded-[50px] reveal opacity-0 translate-y-10 transition-all duration-1000">
                <div className="w-40 h-40 bg-amber-100 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-amber-600">BR</div>
                <h4 className="text-3xl font-serif text-slate-900">B C Rajashekar</h4>
                <p className="text-amber-600 font-bold mt-2 uppercase tracking-widest text-sm">President & Founder</p>
                <p className="mt-8 text-xl text-slate-600 font-light italic">"A child’s smile is the greatest reward for forty years of service."</p>
             </div>
             <div className="text-center p-12 bg-slate-50 rounded-[50px] reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                <div className="w-40 h-40 bg-amber-100 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-amber-600">SR</div>
                <h4 className="text-3xl font-serif text-slate-900">C Shubha Rajashekar</h4>
                <p className="text-amber-600 font-bold mt-2 uppercase tracking-widest text-sm">Secretary</p>
                <p className="mt-8 text-xl text-slate-600 font-light italic">"Every child we educate is a seed for a better, brighter India."</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. IMPACT GALLERY (5 CHILDREN IMAGES) */}
      <section className="py-24 bg-white px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800" className="h-[400px] w-full object-cover rounded-3xl" alt="Child 1" />
           <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" className="h-[400px] w-full object-cover rounded-3xl mt-12" alt="Child 2" />
           <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800" className="h-[400px] w-full object-cover rounded-3xl" alt="Child 3" />
           <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" className="h-[400px] w-full object-cover rounded-3xl mt-12" alt="Child 4" />
           <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800" className="h-[400px] w-full object-cover rounded-3xl" alt="Child 5" />
        </div>
      </section>

      {/* 8. PHILOSOPHY - (IMAGE: Child in Classroom) */}
      <section className="py-40 px-6 bg-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
            <Quote size={300} />
        </div>
        <div className="max-w-[900px] mx-auto text-center reveal opacity-0 translate-y-10 transition-all duration-1000 relative z-10">
           <h3 className="text-5xl md:text-7xl font-serif mb-12 italic leading-tight text-slate-900">A Promise Written <br/>in Action.</h3>
           <p className="text-2xl md:text-3xl text-slate-700 font-light leading-relaxed">
             Trishula Trust exists because every child’s potential is a sacred responsibility. We don't just provide help; we provide hope, dignity, and a future.
           </p>
        </div>
      </section>

      {/* 9. HEADQUARTERS (IMAGE: Office/Entrance) */}
      <section className="py-32 bg-white px-6 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="reveal opacity-0 translate-y-10 transition-all">
              <h2 className="text-6xl font-serif mb-12 text-slate-900">Visit Our <br/>Foundation.</h2>
              <div className="space-y-10">
                 <div className="flex gap-6 items-start">
                    <MapPin className="text-amber-600 mt-1" size={28} />
                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Location</p>
                        <p className="text-2xl font-light text-slate-800">#215, Cubbonpet Main Road, <br/>Bangalore-02, Karnataka, India</p>
                    </div>
                 </div>
                 <div className="flex gap-12">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Hotline</p>
                        <p className="text-2xl font-bold text-slate-900">+91 74836 64359</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Email</p>
                        <p className="text-2xl font-bold text-slate-900 lowercase">trishulatrust@gmail.com</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="reveal opacity-0 translate-y-10 transition-all delay-300">
                {/* Image of Child with book for the HQ section */}
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200" className="rounded-[60px] shadow-2xl h-[450px] w-full object-cover" alt="Support Office" />
           </div>
        </div>
      </section>

      {/* 10. FINAL CTA - (IMAGE: Group of Happy Kids) */}
      <section className="py-48 bg-slate-900 text-white text-center px-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000" className="w-full h-full object-cover" alt="Happy group" />
         </div>
         <div className="relative z-10">
            <h2 className="text-[10vw] md:text-[6vw] font-serif mb-12 leading-none">Be Part of Their <br/><span className="italic text-amber-400">Success Story.</span></h2>
            <Link to="/donate" className="bg-amber-500 text-black px-16 py-8 rounded-full text-2xl font-bold hover:scale-110 transition-all inline-flex items-center gap-4 shadow-2xl">
               DONATE NOW <ArrowRight />
            </Link>
         </div>
      </section>

      <footer className="py-12 text-center bg-white border-t border-slate-100">
         <p className="text-slate-400 text-xs tracking-[1em] uppercase">Trishula Trust Foundation • Since 1979</p>
      </footer>
    </div>
  );
}