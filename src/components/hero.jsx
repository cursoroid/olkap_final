import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [scrolling, setScrolling] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = ['src/assets/bg1.jpeg', 'src/assets/bg2.jpg', 'src/assets/bg3.jpg'];

  const handleScroll = () => {
    setScrolling(window.scrollY > 1);
  };

  const handleDotClick = (index) => {
    setBgIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
        {/* Navbar content can be added here */}
      </div>

      <div
        className='background_set'
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      ></div>

      {scrolling && (
        <div className="dots-container">
          {bgImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === bgIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      )}

      <div className={`hero-container ${scrolling ? 'scrolled' : ''}`}>
        {/* Inline the SVG here */}
        <svg
          viewBox="156.217464 419.75928 771.12 246.24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          id="Layer_1"
          width="1000"
          height="551.2"
          className="hero-logo"
        >
          <defs>
            <style>
              {`
                .cls-1 {
                  fill: currentColor;
                }
              `}
            </style>
          </defs>
          <g>
            <path class="cls-1" d="m333.67,503.65c0,41.8-37.95,75.68-84.77,75.68s-84.77-33.89-84.77-75.68,37.95-75.68,84.77-75.68,84.77,33.88,84.77,75.68Zm-24.22,0c0-30.09-27.11-54.49-60.55-54.49s-60.55,24.4-60.55,54.49,27.11,54.49,60.55,54.49,60.55-24.4,60.55-54.49Z" />
            <path class="cls-1" d="m460.89,555.12v21.19h-105.96v-145.31h24.22v124.12h81.74Z" />
            <path class="cls-1" d="m602.53,576.31h-28.77l-63.9-69.75-7.23,6.12v63.63h-24.22v-145.31h24.22v43.97c0,3.08-.59,6.13-1.73,9l-2.8,6.98,3,1.2,1.37-3.42c1.47-3.67,3.81-6.92,6.83-9.48l56.91-48.25h32.85l-73.01,61.86,76.5,83.46Z" />
            <path class="cls-1" d="m768.23,576.31h-26.2l-11.24-27.25h-78.79l-11.24,27.25h-26.2l59.95-145.31h33.77l59.95,145.31Zm-46.18-48.44l-27.17-65.85c-1.18-2.86-1.8-5.92-1.83-9.01l-.07-6.89-3.23.03.06,6.22c.03,3.25-.59,6.47-1.83,9.47l-27.24,66.04h61.3Z" />
            <path class="cls-1" d="m859.16,533.93h-49.26v42.38h-24.22v-145.31h78.71c28.42,0,51.46,23.04,51.46,51.46,0,21.85-13.62,40.5-32.83,47.97,0,0-4.74,3.49-23.87,3.49Zm32.48-51.47c0-16.72-12.2-30.27-27.25-30.27h-54.49v60.55h54.49c15.05,0,27.25-13.55,27.25-30.27Z" />
          </g>
          <g className={`tag_bottom ${scrolling ? 'hidden' : ''}`}>
            <g>
              <path class="cls-1" d="m229.44,651.8h-1.14c-.14,0-.24-.03-.33-.11-.09-.07-.15-.17-.2-.28l-2.4-5.91h-9.99l-2.39,5.91c-.04.1-.1.2-.2.27-.1.08-.21.11-.35.11h-1.12l8.32-20.34h1.47l8.32,20.34Zm-13.61-7.39h9.11l-4.15-10.28c-.07-.16-.13-.35-.2-.55-.07-.21-.14-.42-.2-.65-.07.23-.13.45-.2.65-.07.21-.14.4-.2.57l-4.15,10.26Z" />
              <path class="cls-1" d="m252.75,648.38c.1,0,.18.03.24.1l.58.62c-.42.45-.88.86-1.38,1.21-.5.36-1.04.67-1.63.92-.59.25-1.24.45-1.94.59-.7.14-1.48.21-2.32.21-1.41,0-2.7-.24-3.87-.74-1.17-.49-2.18-1.19-3.02-2.1-.84-.91-1.49-2-1.96-3.29-.47-1.28-.7-2.71-.7-4.28s.24-2.95.73-4.22c.48-1.27,1.16-2.37,2.04-3.28.88-.92,1.93-1.63,3.15-2.13,1.22-.5,2.57-.76,4.05-.76.74,0,1.41.06,2.03.17.61.11,1.19.27,1.72.48.53.21,1.03.46,1.5.77s.93.66,1.38,1.06l-.45.65c-.08.12-.2.17-.36.17-.09,0-.2-.05-.33-.15-.14-.1-.31-.23-.51-.37-.21-.15-.45-.31-.75-.49s-.64-.34-1.04-.49c-.4-.15-.87-.27-1.39-.37-.53-.1-1.13-.15-1.8-.15-1.24,0-2.37.21-3.41.64-1.04.43-1.93,1.04-2.67,1.83s-1.33,1.75-1.75,2.87-.62,2.39-.62,3.79.21,2.72.62,3.85c.41,1.13.98,2.09,1.71,2.87.73.78,1.59,1.38,2.58,1.8.99.42,2.07.62,3.23.62.73,0,1.38-.05,1.95-.14.57-.1,1.09-.24,1.57-.43.48-.19.92-.43,1.34-.71.41-.28.82-.6,1.22-.98.05-.04.09-.07.14-.09.04-.03.09-.04.15-.04Z" />
              <path class="cls-1" d="m278.72,648.38c.1,0,.18.03.24.1l.58.62c-.42.45-.88.86-1.38,1.21-.5.36-1.04.67-1.63.92-.59.25-1.24.45-1.94.59-.7.14-1.48.21-2.32.21-1.41,0-2.7-.24-3.87-.74-1.17-.49-2.18-1.19-3.02-2.1-.84-.91-1.49-2-1.96-3.29-.47-1.28-.7-2.71-.7-4.28s.24-2.95.73-4.22c.48-1.27,1.16-2.37,2.04-3.28.88-.92,1.93-1.63,3.15-2.13,1.22-.5,2.57-.76,4.05-.76.74,0,1.41.06,2.03.17.61.11,1.19.27,1.72.48.53.21,1.03.46,1.5.77s.93.66,1.38,1.06l-.45.65c-.08.12-.2.17-.36.17-.09,0-.2-.05-.33-.15-.14-.1-.31-.23-.51-.37-.21-.15-.45-.31-.75-.49s-.64-.34-1.04-.49c-.4-.15-.87-.27-1.39-.37-.53-.1-1.13-.15-1.8-.15-1.24,0-2.37.21-3.41.64-1.04.43-1.93,1.04-2.67,1.83s-1.33,1.75-1.75,2.87-.62,2.39-.62,3.79.21,2.72.62,3.85c.41,1.13.98,2.09,1.71,2.87.73.78,1.59,1.38,2.58,1.8.99.42,2.07.62,3.23.62.73,0,1.38-.05,1.95-.14.57-.1,1.09-.24,1.57-.43.48-.19.92-.43,1.34-.71.41-.28.82-.6,1.22-.98.05-.04.09-.07.14-.09.04-.03.09-.04.15-.04Z" />
              <path class="cls-1" d="m302.11,631.47v1.22h-10.71v8.22h8.91v1.19h-8.91v8.48h10.71v1.22h-12.19v-20.34h12.19Z" />
              <path class="cls-1" d="m313.69,631.52c.08.03.16.11.24.22l13.16,17.62c-.03-.29-.04-.57-.04-.83v-17.06h1.29v20.34h-.7c-.22,0-.4-.1-.53-.29l-13.22-17.65c.03.29.04.56.04.82v17.12h-1.28v-20.34h.72c.13,0,.24.02.32.05Z" />
              <path class="cls-1" d="m353.42,631.47v1.25h-7.14v19.09h-1.47v-19.09h-7.19v-1.25h15.8Z" />
              <path class="cls-1" d="m372.53,633.94c-.09.16-.21.24-.37.24-.13,0-.29-.09-.48-.27s-.46-.37-.8-.59c-.34-.21-.76-.41-1.26-.6-.5-.18-1.13-.27-1.87-.27s-1.39.1-1.95.31c-.56.21-1.03.5-1.41.86-.38.37-.67.79-.87,1.27-.2.48-.3.98-.3,1.51,0,.69.15,1.26.44,1.71s.68.83,1.16,1.15c.48.32,1.03.58,1.63.8.61.21,1.24.43,1.88.64s1.27.44,1.88.7,1.15.57,1.63.96c.48.38.87.85,1.16,1.42.29.56.44,1.26.44,2.09s-.15,1.66-.44,2.41c-.29.75-.72,1.41-1.27,1.96-.56.56-1.24,1-2.04,1.32s-1.72.48-2.76.48c-1.34,0-2.5-.24-3.46-.71-.97-.47-1.82-1.12-2.54-1.95l.4-.63c.12-.14.25-.21.4-.21.09,0,.2.06.33.17.13.11.3.26.49.42.19.17.42.35.69.55s.58.38.93.55.76.31,1.22.42c.46.11.98.17,1.57.17.81,0,1.53-.12,2.16-.37s1.17-.58,1.6-1c.44-.42.77-.92,1-1.5.23-.58.35-1.2.35-1.86,0-.72-.15-1.31-.44-1.77-.29-.46-.68-.85-1.16-1.16-.48-.31-1.02-.57-1.63-.78-.61-.21-1.23-.42-1.88-.62-.64-.2-1.27-.43-1.88-.67-.61-.25-1.15-.57-1.63-.96-.48-.39-.87-.87-1.16-1.45s-.44-1.31-.44-2.18c0-.68.13-1.34.39-1.97s.64-1.19,1.14-1.67c.5-.48,1.12-.87,1.85-1.16.73-.29,1.57-.44,2.51-.44,1.06,0,2,.17,2.84.5.84.33,1.6.85,2.29,1.54l-.35.66Z" />
              <path class="cls-1" d="m469.37,641.63c0,1.57-.23,3-.7,4.28-.47,1.28-1.13,2.37-1.98,3.28-.85.91-1.87,1.61-3.06,2.1s-2.51.74-3.95.74-2.73-.25-3.92-.74c-1.19-.49-2.21-1.19-3.06-2.1-.85-.9-1.52-2-1.99-3.28-.47-1.28-.71-2.71-.71-4.28s.24-2.98.71-4.26c.48-1.28,1.14-2.37,1.99-3.28.85-.91,1.87-1.61,3.06-2.11,1.19-.5,2.5-.75,3.92-.75s2.77.25,3.95.74c1.19.49,2.21,1.2,3.06,2.11s1.51,2.01,1.98,3.28c.47,1.28.7,2.7.7,4.26Zm-1.52,0c0-1.42-.2-2.69-.59-3.82s-.95-2.09-1.66-2.87-1.57-1.39-2.58-1.8-2.12-.63-3.35-.63-2.31.21-3.31.63c-1,.42-1.87,1.02-2.59,1.8-.72.79-1.28,1.74-1.68,2.87s-.6,2.4-.6,3.82.2,2.71.6,3.83.96,2.08,1.68,2.87c.72.79,1.59,1.39,2.59,1.8,1,.41,2.11.62,3.31.62s2.34-.21,3.35-.62c1.01-.41,1.87-1.01,2.58-1.8s1.27-1.74,1.66-2.87.59-2.4.59-3.83Z" />
              <path class="cls-1" d="m479.91,651.8v-20.34h5.85c1.16,0,2.16.11,3.01.34.85.23,1.55.57,2.11,1.01.55.45.97.99,1.24,1.63s.41,1.37.41,2.18c0,.54-.09,1.05-.28,1.55-.19.5-.46.96-.81,1.38-.35.42-.79.79-1.3,1.1-.51.31-1.1.55-1.76.71,1.6.24,2.83.77,3.69,1.6.86.82,1.29,1.91,1.29,3.26,0,.86-.15,1.64-.46,2.33-.31.69-.75,1.28-1.34,1.75-.59.48-1.3.85-2.16,1.1-.85.25-1.82.38-2.9.38h-6.6Zm1.47-10.82h4.41c.94,0,1.74-.12,2.41-.36.67-.24,1.21-.56,1.64-.95.43-.39.74-.84.94-1.34.2-.5.3-1.01.3-1.54,0-1.37-.43-2.41-1.3-3.11-.87-.7-2.21-1.06-4.02-1.06h-4.38v8.35Zm0,1.08v8.57h5.1c1.79,0,3.14-.39,4.05-1.16.91-.77,1.37-1.86,1.37-3.25,0-.64-.12-1.22-.37-1.73-.24-.51-.6-.95-1.06-1.31s-1.03-.63-1.7-.83c-.67-.19-1.43-.29-2.28-.29h-5.12Z" />
              <path class="cls-1" d="m511.1,645.02c0,1.14-.14,2.15-.42,3.02-.28.87-.69,1.6-1.21,2.2-.52.59-1.16,1.04-1.91,1.35s-1.6.45-2.54.45c-.43,0-.87-.03-1.31-.1-.44-.07-.9-.17-1.37-.32.02-.13.04-.27.05-.4.01-.14.03-.27.04-.4.02-.09.05-.16.11-.23.05-.07.15-.1.28-.1.09,0,.19.02.31.05s.26.07.43.11c.17.04.36.07.58.11.21.03.47.05.75.05.73,0,1.38-.12,1.97-.35.58-.23,1.08-.58,1.49-1.06s.73-1.07.94-1.8c.21-.72.32-1.57.32-2.55v-13.58h1.48v13.55Z" />
              <path class="cls-1" d="m535.07,631.47v1.22h-10.71v8.22h8.91v1.19h-8.91v8.48h10.71v1.22h-12.19v-20.34h12.19Z" />
              <path class="cls-1" d="m560.4,648.38c.1,0,.18.03.24.1l.58.62c-.42.45-.88.86-1.38,1.21-.5.36-1.04.67-1.63.92-.59.25-1.24.45-1.94.59-.7.14-1.48.21-2.32.21-1.41,0-2.7-.24-3.87-.74-1.17-.49-2.18-1.19-3.02-2.1-.84-.91-1.49-2-1.96-3.29-.47-1.28-.7-2.71-.7-4.28s.24-2.95.73-4.22c.48-1.27,1.16-2.37,2.04-3.28.88-.92,1.93-1.63,3.15-2.13,1.22-.5,2.57-.76,4.05-.76.74,0,1.41.06,2.03.17.61.11,1.19.27,1.72.48.53.21,1.03.46,1.5.77s.93.66,1.38,1.06l-.45.65c-.08.12-.2.17-.36.17-.09,0-.2-.05-.33-.15-.14-.1-.31-.23-.51-.37-.21-.15-.45-.31-.75-.49s-.64-.34-1.04-.49c-.4-.15-.87-.27-1.39-.37-.53-.1-1.13-.15-1.8-.15-1.24,0-2.37.21-3.41.64-1.04.43-1.93,1.04-2.67,1.83s-1.33,1.75-1.75,2.87-.62,2.39-.62,3.79.21,2.72.62,3.85c.41,1.13.98,2.09,1.71,2.87.73.78,1.59,1.38,2.58,1.8.99.42,2.07.62,3.23.62.73,0,1.38-.05,1.95-.14.57-.1,1.09-.24,1.57-.43.48-.19.92-.43,1.34-.71.41-.28.82-.6,1.22-.98.05-.04.09-.07.14-.09.04-.03.09-.04.15-.04Z" />
              <path class="cls-1" d="m584.87,631.47v1.25h-7.14v19.09h-1.47v-19.09h-7.19v-1.25h15.8Z" />
              <path class="cls-1" d="m603.99,633.94c-.09.16-.21.24-.37.24-.13,0-.29-.09-.48-.27s-.46-.37-.8-.59c-.34-.21-.76-.41-1.26-.6-.5-.18-1.13-.27-1.87-.27s-1.39.1-1.95.31c-.56.21-1.03.5-1.41.86-.38.37-.67.79-.87,1.27-.2.48-.3.98-.3,1.51,0,.69.15,1.26.44,1.71s.68.83,1.16,1.15c.48.32,1.03.58,1.63.8.61.21,1.24.43,1.88.64s1.27.44,1.88.7,1.15.57,1.63.96c.48.38.87.85,1.16,1.42.29.56.44,1.26.44,2.09s-.15,1.66-.44,2.41c-.29.75-.72,1.41-1.27,1.96-.56.56-1.24,1-2.04,1.32s-1.72.48-2.76.48c-1.34,0-2.5-.24-3.46-.71-.97-.47-1.82-1.12-2.54-1.95l.4-.63c.12-.14.25-.21.4-.21.09,0,.2.06.33.17.13.11.3.26.49.42.19.17.42.35.69.55s.58.38.93.55.76.31,1.22.42c.46.11.98.17,1.57.17.81,0,1.53-.12,2.16-.37s1.17-.58,1.6-1c.44-.42.77-.92,1-1.5.23-.58.35-1.2.35-1.86,0-.72-.15-1.31-.44-1.77-.29-.46-.68-.85-1.16-1.16-.48-.31-1.02-.57-1.63-.78-.61-.21-1.23-.42-1.88-.62-.64-.2-1.27-.43-1.88-.67-.61-.25-1.15-.57-1.63-.96-.48-.39-.87-.87-1.16-1.45s-.44-1.31-.44-2.18c0-.68.13-1.34.39-1.97s.64-1.19,1.14-1.67c.5-.48,1.12-.87,1.85-1.16.73-.29,1.57-.44,2.51-.44,1.06,0,2,.17,2.84.5.84.33,1.6.85,2.29,1.54l-.35.66Z" />
              <path class="cls-1" d="m684.16,650.55h9.64v1.25h-11.11v-20.34h1.47v19.09Z" />
              <path class="cls-1" d="m705.16,651.8h-1.48v-20.34h1.48v20.34Z" />
              <path class="cls-1" d="m729.68,631.47v1.22h-10.71v8.55h9.27v1.22h-9.27v9.34h-1.48v-20.34h12.19Z" />
              <path class="cls-1" d="m751.87,631.47v1.22h-10.71v8.22h8.91v1.19h-8.91v8.48h10.71v1.22h-12.19v-20.34h12.19Z" />
              <path class="cls-1" d="m772.26,633.94c-.09.16-.21.24-.37.24-.13,0-.29-.09-.48-.27s-.46-.37-.8-.59c-.34-.21-.76-.41-1.26-.6-.5-.18-1.13-.27-1.87-.27s-1.39.1-1.95.31c-.56.21-1.03.5-1.41.86-.38.37-.67.79-.87,1.27-.2.48-.3.98-.3,1.51,0,.69.15,1.26.44,1.71s.68.83,1.16,1.15c.48.32,1.03.58,1.63.8.61.21,1.24.43,1.88.64s1.27.44,1.88.7,1.15.57,1.63.96c.48.38.87.85,1.16,1.42.29.56.44,1.26.44,2.09s-.15,1.66-.44,2.41c-.29.75-.72,1.41-1.27,1.96-.56.56-1.24,1-2.04,1.32s-1.72.48-2.76.48c-1.34,0-2.5-.24-3.46-.71-.97-.47-1.82-1.12-2.54-1.95l.4-.63c.12-.14.25-.21.4-.21.09,0,.2.06.33.17.13.11.3.26.49.42.19.17.42.35.69.55s.58.38.93.55.76.31,1.22.42c.46.11.98.17,1.57.17.81,0,1.53-.12,2.16-.37s1.17-.58,1.6-1c.44-.42.77-.92,1-1.5.23-.58.35-1.2.35-1.86,0-.72-.15-1.31-.44-1.77-.29-.46-.68-.85-1.16-1.16-.48-.31-1.02-.57-1.63-.78-.61-.21-1.23-.42-1.88-.62-.64-.2-1.27-.43-1.88-.67-.61-.25-1.15-.57-1.63-.96-.48-.39-.87-.87-1.16-1.45s-.44-1.31-.44-2.18c0-.68.13-1.34.39-1.97s.64-1.19,1.14-1.67c.5-.48,1.12-.87,1.85-1.16.73-.29,1.57-.44,2.51-.44,1.06,0,2,.17,2.84.5.84.33,1.6.85,2.29,1.54l-.35.66Z" />
              <path class="cls-1" d="m796.47,631.47v1.25h-7.14v19.09h-1.47v-19.09h-7.19v-1.25h15.8Z" />
              <path class="cls-1" d="m812.07,643.41v8.39h-1.48v-8.39l-7.52-11.94h1.28c.14,0,.24.03.32.09.08.06.16.15.24.27l5.82,9.34c.13.22.25.43.35.64.1.21.18.41.26.62.08-.21.16-.42.26-.62.1-.21.21-.42.35-.64l5.81-9.34c.06-.1.13-.19.21-.26.09-.07.2-.1.33-.1h1.29l-7.52,11.94Z" />
              <path class="cls-1" d="m830.18,650.55h9.64v1.25h-11.11v-20.34h1.47v19.09Z" />
              <path class="cls-1" d="m861.36,631.47v1.22h-10.71v8.22h8.91v1.19h-8.91v8.48h10.71v1.22h-12.19v-20.34h12.19Z" />
            </g>
            <circle class="cls-1" cx="412.27" cy="642.1" r="3.15" />
            <circle class="cls-1" cx="643.93" cy="642.1" r="3.15" />
          </g>
        </svg>
      </div>

      <div className={`herotext-container ${scrolling ? 'scrolled' : ''}`}>
        <h2 className='hero_text'>
          Curated Artifacts <br /> for Your Space
        </h2>
      </div>
    </>
  );
};

export default Hero;
