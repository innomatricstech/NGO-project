import React, { useEffect } from "react";
import { 
  BookOpen, Heart, Shield, GraduationCap, Droplets, Home, 
  Sparkles, Globe, Users, Lightbulb, Music, TreePine, Trophy, ArrowRight,
  CheckCircle2, AlertCircle, Target, Zap
} from "lucide-react";

const SECTIONS = [
  {
    id: 1,
    title: "Revolutionizing Rural Education via STEM",
    tagline: "Bridging the Digital Divide",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    color: "bg-slate-50",
    description: "Education in rural India often suffers from outdated curriculum and lack of resources. Our STEM program introduces children to the world of Science, Technology, Engineering, and Mathematics from the age of 8. We believe that every child, regardless of their zip code, deserves to understand the technology that runs the world.",
    problem: "Over 70% of rural schools lack computer labs, leaving millions behind in the global digital economy.",
    solution: "We establish 'Smart Labs' equipped with solar-powered tablets, high-speed internet, and a curriculum focused on logic, coding, and problem-solving.",
    impact: "Created 450+ Digital Labs, training 2 Lakh+ students in basic programming and robotics.",
    icon: <BookOpen className="text-blue-600" />
  },
  {
    id: 2,
    title: "Holistic Health & Pediatric Nutrition",
    tagline: "Fighting Stunting and Malnutrition",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
    color: "bg-white",
    description: "Malnutrition is a silent emergency. Our health initiative doesn't just give food; it provides 'Fortified Life-Kits' designed by pediatricians. We monitor the Body Mass Index (BMI) of every child in our care monthly to ensure they are meeting growth milestones.",
    problem: "Nearly 35% of children in India suffer from stunting due to chronic undernutrition in their early years.",
    solution: "A decentralized nutrition model where we provide nutrient-dense meals and educate mothers on balanced diets and hygiene.",
    impact: "Successfully reduced stunting rates by 22% in our 50 adopted villages.",
    icon: <Heart className="text-red-600" />
  },
  {
    id: 3,
    title: "The Child Protection & Legal Advocacy Unit",
    tagline: "Safety as a Fundamental Right",
    image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1200",
    color: "bg-slate-50",
    description: "Child labor and trafficking are complex issues rooted in poverty. Our Protection Unit works on the ground to identify at-risk children and intervene legally. We provide a safe haven where rescued children can heal through professional trauma-informed care.",
    problem: "Economic pressures often force children into hazardous labor, stealing their childhood and future.",
    solution: "24/7 Rapid Response Teams and 'Asha Homes' that offer psychological counseling and vocational training for older kids.",
    impact: "Legal intervention for 5,000+ cases and 100% rehabilitation rate in our shelter homes.",
    icon: <Shield className="text-purple-600" />
  },
  {
    id: 4,
    title: "Sustainable Water & School Sanitation (WASH)",
    tagline: "Clean Water for Better Learning",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200",
    color: "bg-white",
    description: "Lack of clean water and private toilets is the #1 reason girls drop out of school at puberty. Our WASH program (Water, Sanitation, and Hygiene) builds modern infrastructure and forms student-led 'Water Committees' to manage these resources sustainably.",
    problem: "Water-borne diseases cause an average loss of 25 school days per year per child in rural sectors.",
    solution: "Installing community-scale UV filtration plants and bio-toilets that require minimal maintenance.",
    impact: "Attendance rates increased by 38% following the installation of our sanitation units.",
    icon: <Droplets className="text-cyan-600" />
  },
  {
    id: 5,
    title: "Girl Child Leadership & Scholarship",
    tagline: "She Can, She Will",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
    color: "bg-slate-50",
    description: "Our mission is to create female leaders. We don't just pay fees; we provide mentorship. Girls in our program are paired with professionals from medicine, engineering, and law to help them visualize a career path beyond traditional roles.",
    problem: "Societal norms and financial constraints often prioritize male education over females in many households.",
    solution: "Full-cycle scholarships covering books, transport, and coaching for competitive exams like JEE and NEET.",
    impact: "60% of our graduates have become first-generation college students in their families.",
    icon: <GraduationCap className="text-rose-600" />
  },
  {
    id: 6,
    title: "Urban Street Child Re-Integration",
    tagline: "Dignity for Every Urban Child",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=1200",
    color: "bg-white",
    description: "The city streets are no place for a child. Our mobile education vans, 'Gyan-Rath', reach out to children living under flyovers and on railway platforms. We provide a bridge course that prepares them for enrollment in formal government schools.",
    problem: "Urban poverty creates a cycle where children fall into substance abuse or petty crimes due to neglect.",
    solution: "Day-care centers that provide education, meals, and safety while parents work as daily wage laborers.",
    impact: "Transferred 12,000+ street children into mainstream government education systems.",
    icon: <Home className="text-orange-600" />
  },
  {
    id: 7,
    title: "Arts, Culture & Emotional Well-being",
    tagline: "Nurturing the Creative Spirit",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
    color: "bg-slate-50",
    description: "Art is therapy. For children who have faced extreme hardships, painting, music, and dance provide a way to process emotions. Our cultural centers preserve local folk traditions while teaching modern creative skills.",
    problem: "Focusing only on academics neglects the emotional and creative development of vulnerable children.",
    solution: "Weekend 'Kalakendra' workshops where professional artists mentor children in various disciplines.",
    impact: "Annual 'Pratibha' festival showcasing talent to over 10,000 attendees annually.",
    icon: <Music className="text-amber-600" />
  },
  {
    id: 8,
    title: "The Green Generation: Eco-Literacy",
    tagline: "Small Hands, Big Planet",
    image: "https://images.unsplash.com/photo-154524230d-8d419f20531b?q=80&w=1200",
    color: "bg-white",
    description: "Climate change will impact these children the most. We teach them to lead the fight. Through school-based organic farming and waste management systems, kids learn that they can be solution-providers for their communities.",
    problem: "Lack of environmental awareness leads to deforestation and soil degradation in agricultural belts.",
    solution: "Implementation of 'Micro-Forests' in school backyards and teaching rain-water harvesting techniques.",
    impact: "Restored 150 acres of land through child-led plantation drives.",
    icon: <TreePine className="text-emerald-600" />
  },
  {
    id: 9,
    title: "Sports for Development (S4D)",
    tagline: "Fielding a Brighter Tomorrow",
    image: "https://images.unsplash.com/photo-1531651008558-ed1758b27ef5?q=80&w=1200",
    color: "bg-slate-50",
    description: "Sports is the greatest teacher of resilience. Our S4D program uses football and athletics to teach children about gender equality, teamwork, and health. We build high-quality courts in areas that have never seen a playground.",
    problem: "Rural youth often lack constructive outlets for their energy, leading to dropout and migration.",
    solution: "Certified coaching programs and inter-village leagues that scout for talent at the grassroots level.",
    impact: "Our students have won 50+ Gold medals in State-level junior championships.",
    icon: <Trophy className="text-indigo-600" />
  },
  {
    id: 10,
    title: "Inclusive Education for All Abilities",
    tagline: "Celebrating Every Ability",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200",
    color: "bg-white",
    description: "A disability should not be a barrier to a dream. Our Special Education centers are equipped with sensory rooms, braille libraries, and hearing aid support. We work on making mainstream schools 'Accessibility Friendly'.",
    problem: "Children with special needs are often hidden away due to social stigma and lack of specialized teachers.",
    solution: "Personalized Education Plans (PEPs) and community awareness programs to normalize inclusive learning.",
    impact: "Empowered 3,000+ children with special needs to lead independent, dignified lives.",
    icon: <Lightbulb className="text-yellow-600" />
  }
];

