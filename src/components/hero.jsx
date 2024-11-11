import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`hero-container ${scrolling ? 'scrolled' : ''}`}>
      <div className="hero-text">OLKAP</div>
    </div>
  );
};

export default Hero;
