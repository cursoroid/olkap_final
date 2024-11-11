import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/hero'; // Import the Hero component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero /> {/* Add the Hero component */}
    </>
  );
}

export default App;
