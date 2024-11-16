import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Hero from './components/hero/hero'; // Import the Hero component
import Featured from './components/featured/featured';
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero /> {/* Add the Hero component */}
      <Featured/>
      <Footer />
    </>
  );
}

export default App;
