// src/components/Donate.jsx
import React, { useState, useEffect } from "react";
import { 
  Heart, 
  Shield, 
  CheckCircle, 
  IndianRupee,
  Sparkles,
  Users,
  Calendar,
  Lock,
  Receipt,
  Target,
  Gift,
  HandHeart,
  Book,
  School,
  Utensils,
  Stethoscope,
  TrendingUp,
  Award,
  Star,
  AlertCircle
} from "lucide-react";

const YELLOW = "#F6C20E";
const PRESETS = [500, 1000, 2500, 5000, 10000];

export default function Donate() {
  const [name, setName] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [plan, setPlan] = useState("one-time");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showRequirements, setShowRequirements] = useState(true);

  // REAL CHILD IMAGES WITH MONEY IN HAND
  const childImages = [
    {
      url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop", // Child holding something
      title: "Priya - 10 years",
      story: "Your donation helps Priya continue her education"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", // Child with hope
      title: "Rahul - 12 years",
      story: "Sponsoring Rahul's education transforms his future"
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop", // Child learning
      title: "Anjali - 8 years",
      story: "Your support provides Anjali with healthcare"
    }
  ];

  // Child needs based on amount
  const childNeeds = [
    {
      amount: 500,
      items: [
        { icon: <Book className="w-4 h-4" />, text: "School supplies for 1 month" },
        { icon: <Utensils className="w-4 h-4" />, text: "Nutrition for 2 weeks" },
        { icon: <School className="w-4 h-4" />, text: "Tuition support" }
      ]
    },
    {
      amount: 1000,
      items: [
        { icon: <Book className="w-4 h-4" />, text: "School fees for 1 month" },
        { icon: <Utensils className="w-4 h-4" />, text: "Daily meals for 1 month" },
        { icon: <Stethoscope className="w-4 h-4" />, text: "Healthcare access" },
        { icon: <School className="w-4 h-4" />, text: "Educational materials" }
      ]
    },
    {
      amount: 2500,
      items: [
        { icon: <Book className="w-4 h-4" />, text: "Quarterly school expenses" },
        { icon: <Utensils className="w-4 h-4" />, text: "3 months nutrition" },
        { icon: <Stethoscope className="w-4 h-4" />, text: "Complete healthcare" },
        { icon: <School className="w-4 h-4" />, text: "Books & uniform" },
        { icon: <Heart className="w-4 h-4" />, text: "Extracurricular activities" }
      ]
    }
  ];

  const handlePresetSelect = (value) => {
    setSelectedPreset(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedPreset(null);
  };

  const getAmount = () => {
    if (customAmount) {
      const parsed = parseInt(customAmount);
      return isNaN(parsed) ? 0 : parsed;
    }
    return selectedPreset || 0;
  };

  const getChildNeeds = () => {
    const amount = getAmount();
    const need = childNeeds.find(n => amount >= n.amount);
    return need || childNeeds[0];
  };

  const submit = (e) => {
    e.preventDefault();
    const amount = getAmount();
    
    if (amount === 0) {
      alert("Please select or enter an amount to donate");
      return;
    }
    
    if (amount < 100) {
      alert("Minimum donation amount is ₹100");
      return;
    }
    
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      
      setTimeout(() => {
        setSuccess(false);
        setSelectedPreset(null);
        setCustomAmount("");
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="donate"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-amber-50/10 text-gray-900 px-4 sm:px-6 py-12 md:py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23F6C20E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full mb-4">
            <HandHeart className="w-4 h-4" />
            <span className="font-medium">Your Gift, Their Future</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Change a Child's Life
            <span className="block text-yellow-600 mt-2">With Your Donation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your support provides education, healthcare, and hope to underprivileged children
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Child Image Section */}
          <div className="space-y-8">
            {/* Main Child Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <img
                  src={childImages[0].url}
                  alt="Child in need"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* ₹500 Note Overlay (Positioned in hand area) */}
                <div className="absolute bottom-24 right-16 transform rotate-12">
                  <div className="relative">
                    {/* ₹500 Note Design */}
                    <div className="w-32 h-16 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg shadow-lg border-2 border-amber-600">
                      <div className="absolute inset-1 bg-white/90 rounded-md p-2">
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900">₹500</div>
                          <div className="text-xs text-gray-600">Your Donation</div>
                        </div>
                        <div className="absolute top-1 left-1 text-xs font-bold text-green-600">✓</div>
                        <div className="absolute bottom-1 right-1 text-xs font-bold text-green-600">✓</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Child Info Overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {childImages[0].title}
                  </div>
                  <p className="mt-2 text-lg font-medium">{childImages[0].story}</p>
                </div>
              </div>
            </div>

            {/* Child Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {childImages.map((child, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => {/* Set main image */}}
                >
                  <img
                    src={child.url}
                    alt={child.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white text-xs">
                    {child.title.split('-')[0]}
                  </div>
                </div>
              ))}
            </div>

            {/* What Your Donation Provides */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-900">Your Donation Provides</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Book className="w-5 h-5" />, text: "Quality Education" },
                  { icon: <Utensils className="w-5 h-5" />, text: "Daily Nutrition" },
                  { icon: <Stethoscope className="w-5 h-5" />, text: "Healthcare" },
                  { icon: <School className="w-5 h-5" />, text: "School Supplies" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                    <div className="text-yellow-600">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
            {/* Plan Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Donation Type</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPlan("one-time")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    plan === "one-time" 
                      ? "border-yellow-500 bg-yellow-50 text-yellow-700 shadow-md" 
                      : "border-gray-200 hover:border-yellow-300"
                  }`}
                >
                  <div className="font-bold text-lg">One-Time</div>
                  <div className="text-sm text-gray-600 mt-1">Single support</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setPlan("monthly")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    plan === "monthly" 
                      ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md" 
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="font-bold text-lg">Monthly</div>
                  <div className="text-sm text-gray-600 mt-1">Regular support</div>
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Select Amount</h3>
                {selectedPreset && (
                  <div className="text-sm font-medium text-yellow-600">
                    Selected: ₹{selectedPreset.toLocaleString()}
                  </div>
                )}
              </div>
              
              {/* Preset Amounts */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {PRESETS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handlePresetSelect(value)}
                    className={`py-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
                      selectedPreset === value
                        ? "border-yellow-500 bg-yellow-100 text-yellow-700 shadow-md scale-105"
                        : "border-gray-200 hover:border-yellow-300 hover:bg-gray-50"
                    }`}
                  >
                    ₹{value.toLocaleString()}
                  </button>
                ))}
              </div>
              
              {/* Custom Amount */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-700">Other Amount</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount (Min ₹100)"
                    min="100"
                    className="w-full pl-10 pr-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Minimum donation: ₹100</p>
              </div>
            </div>

            {/* Donation Impact */}
            {getAmount() >= 100 && (
              <div className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-gray-900">Your ₹{getAmount().toLocaleString()} Will Provide:</h4>
                </div>
                
                <div className="space-y-3">
                  {getChildNeeds().items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Donor Info */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Information</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={submit}
              disabled={processing || getAmount() < 100}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                getAmount() < 100
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Donation...
                </>
              ) : (
                <>
                  <Heart className="w-6 h-6" />
                  {getAmount() >= 100 ? `Donate ₹${getAmount().toLocaleString()}` : "Select Amount"}
                </>
              )}
            </button>

            {/* Success Message */}
            {success && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-bold text-green-800">Thank You {name || "Donator"}! ❤️</p>
                    <p className="text-sm text-green-700 mt-1">
                      Your ₹{getAmount().toLocaleString()} donation is making a real difference in a child's life.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Security & Trust */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>100% Secure Payment</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-blue-600" />
                  <span>80G Tax Benefit</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Transparent Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2.2M+", label: "Children Helped", icon: "👧👦", color: "text-blue-600" },
            { value: "₹98", label: "Of ₹100 reaches directly", icon: "💰", color: "text-green-600" },
            { value: "500K+", label: "Meals Provided", icon: "🍛", color: "text-amber-600" },
            { value: "95%", label: "School Enrollment", icon: "📚", color: "text-purple-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}