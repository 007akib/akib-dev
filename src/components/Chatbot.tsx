import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "model", content: string }[]>([
    { role: "model", content: "Hi! I'm an AI assistant built to answer questions about Akib's portfolio. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });
      
      const data = await response.json();
      
      if (data.error) {
        setMessages(prev => [...prev, { role: "model", content: "Sorry, I'm having trouble connecting right now." }]);
      } else {
        setMessages(prev => [...prev, { role: "model", content: data.reply }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", content: "Sorry, an error occurred." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-accent-teal hover:bg-accent-cyan text-primary-base shadow-lg transition-transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-primary-base/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-dark/80 backdrop-blur-md p-4 border-b border-white/5 flex items-center justify-between shadow-inner">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-teal/20 border border-accent-teal/50 text-accent-cyan flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-cyan/20 animate-pulse"></div>
                  <Bot size={20} className="relative z-10" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm tracking-wide">FRIDAY</h3>
                  <p className="text-[10px] text-accent-cyan font-mono uppercase tracking-widest">AI Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent-cyan transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary-light text-gray-300' : 'bg-accent-teal/20 text-accent-cyan'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary-light text-white rounded-tr-sm' : 'bg-[#0f1522] border border-primary-light text-gray-200 rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-teal/20 text-accent-cyan flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-[#0f1522] border border-primary-light p-4 rounded-xl rounded-tl-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-primary-dark border-t border-primary-light">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-primary-base border border-primary-light text-white rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-accent-teal text-sm transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-accent-teal text-primary-base disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} className="ml-[-2px]" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