export default function Causes() {
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
    <div className="bg-white font-sans text-slate-900">
      {/* Header Section */}
      <section className="pt-28 pb-20 px-6 text-center bg-slate-900 text-white">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Our 10 Pillars of <span className="text-amber-500">Transformation</span></h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
          At Trishula Trust, we don't believe in quick fixes. We believe in deep, systemic change that covers every aspect of a child's environment.
        </p>
      </section>

      {/* 10 Massive Sections */}
      {SECTIONS.map((s, idx) => (
        <section key={s.id} className={`py-24 px-6 ${s.color} border-b border-slate-100`}>
          <div className={`max-w-7xl mx-auto flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
            
            {/* Image Column */}
            <div className="lg:w-1/2 w-full reveal opacity-0 translate-y-10 transition-all duration-1000">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-[40px] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
                <img src={s.image} alt={s.title} className="relative rounded-[32px] w-full h-[600px] object-cover shadow-2xl" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-3">
                  {s.icon}
                  <span className="font-bold text-xs tracking-widest uppercase text-slate-500">Pillar #0{s.id}</span>
                </div>
              </div>
            </div>

            {/* Text Column - Content Rich */}
            <div className="lg:w-1/2 w-full reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">{s.tagline}</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900 leading-tight">{s.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Zap size={16} className="text-amber-500" /> Mission Overview
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">{s.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <h5 className="text-red-700 font-bold mb-2 flex items-center gap-2"><AlertCircle size={18}/> The Challenge</h5>
                    <p className="text-red-900/70 text-sm leading-relaxed">{s.problem}</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h5 className="text-emerald-700 font-bold mb-2 flex items-center gap-2"><Target size={18}/> Our Approach</h5>
                    <p className="text-emerald-900/70 text-sm leading-relaxed">{s.solution}</p>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-8 py-2">
                  <h4 className="text-slate-900 font-bold mb-1 italic">Measurable Impact</h4>
                  <p className="text-slate-500 text-xl font-serif">{s.impact}</p>
                </div>

                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-black transition-all flex items-center gap-3 group">
                  Sponsor this Pillar <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Global Impact Summary Section */}
      
      <section className="py-24 bg-slate-50 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-serif mb-12">Total Impact at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <p className="text-4xl font-bold text-slate-900 mb-2">2.5M+</p>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Children Helped</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-slate-900 mb-2">15+</p>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">States Reached</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-slate-900 mb-2">10k+</p>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Volunteers</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-slate-900 mb-2">40Y</p>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Global Legacy</p>
                </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-amber-500 text-black text-center px-6">
        <h2 className="text-5xl font-serif mb-8">One Donation. Ten Impacts.</h2>
        <p className="text-xl max-w-2xl mx-auto mb-12 opacity-80 font-light">Your support is distributed across all these 10 pillars to ensure a child gets a truly 360-degree support system.</p>
        <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">
          Donate for a Child's Future
        </button>
      </section>

      <footer className="py-12 bg-white text-center text-slate-400 text-[10px] tracking-[0.5em] uppercase border-t border-slate-100">
        Trishula Trust Foundation • 2026 • Build with Hope
      </footer>
    </div>
  );
}