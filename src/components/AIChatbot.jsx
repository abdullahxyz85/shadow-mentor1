import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  Bot,
  User,
  Minimize2,
} from "lucide-react";
import Groq from "groq-sdk";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your Shadow Mentor AI assistant. I can help you with questions about our employee onboarding platform, learning paths, certifications, and more. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemPrompt = `You are an AI assistant for Shadow Mentor, an advanced employee onboarding and development platform. Your role is to help users understand and navigate the platform.

Key features of Shadow Mentor:
- Employee Onboarding: Streamlined onboarding process with smart scheduling
- Learning Paths: Role-specific learning roadmaps and certifications (Software Engineer, Data Scientist, DevOps, QA, UX Designer, Backend, Blockchain, Cybersecurity)
- Performance Tracking: Real-time monitoring of employee progress, task completion, and skill development
- Smart Calendar: Automated scheduling for 1:1s, meetings, and training sessions
- Certification Programs: Integration with roadmap.sh for comprehensive learning paths
- Salary Insights: Projected salary increases based on certification completion
- HR Dashboard: Live activity feed, analytics, and team management tools
- Employee Dashboard: Personal overview with projects, certifications, schedule, and performance metrics

IMPORTANT: Respond in plain text only. Do NOT use any markdown formatting like **bold**, *italic*, or # headings. Write naturally without special characters for emphasis.

Be helpful, concise, and friendly. Provide specific information about the platform's features. If asked about technical implementation, explain that Shadow Mentor uses React, Tailwind CSS, Framer Motion for animations, and Recharts for data visualization.`;

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          {
            role: "user",
            content: input,
          },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1024,
      });

      const assistantMessage = {
        role: "assistant",
        content:
          chatCompletion.choices[0]?.message?.content ||
          "I apologize, but I couldn't generate a response. Please try again.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary to-orange-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/50 transition-shadow"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark animate-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "60px" : "600px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] bg-gradient-to-br from-gray-900 to-black border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-orange-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Shadow Mentor AI</h3>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="h-[440px] overflow-y-auto p-4 space-y-4 bg-dark">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.role === "user"
                            ? "flex-row-reverse space-x-reverse"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-primary"
                              : "bg-gray-700"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-5 h-5 text-white" />
                          ) : (
                            <Bot className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl p-3 ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-primary to-orange-600 text-white"
                              : "bg-gray-800 text-gray-200 border border-gray-700"
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3">
                          <Loader2 className="w-5 h-5 text-primary animate-spin" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form
                  onSubmit={sendMessage}
                  className="p-4 bg-gray-900 border-t border-gray-800"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything..."
                      disabled={isLoading}
                      className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="bg-gradient-to-r from-primary to-orange-600 text-white p-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
