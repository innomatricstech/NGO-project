// src/components/Causes.jsx
import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Heart, 
  Shield, 
  Users, 
  GraduationCap, 
  Eye, 
  ChevronRight, 
  TrendingUp, 
  Zap, 
  Sparkles,
  Droplets,
  TreePine,
  Home,
  Globe,
  Target,
  CheckCircle,
  Star,
  Award,
  IndianRupee,
  Play,
  ArrowRight,
  HandHeart
} from "lucide-react";

const CAUSES_DATA = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Child Education",
    description: "Quality education for underprivileged children through innovative learning programs.",
    detailedDescription: "We provide digital classrooms, scholarships, and learning materials to 250,000+ children annually. Our focus includes STEM education, digital literacy, and life skills development.",
    bar: "from-blue-500 to-cyan-500",
    delay: 120,
    progress: 85,
    targetAmount: 5000000,
    raisedAmount: 4250000,
    impactStats: "250K+ children educated",
    badge: "Priority",
    color: "blue",
    volunteers: "15,000+",
    locations: "12 states",
    duration: "Ongoing",
    highlights: ["Digital Classrooms", "Scholarships", "Teacher Training"],
    childImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    childName: "Priya, 10 years",
    childStory: "From water collector to class topper with our scholarship program"
  },
  {
    id: 2,
    icon: <Heart className="w-8 h-8" />,
    title: "Child Health & Nutrition",
    description: "Healthcare access and nutrition support to vulnerable children.",
    detailedDescription: "Through 500+ health camps and nutrition centers, we've improved health outcomes for 150,000+ children. Our focus includes immunization, deworming, and growth monitoring.",
    bar: "from-green-500 to-emerald-500",
    delay: 180,
    progress: 78,
    targetAmount: 3000000,
    raisedAmount: 2340000,
    impactStats: "150K+ children healthier",
    badge: "Essential",
    color: "green",
    volunteers: "8,000+",
    locations: "18 states",
    duration: "Since 2010",
    highlights: ["Health Camps", "Nutrition Centers", "Vaccination"],
    childImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    childName: "Rahul, 7 years",
    childStory: "Received life-saving treatment through our health camp"
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Child Protection",
    description: "Safeguarding children from exploitation and ensuring their rights.",
    detailedDescription: "Our child protection programs have rescued 5,000+ children and provided counseling to 25,000+ families. We operate 24/7 helplines and rehabilitation centers.",
    bar: "from-purple-500 to-pink-500",
    delay: 240,
    progress: 92,
    targetAmount: 2000000,
    raisedAmount: 1840000,
    impactStats: "5K+ children rescued",
    badge: "Critical",
    color: "purple",
    volunteers: "5,000+",
    locations: "15 states",
    duration: "Since 2008",
    highlights: ["Rescue Operations", "Legal Aid", "Counseling"],
    childImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    childName: "Anjali, 12 years",
    childStory: "Found safety and education through our protection program"
  },
  {
    id: 4,
    icon: <Droplets className="w-8 h-8" />,
    title: "Clean Water & Sanitation",
    description: "Providing clean water and sanitation facilities to rural communities.",
    detailedDescription: "Installed 1,000+ water purifiers and sanitation units, benefiting 50,000+ families. Reduced waterborne diseases by 60% in target areas.",
    bar: "from-cyan-500 to-blue-500",
    delay: 300,
    progress: 65,
    targetAmount: 2500000,
    raisedAmount: 1625000,
    impactStats: "50K+ families impacted",
    badge: "Sustainable",
    color: "cyan",
    volunteers: "12,000+",
    locations: "22 states",
    duration: "Since 2012",
    highlights: ["Water Purifiers", "Sanitation Units", "Hygiene Training"],
    childImage: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
    childName: "Suresh, 9 years",
    childStory: "No longer walks 5km daily for water thanks to our water project"
  },
  {
    id: 5,
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Girl Child Education",
    description: "Empowering girls through education and life skills training.",
    detailedDescription: "We've supported 25,000+ girls with education, prevented 5,000+ child marriages, and trained 10,000+ girls in digital skills.",
    bar: "from-pink-500 to-rose-500",
    delay: 360,
    progress: 88,
    targetAmount: 4000000,
    raisedAmount: 3520000,
    impactStats: "25K+ girls educated",
    badge: "Empowering",
    color: "pink",
    volunteers: "10,000+",
    locations: "20 states",
    duration: "Since 2015",
    highlights: ["Girls' Education", "Skill Training", "Awareness Programs"],
    childImage: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2070&auto=format&fit=crop",
    childName: "Maya, 14 years",
    childStory: "Continuing education despite family pressure, supported by our program"
  },
  {
    id: 6,
    icon: <Home className="w-8 h-8" />,
    title: "Orphan & Homeless Children",
    description: "Shelter, care, and rehabilitation for homeless and orphaned children.",
    detailedDescription: "Operating 15 shelters providing care to 1,500+ children. Focus on education, healthcare, and eventual family reintegration or adoption.",
    bar: "from-orange-500 to-amber-500",
    delay: 420,
    progress: 72,
    targetAmount: 3500000,
    raisedAmount: 2520000,
    impactStats: "1,500+ children sheltered",
    badge: "Transformative",
    color: "orange",
    volunteers: "20,000+",
    locations: "25 states",
    duration: "Since 2006",
    highlights: ["Shelters", "Healthcare", "Education Support"],
    childImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
    childName: "Arun, 11 years",
    childStory: "Found a home and education through our shelter program"
  },
];

