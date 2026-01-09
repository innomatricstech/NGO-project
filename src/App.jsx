import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Causes from "./components/Causes";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Main Layout component that includes Navbar and Footer
function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      <main className="pt-24"> {/* pt-24 to account for fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}