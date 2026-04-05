import Chatbot from "./Chatbot";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  // Static Projects Data
  const projects = [
    {
      id: 1,
      title: "Government Scheme Finder",
      description: "An intelligent platform that helps citizens discover and access government schemes based on their eligibility criteria. Built with React and Node.js, this application uses smart filtering to match users with relevant schemes like education, healthcare, and financial assistance programs.",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      icon: "🏛️"
    },
    {
      id: 2,
      title: "AI Travel Planner",
      description: "A comprehensive travel planning application powered by machine learning algorithms. It recommends personalized travel itineraries, suggests destinations based on user preferences, provides weather forecasts, and offers real-time travel tips. Features include cost optimization and local attraction discovery.",
      tech: ["Python", "Machine Learning", "React", "Firebase"],
      icon: "✈️"
    },
    {
      id: 3,
      title: "Instagram Clone",
      description: "A full-featured Instagram-like social media platform with user authentication, image uploading, real-time feeds, like/comment functionality, and user profiles. Built with modern web technologies, it demonstrates proficiency in full-stack development and responsive design.",
      tech: ["React", "Node.js", "PostgreSQL", "Firebase Storage"],
      icon: "📸"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-white" : "bg-gradient-to-b from-gray-100 via-white to-gray-100 text-black"}`}>

      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-black/40 backdrop-blur-md p-4 flex justify-between items-center z-50 border-b border-blue-500/20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Hemanth
        </motion.div>

        <div className="flex justify-center gap-8">
          {["About", "Skills", "Projects", "Certifications"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              className="hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* DARK MODE BUTTON */}
        <motion.button 
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg font-medium transition-all duration-300"
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>
      </motion.nav>

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="text-blue-400 text-lg font-semibold">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            variants={floatingVariants}
            animate="animate"
            className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Hemanth Durga
          </motion.h1>

          <motion.p variants={itemVariants} className="text-3xl md:text-4xl text-gray-300 mb-4 font-light">
            AI & Full Stack Developer
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Crafting intelligent systems that transform ideas into reality. Specialized in AI, Machine Learning, and modern web technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-10"
        >
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section 
        id="about" 
        className="relative py-32 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass mt-8 max-w-3xl mx-auto p-10 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
        >
          <p className="text-xl leading-relaxed">
            I'm a passionate Engineering student specializing in <span className="text-blue-400 font-semibold">AI and Full Stack Development</span>. 
            I love building intelligent systems that solve real-world problems. 
            With expertise in Python, JavaScript, React, and Machine Learning, I create seamless digital experiences.
          </p>
          <div className="flex gap-4 justify-center mt-6 flex-wrap">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-sm text-blue-300">Problem Solver</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-sm text-purple-300">Innovator</span>
            <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/50 rounded-full text-sm text-pink-300">Tech Enthusiast</span>
          </div>
        </motion.div>
      </motion.section>

      {/* SKILLS */}
      <motion.section 
        id="skills" 
        className="relative py-32 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-blue-400 font-bold text-lg mb-4 tracking-widest"
        >
          — TECHNICAL ARSENAL —
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto"
        >
          A curated set of languages, frameworks, and tools I've mastered through building real projects.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              category: "Programming Languages",
              icon: "➡️",
              skills: [
                { name: "C", fullName: "C" },
                { name: "Java", fullName: "Java" },
                { name: "Python", fullName: "Python" }
              ]
            },
            {
              category: "Web Development",
              icon: "🌐",
              skills: [
                { name: "HTML5", fullName: "HTML5" },
                { name: "CSS3", fullName: "CSS3" },
                { name: "JavaScript", fullName: "JavaScript" },
                { name: "Django", fullName: "Django" },
                { name: "Flask", fullName: "Flask" }
              ]
            },
            {
              category: "AI / ML",
              icon: "🤖",
              skills: [
                { name: "NumPy", fullName: "NumPy" },
                { name: "Pandas", fullName: "Pandas" },
                { name: "Scikit-learn", fullName: "Scikit-learn" },
                { name: "LLMs", fullName: "Large Language Models" }
              ]
            },
            {
              category: "Databases",
              icon: "💾",
              skills: [
                { name: "MySQL", fullName: "MySQL" },
                { name: "SQLite", fullName: "SQLite" },
                { name: "MongoDB", fullName: "MongoDB" }
              ]
            }
          ].map((skillGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)" }}
              className="glass p-8 border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl transition-all duration-300 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl"
            >
              <div className="text-5xl mb-6">{skillGroup.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-6">{skillGroup.category}</h3>
              
              <div className="space-y-3">
                {skillGroup.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300 transition-all inline-block">
                      ◆ {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section 
        id="projects" 
        className="relative py-32 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.length > 0 ? (
            projects.map((item, i) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)" }}
                className="glass p-8 border border-blue-400/20 hover:border-purple-400/60 rounded-xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="text-5xl mb-4 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-blue-300 group-hover:text-purple-300 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-xs text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg text-sm self-start"
                >
                  View Project →
                </motion.button>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-gray-400">Loading projects...</div>
          )}
        </motion.div>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section 
        id="certifications" 
        className="relative py-32 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Professional Certifications */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            className="glass p-8 border border-blue-400/20 hover:border-blue-400/60 rounded-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Professional Certificates</h3>
            <div className="space-y-4 text-left">
              {[
                { title: "AWS Academy Certificate", desc: "Cloud Computing & AWS Services" },
                { title: "Full-Stack Web Dev Bootcamp", desc: "HTML, CSS, JavaScript, React, Node.js" },
                { title: "Ethical Hacking", desc: "Cybersecurity & Security Testing" },
                { title: "Python Essentials", desc: "Python Programming Fundamentals" },
                { title: "Responsive Web Design", desc: "Mobile-First Web Development" },
                { title: "IoT Badge", desc: "Internet of Things Fundamentals" }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="p-3 bg-blue-500/10 border border-blue-400/30 rounded-lg hover:bg-blue-500/20 transition-all"
                >
                  <p className="font-semibold text-blue-300">{cert.title}</p>
                  <p className="text-sm text-gray-400">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hackathon Participations */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            className="glass p-8 border border-purple-400/20 hover:border-purple-400/60 rounded-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Hackathon Participations</h3>
            <div className="space-y-4 text-left">
              {[
                { title: "Next Wave Hackathon", desc: "Building innovative AI-powered solutions", year: "2025" },
                { title: "Vignan College Hackathon", desc: "Full-Stack Web Application Development", year: "2025" }
              ].map((hackathon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg hover:bg-purple-500/20 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-purple-300">{hackathon.title}</p>
                      <p className="text-sm text-gray-400">{hackathon.desc}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-bold text-white">
                      {hackathon.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-400/30 rounded-lg"
            >
              <p className="text-sm text-pink-300">🏆 Actively participated in competitive coding challenges and innovation competitions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <motion.section 
        className="relative py-20 text-center border-t border-gray-700/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-gray-400 mb-8"
          whileHover={{ scale: 1.05 }}
        >
          © 2026 Hemanth Durga | Crafted with <span className="text-red-400">❤️</span> using React & Tailwind CSS
        </motion.p>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-10 space-y-4"
        >
          <motion.a
            href="mailto:hemanthdurga003@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">📧</span>
            <span className="text-lg">hemanthdurga003@gmail.com</span>
          </motion.a>

          <motion.a
            href="tel:6301656502"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">📱</span>
            <span className="text-lg">+91 6301656502</span>
          </motion.a>

          <motion.a
            href="https://github.com/hemanthdurga003-sudo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">🐙</span>
            <span className="text-lg">github.com/hemanthdurga003-sudo</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {[
            { icon: "📧", label: "Email", link: "mailto:hemanthdurga003@gmail.com" },
            { icon: "🐙", label: "GitHub", link: "https://github.com/hemanthdurga003-sudo" },
            { icon: "📱", label: "Phone", link: "tel:6301656502" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target={social.label === "GitHub" ? "_blank" : "_self"}
              rel={social.label === "GitHub" ? "noopener noreferrer" : ""}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl opacity-60 hover:opacity-100 transition-opacity"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* CHATBOT */}
      <Chatbot />

    </div>
  );
}

export default App;