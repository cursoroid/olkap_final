import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import './App.css';

import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Featured from './components/featured/featured';
import About from './components/aboutUs/about';
import Recommend from "./components/recommend/recommend";
import Footer from './components/footer/footer';
import TopPicks from "./components/top-picks/top-picks";
import Aboutcomp from "./components/aboutcomp/aboutcomp.jsx";
import FinalSection from "./components/final_section/final_section"; // Adjust the path as necessary

const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path using useLocation()

  // Handle scroll effect
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
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
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/about' && (
        <Navbar scrolling={scrolling} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Featured />
            <About />
            <Recommend />
            {/* <TopPicks /> */}
            <FinalSection />
          </>
        } />
        <Route path="/about" element={<Aboutcomp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
