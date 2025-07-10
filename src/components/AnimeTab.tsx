
import React, { useState } from 'react';
import { ExternalLink, Plus, Tv, Zap } from 'lucide-react';

const AnimeTab = () => {
  const [sites] = useState([
    { name: '9AnimeTV', url: 'https://9animetv.to/recently-updated' },
    { name: 'AnimeKai', url: 'https://animekai.to/updates' },
  ]);
  const [currentSite, setCurrentSite] = useState(sites[0]);
  const [customUrl, setCustomUrl] = useState('');

  const handleCustomSite = () => {
    if (customUrl.trim()) {
      setCurrentSite({ name: 'Custom Site', url: customUrl });
    }
  };

  return (
    <div className="h-full flex flex-col bg-black">
      {/* Header */}
      <div className="p-4 border-b border-yellow-700/20 bg-gradient-to-r from-black to-zinc-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-lg border border-yellow-400/30">
              <Tv className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-xl font-semibold text-yellow-300">Anime Streaming</h2>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-yellow-400">Lightning Stream</span>
          </div>
        </div>

        {/* Site Selection */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-2">
            {sites.map((site, index) => (
              <button
                key={index}
                onClick={() => setCurrentSite(site)}
                className={`
                  px-4 py-2 rounded-lg border transition-all duration-200
                  ${currentSite.url === site.url
                    ? 'bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border-yellow-400/40 text-yellow-300'
                    : 'bg-zinc-800 border-yellow-600/20 text-gray-300 hover:border-yellow-400/40 hover:text-yellow-300'
                  }
                `}
              >
                {site.name}
              </button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="url"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="Enter custom anime site URL..."
              className="px-3 py-2 bg-zinc-800 border border-yellow-600/30 rounded-lg text-yellow-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none text-sm min-w-64"
            />
            <button
              onClick={handleCustomSite}
              className="p-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg hover:from-yellow-300 hover:to-amber-400 transition-all duration-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Current Site Info */}
        <div className="mt-4 flex items-center gap-2 text-sm">
          <ExternalLink className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-400">Currently viewing:</span>
          <span className="text-yellow-300 font-medium">{currentSite.name}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 truncate">{currentSite.url}</span>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 relative bg-zinc-900">
        <iframe
          src={currentSite.url}
          className="w-full h-full border-none"
          title={`${currentSite.name} - Anime Streaming`}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
        
        {/* Loading Overlay */}
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="loading-overlay">
          <div className="text-center">
            <Zap className="w-12 h-12 text-yellow-400 animate-spin mx-auto mb-4" />
            <p className="text-yellow-300 text-lg">Loading Lightning Stream...</p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-2 bg-zinc-950 border-t border-yellow-700/20 text-center">
        <p className="text-xs text-gray-500">
          ⚡ Streaming powered by TC-Dash4U-UwU • Use responsibly and respect site terms
        </p>
      </div>
    </div>
  );
};

export default AnimeTab;
