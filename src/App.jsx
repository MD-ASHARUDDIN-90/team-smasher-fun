import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessages from './WelcomeMessages';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WelcomeMessages />
    </>
  );
}

export default App;
