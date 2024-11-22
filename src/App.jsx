import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import './App.css';

import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Featured from './components/featured/featured';
import About from './components/aboutUs/about';
import Recommend from "./components/recommend/recommend";
import Footer from './components/footer/footer';
import TopPicks from "./components/top-picks/top-picks";
import Aboutcomp from "./components/aboutcomp/aboutcomp.jsx";
import FinalSection from "./components/final_section/final_section"; 
import NotFound from './components/notfound/notfound.jsx';
import DynamicGallery from './components/dynamicgallery/dynamicgallery.jsx';

const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  // Handle scroll effect
  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  window.onload = function() {
    window.scrollTo(0, 0);
};

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Conditionally render Navbar based on the scroll state and route */}
      {scrolling && location.pathname !== '/about' && location.pathname !== '/gallery' && (
        <Navbar className={scrolling ? 'navbar-visible' : 'navbar-hidden'} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Featured />
            <About />
            <Recommend />
            <FinalSection />
          </>
        } />
        <Route path="/about" element={<Aboutcomp />} />
        <Route path="/gallery" element={<DynamicGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
