
import React, { useState } from 'react';
import { Settings as SettingsIcon, Palette, Zap, Key, Monitor, Sliders } from 'lucide-react';

const Settings = () => {
  const [theme, setTheme] = useState('lightning-gold');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [hotkey, setHotkey] = useState('shift+shift+shift');

  const themes = [
    { id: 'lightning-gold', name: 'Lightning Gold', colors: ['#FFD700', '#FFA500'] },
    { id: 'plasma-blue', name: 'Plasma Blue', colors: ['#00BFFF', '#4169E1'] },
    { id: 'neon-purple', name: 'Neon Purple', colors: ['#9370DB', '#8A2BE2'] },
    { id: 'electric-green', name: 'Electric Green', colors: ['#00FF00', '#32CD32'] },
  ];

  return (
    <div className="h-full p-8 bg-gradient-to-br from-black via-zinc-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-xl border border-yellow-400/30">
              <SettingsIcon className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-yellow-300">Settings</h1>
              <p className="text-gray-400">Configure your lightning dashboard</p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Theme Settings */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl border border-yellow-600/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold text-yellow-300">Theme & Appearance</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-yellow-300 mb-3">
                  Color Theme
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.id}
                      onClick={() => setTheme(themeOption.id)}
                      className={`
                        p-4 rounded-xl border-2 transition-all duration-200 group relative overflow-hidden
                        ${theme === themeOption.id
                          ? 'border-yellow-400 bg-yellow-400/10'
                          : 'border-gray-600 hover:border-yellow-600'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ background: `linear-gradient(45deg, ${themeOption.colors[0]}, ${themeOption.colors[1]})` }}
                        />
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ background: themeOption.colors[1] }}
                        />
                      </div>
                      <p className="text-sm font-medium text-left text-gray-300 group-hover:text-yellow-300">
                        {themeOption.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-yellow-300">
                    Lightning Animations
                  </label>
                  <p className="text-sm text-gray-400">Enable constellation lightning effects</p>
                </div>
                <button
                  onClick={() => setAnimationsEnabled(!animationsEnabled)}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                    ${animationsEnabled ? 'bg-yellow-400' : 'bg-gray-600'}
                  `}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${animationsEnabled ? 'translate-x-6' : 'translate-x-1'}
                    `}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Hotkey Settings */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl border border-yellow-600/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold text-yellow-300">Global Hotkeys</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-yellow-300 mb-2">
                  Prompt Enhancement Hotkey
                </label>
                <input
                  type="text"
                  value={hotkey}
                  onChange={(e) => setHotkey(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-600/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none"
                  placeholder="e.g., shift+shift+shift"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Set the key combination to trigger AI prompt enhancement
                </p>
              </div>
            </div>
          </div>

          {/* API Settings */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl border border-yellow-600/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold text-yellow-300">API Configuration</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-yellow-300 mb-2">
                  OpenRouter API Key
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-600/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your OpenRouter API key..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-yellow-300 mb-2">
                  HuggingFace API Key
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-600/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your HuggingFace API key..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-300 mb-2">
                  Ollama Server URL
                </label>
                <input
                  type="url"
                  defaultValue="http://localhost:11434"
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-600/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none"
                  placeholder="http://localhost:11434"
                />
              </div>
            </div>
          </div>

          {/* Performance Settings */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-2xl border border-yellow-600/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-semibold text-yellow-300">Performance</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-yellow-300">
                    GPU Acceleration
                  </label>
                  <p className="text-sm text-gray-400">Use GPU for lightning effects rendering</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-400">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-yellow-300">
                    High Quality Effects
                  </label>
                  <p className="text-sm text-gray-400">Enhanced visual quality (may impact performance)</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-yellow-400">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-medium rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-yellow-400/20">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
