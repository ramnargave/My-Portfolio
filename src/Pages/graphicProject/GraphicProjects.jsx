import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Download, ExternalLink, Palette } from "lucide-react";

// ---------------- DATA: GRAPHIC WORKS ----------------
const categories = ["All", "Packaging", "Social Media", "Posters", "Branding"];

const portfolioItems = [
  {
    id: 1,
    category: "Packaging",
    title: "Organic Juice Bottle",
    desc: "Label design & 3D Mockup for a fresh juice brand.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
    cols: "h-96", // Taller for vertical images
  },
  {
    id: 2,
    category: "Social Media",
    title: "Nike Air Campaign",
    desc: "Instagram carousel design for sneaker launch.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    cols: "h-64",
  },
  {
    id: 3,
    category: "Branding",
    title: "Coffee Shop Identity",
    desc: "Logo, Menu, and Cup design for 'Brew & Bean'.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    cols: "h-72",
  },
  {
    id: 4,
    category: "Posters",
    title: "Music Festival Poster",
    desc: "Neon aesthetic poster for an EDM concert.",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1887&auto=format&fit=crop",
    cols: "h-[28rem]", // Extra tall
  },
  {
    id: 5,
    category: "Packaging",
    title: "Skincare Box",
    desc: "Minimalist luxury box design for serum.",
    image: "https://images.unsplash.com/photo-1556228720-1929345bb38c?q=80&w=1887&auto=format&fit=crop",
    cols: "h-80",
  },
  {
    id: 6,
    category: "Posters",
    title: "Movie Premiere",
    desc: "Action movie poster manipulation.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
    cols: "h-64",
  },
  {
    id: 7,
    category: "Branding",
    title: "Tech Startup Logo",
    desc: "Modern geometric logo and business card.",
    image: "https://images.unsplash.com/photo-1626785774573-4b7993125637?q=80&w=2070&auto=format&fit=crop",
    cols: "h-72",
  },
];

export default function GraphicDesign() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="min-h-screen bg-neutral-900 text-white py-20 px-4 relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300">
            <Palette size={16} /> Visual Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Crafting Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated gallery of my best work in packaging, branding, and digital advertising.
          </p>
        </div>

        {/* ---------------- FILTER TABS ---------------- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeTab === cat
                    ? "bg-white text-black border-white scale-105"
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---------------- MASONRY GRID ---------------- */}
        <motion.div 
          layout 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in border border-white/5 shadow-lg bg-gray-800"
                onClick={() => setSelectedImg(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay (Hidden by default, slides up on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{item.desc}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80">
                      <ZoomIn size={16} /> Click to Expand
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---------------- LIGHTBOX MODAL ---------------- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition">
              <X size={24} />
            </button>

            <div 
              className="relative max-w-5xl w-full max-h-full flex flex-col md:flex-row gap-8 bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
              
              {/* Image Side */}
              <div className="md:w-2/3 h-[50vh] md:h-[80vh] bg-black">
                <img 
                  src={selectedImg.image} 
                  alt={selectedImg.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Side */}
              <div className="md:w-1/3 p-8 flex flex-col justify-center bg-neutral-900">
                <span className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-2">
                  {selectedImg.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedImg.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {selectedImg.desc} <br /><br />
                  This project involved creating high-fidelity visuals using Adobe Photoshop and Illustrator. The goal was to capture the brand's essence through color theory and typography.
                </p>
                
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition">
                    <ExternalLink size={18} /> View Project
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition">
                    <Download size={18} /> Save Image
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}