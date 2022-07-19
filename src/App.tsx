import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='h-screen w-screen bg-[#f8f5f1] overflow-hidden font-JetBrains font-extrabold'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
