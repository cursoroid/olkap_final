import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [scrolling, setScrolling] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = ['src/assets/bg1.jpeg', 'src/assets/bg2.jpg', 'src/assets/bg3.jpg']; // Easily add or remove image paths here

  const handleScroll = () => {
    setScrolling(window.scrollY > 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // 5 seconds interval for changing images

    return () => clearInterval(interval);
  }, [bgImages.length]); // Use bgImages.length as a dependency to adapt to changes

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className='background_set'
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }} // Dynamically set background image
      ></div>
      <div className={`hero-container ${scrolling ? 'scrolled' : ''}`}>
        <div className="hero-text">OLKAP</div>
      </div>
    </>
  );
};

export default Hero;
