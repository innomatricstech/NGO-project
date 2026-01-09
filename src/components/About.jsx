// src/pages/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Play,
  Award,
  Trophy,
  Star,
  Users,
  Target,
  Heart,
  Shield,
  BookOpen,
  Mic,
  Globe,
  Calendar,
  ChevronRight,
  Quote,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Zap,
  HeartHandshake,
  ArrowRight,
  Book,
  GraduationCap,
  Stethoscope,
  ShieldCheck
} from "lucide-react";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    const animatedElements = el.querySelectorAll('.fade-in-section');
    animatedElements.forEach(element => observer.observe(element));

    // Image rotation for hero
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Real child images from Unsplash (free to use)
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
      title: "Education Support",
      description: "Providing quality education to rural children"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      title: "School Meals",
      description: "Nutrition support for better learning"
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
      title: "Digital Learning",
      description: "Technology access for modern education"
    },
    {
      url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2070&auto=format&fit=crop",
      title: "Happy Childhood",
      description: "Creating joyful learning environments"
    }
  ];

  const childStories = [
    {
      name: "Priya",
      age: 10,
      location: "Rural Rajasthan",
      story: "From water collector to class topper",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      achievements: ["Education Scholarship", "Nutrition Support", "School Topper"],
      icon: "📚"
    },
    {
      name: "Rahul",
      age: 12,
      location: "Urban Slum, Delhi",
      story: "Found safety and education through our program",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
      achievements: ["Child Protection", "Sports Scholarship", "Community Leader"],
      icon: "🛡️"
    },
    {
      name: "Anjali",
      age: 8,
      location: "Remote Village, Bihar",
      story: "Received healthcare and continued education",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
      achievements: ["Healthcare Access", "Regular Schooling", "Nutrition Program"],
      icon: "❤️"
    }
  ];

  return (
    <main
      ref={rootRef}
      className="min-h-screen bg-white text-gray-900"
    >
      {/* Hero Section with Real Child Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-10 left-10 text-white opacity-0 animate-fade-in-delay">
                <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                  {img.title}
                </div>
                <p className="mt-2 text-lg">{img.description}</p>
              </div>
            </div>
          ))}
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">India's Most Trusted NGO</span>
            </div>
            <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-delay">
            Every Child Deserves
            <span className="block text-yellow-300 mt-4">A Happy Childhood</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in-delay-2">
            For over 40 years, we have been transforming lives of underprivileged children 
            across India through education, healthcare, protection, and love.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-delay-3">
            <Link
              to="/donate"
              className="group bg-yellow-400 text-blue-900 font-bold px-10 py-5 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Heart className="w-6 h-6" />
              Donate Now to Save Childhoods
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              to="/stories"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Book className="w-5 h-5" />
              Read Child Stories
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-delay-4">
            {[
              { value: "2.2M+", label: "Children Impacted", icon: "👧👦", color: "text-yellow-300" },
              { value: "500K+", label: "Meals Provided", icon: "🍲", color: "text-green-300" },
              { value: "40+", label: "Years of Service", icon: "📅", color: "text-blue-300" },
              { value: "98%", label: "Success Rate", icon: "📊", color: "text-purple-300" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Child Image Gallery */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-yellow-400 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Child Images */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Top Left - Happy Child */}
          <div className="absolute top-20 left-10 w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl rotate-3 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Happy child"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Happy Childhood
            </div>
          </div>

          {/* Top Right - Learning Child */}
          <div className="absolute top-32 right-10 w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl -rotate-3 animate-float">
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop"
              alt="Learning child"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Digital Learning
            </div>
          </div>

          {/* Bottom Left - School Child */}
          <div className="absolute bottom-32 left-20 w-44 h-44 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl -rotate-6 animate-float-slower">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
              alt="School child"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Quality Education
            </div>
          </div>
        </div>
      </section>

      {/* Child Stories Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Stories of Hope
              <span className="block text-blue-600 text-2xl md:text-3xl mt-2">Children We've Helped</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the children whose lives have been transformed through our programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {childStories.map((child, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Child Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                  
                  {/* Age Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {child.age} years
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{child.location}</div>
                  </div>
                </div>
                
                {/* Story Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{child.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{child.name}'s Journey</h3>
                      <p className="text-blue-600 text-sm">{child.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic border-l-4 border-blue-500 pl-4">
                    "{child.story}"
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Support Received:</h4>
                    {child.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/stories/${child.name.toLowerCase()}`}
                    className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold group"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Impact */}
      <section className="py-20 md:py-32 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help Children
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs addressing children's most critical needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-10 h-10" />,
                title: "Education",
                description: "Ensuring school enrollment and quality learning",
                children: "500K+ Children",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: <Stethoscope className="w-10 h-10" />,
                title: "Health & Nutrition",
                description: "Healthcare access and proper nutrition",
                children: "300K+ Children",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Protection",
                description: "Safety from abuse and exploitation",
                children: "200K+ Children",
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Community Support",
                description: "Family and community empowerment",
                children: "1M+ Beneficiaries",
                image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=2104&auto=format&fit=crop"
              }
            ].map((program, index) => (
              <div key={index} className="group">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-xl">
                    <div className="text-blue-600">
                      {program.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-3">{program.description}</p>
                <div className="text-blue-600 font-bold">{program.children}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 md:py-32 overflow-hidden fade-in-section">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Children background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            You Can Be the Reason
            <span className="block text-yellow-300 mt-2">For a Child's Smile</span>
          </h2>
          
          <p className="text-xl opacity-95 mb-12 max-w-2xl mx-auto">
            Your support can transform a child's life. Join us in creating happy childhoods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/donate"
              className="group bg-yellow-400 text-blue-900 font-bold px-10 py-5 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Heart className="w-6 h-6" />
              Sponsor a Child
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              to="/volunteer"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Users className="w-6 h-6" />
              Volunteer Today
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <Quote className="w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-70" />
            <p className="text-xl italic opacity-90 max-w-2xl mx-auto">
              "Every child deserves love, education, and protection. Together, we can make it happen."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}