import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Copy, 
  Terminal, 
  Cpu, 
  Image as ImageIcon, 
  MessageSquare,
  Check
} from "lucide-react";

// ---------------- DATA: AI PROMPTS ----------------
const categories = ["All", "Midjourney", "Stable Diffusion", "ChatGPT Code", "DALL-E 3"];

const aiProjects = [
  {
    id: 1,
    tool: "Midjourney",
    category: "Midjourney",
    title: "Cyberpunk City",
    image: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?q=80&w=1935&auto=format&fit=crop",
    prompt: "/imagine prompt: A futuristic cyberpunk city street at night, neon lights reflecting on wet pavement, towering skyscrapers with holographic advertisements, cinematic lighting, photorealistic, 8k, --ar 16:9 --v 5.2",
    color: "text-purple-400 border-purple-500/50",
    bg: "bg-purple-500/10"
  },
  {
    id: 2,
    tool: "DALL-E 3",
    category: "DALL-E 3",
    title: "Surreal Portrait",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1935&auto=format&fit=crop",
    prompt: "A surreal double exposure portrait of a woman and a galaxy, vibrant colors, stardust, dreamlike atmosphere, digital art style.",
    color: "text-blue-400 border-blue-500/50",
    bg: "bg-blue-500/10"
  },
  {
    id: 3,
    tool: "Stable Diffusion",
    category: "Stable Diffusion",
    title: "Fantasy Landscape",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1868&auto=format&fit=crop",
    prompt: "(masterpiece), best quality, landscape, mountains, clouds, sunset, highly detailed, sharp focus, 8k wallpaper",
    color: "text-green-400 border-green-500/50",
    bg: "bg-green-500/10"
  },
  {
    id: 4,
    tool: "Midjourney",
    category: "Midjourney",
    title: "Product Mockup",
    image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=1858&auto=format&fit=crop",
    prompt: "/imagine prompt: Minimalist skincare bottle mockup, standing on a rock in the middle of a calm lake, soft sunlight, nature background, ultra realistic --v 5",
    color: "text-purple-400 border-purple-500/50",
    bg: "bg-purple-500/10"
  },
  {
    id: 5,
    tool: "ChatGPT",
    category: "ChatGPT Code",
    title: "Python Automation Script",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    prompt: "Write a Python script using Selenium to automate Instagram login and like the top 10 posts of a specific hashtag. Include error handling and comments.",
    color: "text-emerald-400 border-emerald-500/50",
    bg: "bg-emerald-500/10",
    isCode: true
  },
  {
    id: 6,
    tool: "Midjourney",
    category: "Midjourney",
    title: "Anime Character",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop",
    prompt: "/imagine prompt: Anime style samurai warrior, standing in cherry blossom forest, petals falling, dramatic wind, katana drawn, Studio Ghibli art style --nijijourney",
    color: "text-pink-400 border-pink-500/50",
    bg: "bg-pink-500/10"
  },
];

export default function AiPortfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const filtered = activeTab === "All" ? aiProjects : aiProjects.filter(p => p.category === activeTab);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden font-sans">
      
      {/* ---------------- BACKGROUND EFFECTS ---------------- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ---------------- HERO HEADER ---------------- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-mono mb-4"
          >
            <Terminal size={14} /> AI_PROMPT_ENGINEER_MODE_ON
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Words</span> into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reality</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mastering the language of AI. A showcase of advanced prompt engineering for Midjourney, DALL-E, and LLMs.
          </p>
        </div>

        {/* ---------------- FILTERS ---------------- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 border backdrop-blur-md
                ${activeTab === cat 
                  ? "bg-white/10 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                  : "bg-transparent border-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---------------- PROJECTS GRID ---------------- */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl h-[400px]`}
              >
                
                {/* --- BACKGROUND IMAGE --- */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                />
                
                {/* --- CODE OVERLAY (Visible on Hover) --- */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                  
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-md text-xs font-bold border ${item.color} ${item.bg}`}>
                      {item.tool}
                    </span>
                    <button 
                      onClick={() => handleCopy(item.prompt, item.id)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Copy Prompt"
                    >
                      {copiedId === item.id ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* Prompt Text (Typewriter Feel) */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">
                      // Prompt Input
                    </p>
                    <div className="font-mono text-sm text-green-300 leading-relaxed overflow-hidden">
                      <span className="text-pink-500 mr-2">$</span>
                      {item.prompt}
                      <span className="animate-pulse inline-block w-2 h-4 bg-green-400 align-middle ml-1" />
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-1">
                      <Cpu size={14} /> <span>High Res</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles size={14} /> <span>v5.2</span>
                    </div>
                  </div>

                </div>

                {/* --- DEFAULT VIEW (Text at bottom) --- */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                   <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                   <div className="flex items-center gap-2 text-sm text-gray-400">
                      {item.isCode ? <Terminal size={14} /> : <ImageIcon size={14} />}
                      <span>Hover to reveal prompt</span>
                   </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ---------------- CTA / CONTACT ---------------- */}
        <div className="mt-20 text-center border-t border-white/10 pt-10">
           <h3 className="text-2xl font-semibold mb-2">Need Custom AI Work?</h3>
           <p className="text-gray-400 mb-6">I can generate assets for your next project or build automation scripts.</p>
           <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
             Hire Me for AI
           </button>
        </div>

      </div>
    </section>
  );
}