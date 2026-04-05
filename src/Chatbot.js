import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getReply = (text) => {
    if (text.toLowerCase().includes("skills")) {
      return "I specialize in React, Node.js, Python, Machine Learning, TensorFlow, and JavaScript. Ready to build amazing things! 🚀";
    }
    if (text.toLowerCase().includes("projects")) {
      return "I've built AI Plant Disease Detection, Scheme Finder, and advanced Chatbot systems. Each solving real-world problems! 💡";
    }
    if (text.toLowerCase().includes("experience")) {
      return "I have hands-on experience building AI-based and full-stack applications. Always learning and innovating! 🎯";
    }
    if (text.toLowerCase().includes("certifications") || text.toLowerCase().includes("certificate") || text.toLowerCase().includes("hackathon")) {
      return "I have professional certifications in AWS, Full-Stack Web Dev, Ethical Hacking, and Python. I also participated in hackathons at Next Wave and Vignan College! 🏆";
    }
    if (text.toLowerCase().includes("hello") || text.toLowerCase().includes("hi")) {
      return "Hey there! 👋 Ask me about my skills, projects, experience, or certifications!";
    }
    return "That's interesting! 🤔 Ask me about skills, projects, experience, or certifications for more info.";
  };

  const handleSend = (text) => {
    const userText = text || input;
    if (!userText.trim()) return;

    const reply = getReply(userText);

    setMessages([...messages, { user: userText, bot: reply }]);
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-2xl hover:shadow-xl hover:shadow-blue-500/50 transition-all z-40"
      >
        💬
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-96 bg-gradient-to-br from-gray-900 to-gray-950 p-0 rounded-2xl shadow-2xl border border-blue-500/30 z-40 flex flex-col max-h-96"
          >

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-lg">AI Assistant</h3>
                <p className="text-sm text-blue-100">Always here to help! 🤖</p>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
                className="text-white text-xl"
              >
                ✕
              </motion.button>
            </div>

            {/* Quick Buttons */}
            <div className="flex gap-2 p-4 border-b border-gray-700 flex-wrap">
              {[
                { text: "projects", icon: "💼", color: "from-green-500 to-green-600" },
                { text: "experience", icon: "⭐", color: "from-purple-500 to-purple-600" }
              ].map((btn) => (
                <motion.button
                  key={btn.text}
                  onClick={() => handleSend(btn.text)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 bg-gradient-to-r ${btn.color} px-3 py-2 rounded-lg text-xs font-semibold text-white hover:shadow-lg transition-all`}
                >
                  {btn.icon} {btn.text.charAt(0).toUpperCase() + btn.text.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-48">
              <AnimatePresence>
                {messages.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-400 text-center text-sm py-6"
                  >
                    Start a conversation! 👇
                  </motion.p>
                ) : (
                  messages.map((msg, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <motion.p 
                        className="text-right mb-2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        <span className="bg-blue-600 text-white px-3 py-2 rounded-lg inline-block text-sm max-w-xs break-words">
                          👤 {msg.user}
                        </span>
                      </motion.p>
                      <motion.p 
                        className="text-left mb-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        <span className="bg-gray-800 text-green-400 px-3 py-2 rounded-lg inline-block text-sm max-w-xs break-words border border-green-400/30">
                          🤖 {msg.bot}
                        </span>
                      </motion.p>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Input Box */}
            <div className="border-t border-gray-700 p-4 flex gap-2">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
              />
              <motion.button
                onClick={() => handleSend()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                →
              </motion.button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}