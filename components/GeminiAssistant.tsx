import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { VERTICALS } from '../constants';
import { generateResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Welcome to Elliot Group. I am your AI Concierge. How may I assist you with our ${VERTICALS.length} verticals of innovation today?` }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const responseText = await generateResponse(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform duration-300 text-navy ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles className="animate-pulse" />
      </button>

      {/* Chat Interface */}
      <div className={`fixed bottom-8 right-8 z-50 w-96 max-w-[90vw] h-[500px] flex flex-col glass-panel rounded-2xl shadow-2xl transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-4 border-b border-navy-lighter flex justify-between items-center bg-navy/80 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-gold" />
            <span className="font-serif font-bold text-silver tracking-widest">ELLIOT<span className="text-gold">AI</span></span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-silver-dim hover:text-silver transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-navy-light/30">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-gold text-navy rounded-tr-none font-medium' 
                  : 'bg-navy-light border border-navy-lighter text-silver rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-navy-light border border-navy-lighter p-3 rounded-lg rounded-tl-none flex items-center gap-2 text-gold">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-xs text-silver-dim">Computing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-navy-lighter bg-navy/90 rounded-b-2xl">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about our ventures..."
              className="flex-1 bg-navy-light border border-navy-lighter rounded-lg px-4 py-2 text-sm text-silver focus:outline-none focus:border-gold transition-colors placeholder-navy-lighter"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-gold text-navy rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};