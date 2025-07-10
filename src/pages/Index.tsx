
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import ChatApp from '../components/ChatApp';
import AgentBuilder from '../components/AgentBuilder';
import AnimeTab from '../components/AnimeTab';
import Settings from '../components/Settings';
import LightningBackground from '../components/LightningBackground';

const Index = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-yellow-300 font-sans relative">
      <LightningBackground />
      <Router>
        <div className="flex h-full relative z-10">
          <Sidebar />
          <main className="flex-1 ml-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<ChatApp />} />
              <Route path="/agents" element={<AgentBuilder />} />
              <Route path="/anime" element={<AnimeTab />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Index;
