
import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, Zap, Settings, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  lastActivity: Date;
}

const ChatApp = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'Welcome Chat',
      messages: [
        {
          id: '1',
          content: 'Hello! How can I assist you today?',
          role: 'assistant',
          timestamp: new Date()
        }
      ],
      lastActivity: new Date()
    }
  ]);
  const [activeSession, setActiveSession] = useState<string>('1');
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const models = [
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI' },
    { id: 'claude-3', name: 'Claude 3', provider: 'Anthropic' },
    { id: 'llama-2', name: 'Llama 2', provider: 'Meta' },
    { id: 'mistral-7b', name: 'Mistral 7B', provider: 'Mistral AI' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [sessions]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };

    // Simulate AI response
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: "I'm TC-Dash4U-UwU, your lightning-powered AI assistant! I can help you with various tasks. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    };

    setSessions(prev => prev.map(session => 
      session.id === activeSession 
        ? { 
            ...session, 
            messages: [...session.messages, newMessage, aiResponse],
            lastActivity: new Date()
          }
        : session
    ));

    setInput('');
  };

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: `Chat ${sessions.length + 1}`,
      messages: [],
      lastActivity: new Date()
    };
    setSessions(prev => [...prev, newSession]);
    setActiveSession(newSession.id);
  };

  const currentSession = sessions.find(s => s.id === activeSession);

  return (
    <div className="h-full flex bg-black">
      {/* Chat Sidebar */}
      <div className="w-80 bg-gradient-to-b from-zinc-950 to-black border-r border-yellow-700/30 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-yellow-700/20">
          <button
            onClick={createNewSession}
            className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30 rounded-xl hover:from-yellow-400/30 hover:to-amber-600/30 transition-all duration-200 group"
          >
            <Plus className="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform" />
            <span className="text-yellow-300 font-medium">New Chat</span>
          </button>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto p-2">
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => setActiveSession(session.id)}
              className={`
                w-full p-3 mb-2 rounded-lg text-left transition-all duration-200 group relative overflow-hidden
                ${activeSession === session.id 
                  ? 'bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/40' 
                  : 'hover:bg-yellow-400/10 border border-transparent hover:border-yellow-600/20'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className={`w-4 h-4 ${activeSession === session.id ? 'text-yellow-400' : 'text-gray-400'}`} />
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${activeSession === session.id ? 'text-yellow-300' : 'text-gray-300'}`}>
                    {session.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {session.messages.length} messages
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-yellow-700/20 bg-gradient-to-r from-black to-zinc-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <h2 className="text-xl font-semibold text-yellow-300">
                {currentSession?.title || 'TC Chat'}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-zinc-800 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-300 text-sm focus:border-yellow-400 focus:outline-none"
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} ({model.provider})
                  </option>
                ))}
              </select>
              <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {currentSession?.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-3xl p-4 rounded-2xl relative
                  ${message.role === 'user'
                    ? 'bg-gradient-to-br from-yellow-400/20 to-amber-600/20 border border-yellow-400/30 text-yellow-100'
                    : 'bg-gradient-to-br from-zinc-900/80 to-black/80 border border-gray-700/30 text-gray-100'
                  }
                `}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">TC-Assistant</span>
                  </div>
                )}
                <p className="leading-relaxed">{message.content}</p>
                <div className="text-xs text-gray-500 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-yellow-700/20 bg-gradient-to-r from-black to-zinc-900">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="w-full p-4 bg-zinc-800 border border-yellow-600/30 rounded-xl text-yellow-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="p-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl hover:from-yellow-300 hover:to-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-yellow-400/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
