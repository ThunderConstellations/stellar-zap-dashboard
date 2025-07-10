
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Bot, Tv, Settings, Zap } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const tabs = [
    { id: 'home', path: '/', icon: Home, label: 'Home' },
    { id: 'chat', path: '/chat', icon: MessageCircle, label: 'Chat' },
    { id: 'agents', path: '/agents', icon: Bot, label: 'Agents' },
    { id: 'anime', path: '/anime', icon: Tv, label: 'Anime' },
    { id: 'settings', path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-r border-yellow-700/30 flex flex-col items-center py-6 z-20">
      {/* Logo/Brand */}
      <div className="mb-8 p-3 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl shadow-lg">
        <Zap className="w-8 h-8 text-black animate-pulse" />
      </div>

      {/* Navigation Tabs */}
      <nav className="flex flex-col gap-4 flex-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          const isHovered = hoveredTab === tab.id;

          return (
            <Link
              key={tab.id}
              to={tab.path}
              className="relative group"
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <div
                className={`
                  p-3 rounded-xl transition-all duration-300 relative overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-br from-yellow-400/20 to-amber-600/20 border border-yellow-400/40 shadow-lg shadow-yellow-400/20' 
                    : 'bg-zinc-900/50 border border-transparent hover:border-yellow-600/30 hover:bg-yellow-400/10'
                  }
                `}
              >
                {/* Lightning effect on hover */}
                {(isActive || isHovered) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-pulse" />
                )}
                
                <Icon 
                  className={`
                    w-6 h-6 transition-all duration-300 relative z-10
                    ${isActive ? 'text-yellow-300 drop-shadow-lg' : 'text-gray-400 group-hover:text-yellow-400'}
                  `} 
                />

                {/* Tooltip */}
                <div className={`
                  absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-zinc-800 border border-yellow-600/30 rounded-lg text-sm text-yellow-300 whitespace-nowrap transition-all duration-200 z-30
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
                `}>
                  {tab.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-800" />
                </div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Lightning Bolt Decoration */}
      <div className="mt-auto">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default Sidebar;
