import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import MyAvatarPage from './pages/MyAvatarPage';
import EventsPage from './pages/EventsPage';
import ChatbotLauncher from './components/ChatbotLauncher';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E17] overflow-x-hidden selection:bg-[#00D1FF] selection:text-black">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my-arena" element={<MyAvatarPage />} />
        <Route path="/events/:category" element={<EventsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* ZEN 4.0 — global floating chatbot */}
      <ChatbotLauncher />
    </div>
  );
}

export default App;
