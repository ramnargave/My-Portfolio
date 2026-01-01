import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------- DATA STRUCTURE ----------------
const categories = [
  { id: "dev", label: "Development", icon: "code" },
  { id: "design", label: "UI & Graphics", icon: "pen" },
  { id: "video", label: "Video & VFX", icon: "video" },
  { id: "marketing", label: "Marketing", icon: "chart" },
];

const skills = {
  dev: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB", desc: "Framework" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38B2AC", desc: "Styling" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E", desc: "Language" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933", desc: "Backend" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248", desc: "Database" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032", desc: "Version Control" },
  ],
  design: [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E", desc: "UI Design" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg", color: "#31A8FF", desc: "Editing" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg", color: "#FF9A00", desc: "Vector" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", color: "#00C4CC", desc: "Quick Design" },
  ],
  video: [
    { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg", color: "#9999FF", desc: "Editing" },
    { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", color: "#9999FF", desc: "Motion Graphics" },
    { name: "DaVinci", icon: "https://img.icons8.com/color/48/000000/davinci-resolve.png", color: "#FF5C5C", desc: "Color Grading" }, // Using icons8 for Davinci as devicon might lack it
  ],
  marketing: [
    { name: "Google Ads", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", color: "#4285F4", desc: "PPC" },
    { name: "Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg", color: "#E37400", desc: "Data" },
    { name: "SEO", icon: "https://cdn-icons-png.flaticon.com/512/2620/2620987.png", color: "#34D399", desc: "Optimization" },
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  show: { y: 0, opacity: 1, scale: 1 }
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("dev");

  return (
    <section className="relative py-5 px-6  overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tools</span>
          </h2>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 outline-none
                ${activeTab === cat.id ? "text-white" : "text-gray-500 hover:bg-gray-200"}
              `}
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gray-900 rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <motion.div
          key={activeTab} // Key changes trigger re-animation
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {skills[activeTab].map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Glow Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" 
                  style={{ backgroundColor: tech.color }}
                />
                
                {/* Border Bottom Color */}
                <div 
                   className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                   style={{ backgroundColor: tech.color }}
                />

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative w-16 h-16 p-3 rounded-2xl bg-gray-50 group-hover:bg-white transition-colors duration-300">
                     <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-black text-lg">{tech.name}</h3>
                    <p className="text-xs text-black font-medium uppercase tracking-wider mt-1">{tech.desc}</p>
                  </div>
                </div>

                {/* Top Right Dot */}
                <div 
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}