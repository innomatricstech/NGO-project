import React, { useState, useEffect } from "react";
import { 
  Heart, Shield, CheckCircle2, Loader2, 
  CreditCard, Sparkles, QrCode, Lock, Award, Landmark 
} from "lucide-react";

export default function Donate() {
  const [amount, setAmount] = useState("5000");
  const [isProcessing, setIsProcessing] = useState(false);

  // Unga Live Key ID
  const RZP_KEY_ID = "rzp_live_S2AKXydeqCgpQh";

  // Razorpay Script-ah load panna
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    if (!amount || amount <= 0) {
      alert("Machi, amount enter pannu!");
      return;
    }

    setIsProcessing(true);

    const options = {
      key: RZP_KEY_ID,
      amount: parseInt(amount) * 100, // Paise-la convert panrom
      currency: "INR",
      name: "Trishula Trust",
      description: "Direct Donation for Child Education",
      image: "https://your-logo-url.com/logo.png", 
      // Intha handler payment success aana trigger aagum
      handler: function (response) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
        setIsProcessing(false);
      },
      // User-ku direct-ah QR code option-ah prioritize panna intha config help pannum
      config: {
        display: {
          blocks: {
            upi: {
              name: "UPI / QR Code",
              instruments: [
                {
                  method: "upi",
                  protocols: ["vpa", "qr"] // QR Code-ah direct-ah display panna ithu mukkiyam
                }
              ]
            }
          },
          sequence: ["block.upi", "block.card"],
          preferences: {
            show_default_blocks: true
          }
        }
      },
      prefill: {
        name: "Donor Name",
        email: "donor@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F6C20E", // Unga Brand Amber Color
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-20 overflow-hidden">
      {/* Header Section */}
      <section className="bg-slate-900 pt-32 pb-56 text-center text-white relative">
        <div className="relative z-10 px-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-8 animate-pulse">
            <QrCode className="text-amber-500" size={20} />
            <span className="text-amber-500 font-black tracking-widest text-xs uppercase">Instant QR Payment</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-6">Give <span className="text-amber-500 italic">Hope</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
            Scan and Pay instantly using any UPI app. 100% Secure.
          </p>
        </div>
      </section>

      {/* --- THE MASSIVE DONATION & SCANNER BOX --- */}
      <section className="max-w-6xl mx-auto -mt-48 px-4 relative z-20">
        <div className="bg-white rounded-[60px] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.3)] border-[12px] border-white overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left Side: Images & Impact */}
            <div className="lg:col-span-5 relative hidden lg:block overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Impact" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex flex-col justify-end p-12">
                  <h3 className="text-white text-3xl font-serif mb-2 font-bold italic">Building Futures</h3>
                  <p className="text-slate-300 text-sm">Every scan provides a meal and a book for a child in need.</p>
               </div>
            </div>

            {/* Right Side: Payment Logic */}
            <div className="lg:col-span-7 p-8 md:p-16 bg-white">
              <div className="space-y-10">
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-serif text-slate-900 leading-tight">Enter Amount to Generate QR</h2>
                  <p className="text-slate-400 font-bold mt-2 uppercase tracking-widest text-xs">Direct Razorpay Integration</p>
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {["1000", "2500", "5000", "10000"].map((val) => (
                    <button 
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`py-6 rounded-3xl font-black text-2xl border-4 transition-all ${
                        amount === val ? 'bg-amber-500 border-amber-500 text-white shadow-xl scale-105' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-amber-200'
                      }`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input - MASSIVE & VISIBLE */}
                <div className="relative group">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 ml-6">Custom Amount (INR)</p>
                    <div className="relative">
                        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-5xl font-serif text-amber-500 font-bold">₹</span>
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-slate-50 border-4 border-transparent rounded-[45px] pl-28 pr-10 py-12 text-7xl md:text-8xl font-black text-amber-500 outline-none focus:bg-white focus:border-amber-500 transition-all shadow-inner"
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Action Button */}
                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full h-[130px] bg-slate-900 text-white rounded-[45px] font-black text-3xl md:text-4xl hover:bg-black transition-all flex items-center justify-center gap-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] disabled:bg-slate-400 group"
                >
                  {isProcessing ? (
                    <Loader2 className="animate-spin" size={48} />
                  ) : (
                    <>
                      Open QR Scanner <QrCode size={40} className="group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>

                {/* Trust Footer */}
                <div className="flex justify-between items-center gap-4 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2"><Lock size={16} className="text-emerald-500"/> <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">SECURE SSL</span></div>
                    <div className="flex items-center gap-2"><Award size={16} className="text-blue-500"/> <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">80G TAX BENEFIT</span></div>
                    <div className="flex items-center gap-2"><Shield size={16} className="text-amber-500"/> <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">RAZORPAY VERIFIED</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}