export default function Causes() {
  const [activeCause, setActiveCause] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleDonateClick = (causeId) => {
    const cause = CAUSES_DATA.find(c => c.id === causeId);
    alert(`Thank you for choosing to support ${cause?.title}! You'll be redirected to the donation page.`);
    window.location.href = `/donate?cause=${causeId}`;
  };

  const handleLearnMore = (causeId) => {
    setActiveCause(activeCause === causeId ? null : causeId);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredCauses = selectedCategory === "all" 
    ? CAUSES_DATA 
    : CAUSES_DATA.filter(cause => cause.color === selectedCategory);

  const activeCauseData = CAUSES_DATA.find(c => c.id === activeCause) || CAUSES_DATA[0];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-cyan-50/10 py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 fade-in-section">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Causes
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Children's Lives</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Each cause represents our commitment to creating lasting change in the lives of underprivileged children across India.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === "all" 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              All Causes
            </button>
            <button
              onClick={() => setSelectedCategory("blue")}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === "blue" 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setSelectedCategory("green")}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === "green" 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300'
              }`}
            >
              Health
            </button>
            <button
              onClick={() => setSelectedCategory("purple")}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === "purple" 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
              }`}
            >
              Protection
            </button>
          </div>
        </div>

        {/* Featured Cause */}
        <div className="mb-12 fade-in-section">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              {/* Child Image */}
              <div className="md:w-2/5 relative">
                <img
                  src={activeCauseData.childImage}
                  alt={activeCauseData.childName}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                <div className="absolute bottom-4 left-4 text-white md:hidden">
                  <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {activeCauseData.childName}
                  </div>
                  <p className="mt-2 text-sm">{activeCauseData.childStory}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-3/5 p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    {activeCauseData.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activeCauseData.title}</h3>
                    <p className="text-blue-100">{activeCauseData.childStory}</p>
                  </div>
                </div>
                
                <p className="mb-6 opacity-90">{activeCauseData.detailedDescription}</p>
                
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Funding Progress</span>
                    <span className="font-bold">{activeCauseData.progress}%</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-400"
                      style={{ width: `${activeCauseData.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Raised: {formatCurrency(activeCauseData.raisedAmount)}</span>
                    <span>Goal: {formatCurrency(activeCauseData.targetAmount)}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleDonateClick(activeCauseData.id)}
                  className="w-full md:w-auto bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Heart className="w-5 h-5" />
                  Support This Cause
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Causes Grid */}
        <div className={`grid ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""} gap-6`}>
          {filteredCauses.map((cause) => (
            <div
              key={cause.id}
              className={`
                bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl
                transition-all duration-500 fade-in-section
                ${activeCause === cause.id ? 'ring-2 ring-blue-400' : ''}
                ${viewMode === "list" ? 'md:flex' : ''}
              `}
            >
              {/* Child Image */}
              <div className={`${viewMode === "list" ? 'md:w-1/3' : ''} relative h-48`}>
                <img
                  src={cause.childImage}
                  alt={cause.childName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    cause.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    cause.color === 'green' ? 'bg-green-100 text-green-700' :
                    cause.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                    cause.color === 'cyan' ? 'bg-cyan-100 text-cyan-700' :
                    cause.color === 'pink' ? 'bg-pink-100 text-pink-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {cause.badge}
                  </span>
                </div>
                
                {/* Child Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{cause.childName}</div>
                </div>
              </div>

              {/* Content */}
              <div className={`${viewMode === "list" ? 'md:w-2/3' : ''} p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      cause.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      cause.color === 'green' ? 'bg-green-100 text-green-600' :
                      cause.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      cause.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
                      cause.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {cause.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{cause.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveCause(cause.id)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{cause.description}</p>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Progress</span>
                    <span className="font-bold">{cause.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${cause.bar}`}
                      style={{ width: `${cause.progress}%` }}
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900">{cause.volunteers}</div>
                    <div className="text-xs text-gray-600">Volunteers</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900">{cause.locations}</div>
                    <div className="text-xs text-gray-600">States</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-900">{cause.duration.split(' ')[0]}</div>
                    <div className="text-xs text-gray-600">Active</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDonateClick(cause.id)}
                    className={`
                      flex-1 py-3 rounded-xl font-semibold text-white
                      bg-gradient-to-r from-blue-500 to-cyan-500
                      hover:shadow-lg transition-all duration-300
                      flex items-center justify-center gap-2
                    `}
                  >
                    <Heart className="w-4 h-4" />
                    Donate
                  </button>
                  
                  <button
                    onClick={() => handleLearnMore(cause.id)}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 fade-in-section">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Impact So Far</h3>
            <p className="text-gray-600">Real numbers, real impact</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500K+</div>
              <div className="text-gray-700 font-medium">Children Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">25K+</div>
              <div className="text-gray-700 font-medium">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">18</div>
              <div className="text-gray-700 font-medium">States Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">15+</div>
              <div className="text-gray-700 font-medium">Years of Service</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center fade-in-section">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full mb-6">
              <HandHeart className="w-4 h-4" />
              <span className="font-medium">Make a Difference</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Support a Child's Future?</h3>
            <p className="text-gray-600 mb-8">
              Your support can provide education, healthcare, and hope to a child in need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = "/donate"}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </button>
              
              <button
                onClick={() => window.location.href = "/volunteer"}
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Users className="w-5 h-5" />
                Volunteer Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}