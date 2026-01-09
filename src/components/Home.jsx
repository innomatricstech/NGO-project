// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  ChevronRight,
  Star,
  Play,
  Users,
  MapPin,
  BookOpen,
  Stethoscope,
  ShieldCheck,
  Mic,
  Phone,
  Mail,
  Globe,
  Clock,
  GraduationCap,
  MessageCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - NGO/Children Focused */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* NGO/Child-Focused Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="NGO volunteers helping children"
            className="w-full h-full object-cover brightness-90"
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/30"></div>
        </div>

        {/* Content - Centered and Clean */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
            <span className="text-white font-medium text-sm">India's Most Trusted Child Rights NGO</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Every Child Deserves
            <span className="block text-yellow-300 mt-4">A Happy Childhood</span>
          </h1>

          {/* Simple Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Ensuring education, healthcare, protection and childhood 
            for India's children since 1979
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/donate"
              className="group bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/30 transition-all flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Our Story
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">40+</div>
              <div className="text-white/80 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">22L+</div>
              <div className="text-white/80 text-sm">Children</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">19</div>
              <div className="text-white/80 text-sm">States</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-white/80 text-sm">Impact</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-white/70 text-sm animate-bounce">
            Scroll to explore
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image Column */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                alt="NGO team working with children"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm">CRY team making a difference in rural communities</p>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About CRY</h2>
              <p className="text-gray-600 mb-6">
                Child Rights and You (CRY) is India's most trusted NGO working tirelessly to restore 
                childhoods across the nation. For over 40 years, we've been at the forefront of 
                protecting children's rights and ensuring they get the childhood they deserve.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">40+ Years</div>
                    <div className="text-sm text-gray-500">Of dedicated service</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">22L+ Children</div>
                    <div className="text-sm text-gray-500">Lives transformed</div>
                  </div>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Causes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fighting for children's rights and protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Child Labour Cause */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2070&auto=format&fit=crop"
                  alt="Child labour issue"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">End Child Labour</h3>
                <p className="text-gray-600 mb-4">10+ million children still work in hazardous conditions instead of going to school.</p>
                <Link to="/causes#labour" className="text-red-600 font-medium hover:text-red-700">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Child Marriage Cause */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549923746-3d5f5d2e6f4d?q=80&w=2070&auto=format&fit=crop"
                  alt="Child marriage issue"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stop Child Marriage</h3>
                <p className="text-gray-600 mb-4">1.5 million girls married before 18 every year, denying them education and childhood.</p>
                <Link to="/causes#marriage" className="text-pink-600 font-medium hover:text-pink-700">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Education Cause */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                  alt="Children in classroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education for All</h3>
                <p className="text-gray-600 mb-4">32% dropout rate before completing elementary education due to poverty and lack of access.</p>
                <Link to="/causes#education" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/causes"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              View All Causes
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Donate Section Preview */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your donation can change a child's life
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹500</div>
              <p className="text-gray-700">Nutritious meals for 1 child/month</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹1000</div>
              <p className="text-gray-700">School supplies for 2 children</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹2500</div>
              <p className="text-gray-700">Healthcare for a family for 3 months</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹5000</div>
              <p className="text-gray-700">Vocational training for 1 teenager</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Holistic approach to child development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">School enrollment & quality education programs</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <Stethoscope className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health</h3>
              <p className="text-gray-600">Nutrition & healthcare access initiatives</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <ShieldCheck className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protection</h3>
              <p className="text-gray-600">Safeguarding from abuse & exploitation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <Mic className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Participation</h3>
              <p className="text-gray-600">Amplifying children's voices in society</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for inquiries, partnerships, or support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">1800-121-0001</p>
              <p className="text-gray-500 text-sm">Mon-Sat, 9AM-6PM</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@cry.org</p>
              <p className="text-gray-500 text-sm">24/7 support</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">CRY Headquarters</p>
              <p className="text-gray-500 text-sm">Mumbai, India</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-black transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}