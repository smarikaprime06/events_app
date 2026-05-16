import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import MyArenaPage from './pages/MyArenaPage';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E17] overflow-x-hidden selection:bg-[#00D1FF] selection:text-black">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my-arena" element={<MyArenaPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
