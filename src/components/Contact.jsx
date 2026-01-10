import React, { useState } from "react";
import { 
  Send, MapPin, Phone, Mail, 
  MessageSquare, User, Sparkles, 
  CheckCircle, Loader2, Globe, Heart, ChevronRight
} from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulation
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen bg-white py-20 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background Hero */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500/10 border border-amber-200 rounded-full mb-8">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span className="font-bold text-amber-700 uppercase tracking-widest text-xs">Get In Touch</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-serif text-slate-900 mb-6">
          Connect with <span className="text-amber-500 italic">Purpose</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unga questions or support ethuva irunthalum nanga help panna ready-ah irukkom.
        </p>
      </div>

      {/* --- MASSIVE ATTRACTIVE CONTACT BOX --- */}
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="relative overflow-hidden bg-white rounded-[60px] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] border-[10px] border-white">
          
          {/* Background Images Layer */}
          <div className="absolute inset-0 flex flex-row opacity-[0.2] pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" 
              className="w-1/2 h-full object-cover border-r-2 border-white" 
              alt="Child Support Left" 
            />
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800" 
              className="w-1/2 h-full object-cover" 
              alt="Child Support Right" 
            />
          </div>

          {/* Form Content */}
          <div className="relative z-10 p-10 md:p-20 bg-white/60 backdrop-blur-md">
            {sent ? (
              <div className="text-center py-24 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle size={50} />
                </div>
                <h2 className="text-5xl font-serif text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-slate-600 text-xl font-medium">Nanga unga message-ah receive panniten. 24 hours-la reply pannuvom.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-10">
                
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Name Input */}
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-6 flex items-center gap-2">
                      <User size={14} className="text-amber-500"/> Your Full Name
                    </label>
                    <input 
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full bg-slate-50 border-4 border-transparent rounded-[40px] px-10 py-10 text-3xl md:text-4xl font-black text-slate-800 outline-none focus:bg-white focus:border-amber-500 transition-all shadow-xl"
                      placeholder="Enter Name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-6 flex items-center gap-2">
                      <Mail size={14} className="text-amber-500"/> Email Address
                    </label>
                    <input 
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full bg-slate-50 border-4 border-transparent rounded-[40px] px-10 py-10 text-3xl md:text-4xl font-black text-slate-800 outline-none focus:bg-white focus:border-amber-500 transition-all shadow-xl"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-6 flex items-center gap-2">
                    <MessageSquare size={14} className="text-amber-500"/> How can we help?
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full bg-slate-50 border-4 border-transparent rounded-[45px] px-10 py-10 text-3xl font-bold text-slate-800 outline-none focus:bg-white focus:border-amber-500 transition-all shadow-xl resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full md:w-[500px] h-[120px] bg-slate-900 text-white rounded-[45px] font-black text-3xl hover:bg-black transition-all flex items-center justify-center gap-6 shadow-2xl disabled:bg-slate-400 group"
                  >
                    {sending ? (
                      <Loader2 className="animate-spin" size={40} />
                    ) : (
                      <>
                        Send Message <Send size={32} className="group-hover:translate-x-3 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Bottom Contact Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-100 mt-12">
               <div className="flex items-center gap-4 justify-center">
                  <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center"><Phone size={24}/></div>
                  <div className="text-left">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Us</p>
                     <p className="text-sm font-bold text-slate-800">+91 74836 64359</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 justify-center border-x border-slate-100 px-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Globe size={24}/></div>
                  <div className="text-left">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                     <p className="text-sm font-bold text-slate-800">Bangalore, India</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 justify-center">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center"><Heart size={24}/></div>
                  <div className="text-left">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Support</p>
                     <p className="text-sm font-bold text-slate-800">24/7 Response</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}