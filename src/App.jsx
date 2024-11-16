import React, { useEffect } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'; // Import the Hero component
import Featured from './components/featured/featured';
import Footer from './components/footer/footer';


const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <Navbar scrolling={scrolling} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Featured />
      

      {/* <Footer /> */}
    </>
  );
}

export default App;
