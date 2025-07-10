
import React from 'react';
import { Bot, Zap, Settings } from 'lucide-react';

const AgentBuilder = () => {
  return (
    <div className="h-full p-8 bg-gradient-to-br from-black via-zinc-950 to-black">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-xl border border-yellow-400/30">
              <Bot className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-yellow-300">Agent Builder</h1>
              <p className="text-gray-400">Create and connect AI agents in visual workflows</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl border border-yellow-600/20 p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,215,0,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Coming Soon Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full blur-2xl opacity-20 scale-150" />
                <div className="relative p-6 bg-gradient-to-br from-zinc-800 to-black rounded-2xl border border-yellow-400/30">
                  <Zap className="w-16 h-16 text-yellow-400 mx-auto animate-pulse" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-yellow-300 mb-4">
              Constellation Agent Network
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Build powerful AI agent workflows with visual node connections. 
              Create lightning-fast automation between multiple AI models and services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div className="p-6 bg-zinc-800/50 rounded-xl border border-yellow-600/20">
                <Bot className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">Multi-Agent Systems</h3>
                <p className="text-gray-400 text-sm">Connect different AI models for complex reasoning tasks</p>
              </div>

              <div className="p-6 bg-zinc-800/50 rounded-xl border border-yellow-600/20">
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">Lightning Triggers</h3>
                <p className="text-gray-400 text-sm">Real-time event-based agent activation and coordination</p>
              </div>

              <div className="p-6 bg-zinc-800/50 rounded-xl border border-yellow-600/20">
                <Settings className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">Visual Workflow</h3>
                <p className="text-gray-400 text-sm">Drag-and-drop interface for building agent networks</p>
              </div>
            </div>

            <div className="mt-12 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30 rounded-full text-yellow-300 font-medium">
              ⚡ Coming Soon - Advanced Agent Constellation ⚡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBuilder;
