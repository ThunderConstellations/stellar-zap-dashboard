
import React from 'react';
import { Zap, Star, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="h-full p-8 flex flex-col items-center justify-center text-center relative">
      {/* Main Logo/Title */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full blur-3xl opacity-20 scale-150" />
        <div className="relative bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-yellow-400/30 shadow-2xl shadow-yellow-400/20">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              TC-Dash4U-UwU
            </h1>
            <Sparkles className="w-8 h-8 text-amber-400 animate-bounce" />
          </div>
          <p className="text-xl text-yellow-300/80 font-light">
            Lightning-Powered Constellation Dashboard
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 p-6 rounded-xl border border-yellow-600/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-400/20 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-300">Lightning Chat</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Supercharged AI chat interface with multiple LLM providers. Enhance your prompts with intelligent suggestions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 p-6 rounded-xl border border-yellow-600/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-400/20 rounded-lg">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-300">Constellation Agents</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Build and connect AI agents in a visual node-based interface. Create powerful automation workflows.
          </p>
        </div>

        <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 p-6 rounded-xl border border-yellow-600/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-400/20 rounded-lg">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-300">Global Hotkeys</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Enhance text anywhere on your system with triple-shift hotkey. Get instant AI-powered suggestions.
          </p>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-12 flex items-center gap-2 text-sm text-yellow-400/60">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span>All systems operational</span>
      </div>
    </div>
  );
};

export default Home;
