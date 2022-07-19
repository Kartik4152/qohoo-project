import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './Landing';

function App() {
  return (
    <div className="App overflow-hidden relative">
      <div className='h-screen w-screen bg-[#f8f5f1] overflow-hidden font-JetBrains font-extrabold'>
        <Navbar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
