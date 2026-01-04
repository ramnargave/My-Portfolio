import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Download, ExternalLink, Palette } from "lucide-react";

// ---------------- DATA: GRAPHIC WORKS ----------------
const categories = ["All", "Packaging", "Social Media", "Posters", "Branding"];

const portfolioItems = [
  {
    id: 1,
    category: "Social Media",
    title: "Berry Blast Juice",
    desc: "",
    image:
      "https://i.pinimg.com/736x/df/a4/35/dfa435058fe9caf2421d4f37309cc78b.jpg",
    cols: "h-96", // Taller for vertical images
  },
  {
    id: 2,
    category: "Social Media",
    title: "Nike Air Campaign",
    desc: "Instagram carousel design for sneaker launch.",
    image:
      "https://i.pinimg.com/474x/6c/ef/d8/6cefd88902c75aececdcfdac3909b556.jpg",
    cols: "h-64",
  },
  {
    id: 3,
    category: "Posters",
    title: "3D Model Character",
    desc: "",
    image:
      "https://i.pinimg.com/474x/ba/16/4f/ba164f060d75e8f330d4933131291957.jpg",
    cols: "h-72",
  },
  {
    id: 4,
    category: "Social Media",
    title: "Air Shoes",
    desc: "Minimalist luxury box design for serum.",
    image:
      "https://i.pinimg.com/736x/c2/97/db/c297db9d46e04d2caffb653256df8a1b.jpg",
    cols: "h-64",
  },

  {
    id: 5,
    category: "Social Media",
    title: "Cheese Burger",
    desc: "Vibrant social media ad for burger joint.",
    image:
      "https://i.pinimg.com/474x/b1/cd/56/b1cd5627eef71cffe53c50601e2d5e31.jpg",
    cols: "h-72",
  },
  {
    id: 6,
    category: "Social Media",
    title: "Pizza Creative Design",
    desc: "Eye-catching Instagram post for pizza promotion.",
    image:
      "https://i.pinimg.com/474x/85/c6/0f/85c60f1e19caf207c8e03f27da06ea79.jpg",
    cols: "h-64",
  },

  {
    id: 7,
    category: "Social Media",
    title: "Luxury Perfume Ad",
    desc: "Elegant poster design for perfume brand.",
    image:
      "https://i.pinimg.com/474x/10/de/07/10de0704e9d6293fc6bf11aa4ad836aa.jpg",
    cols: "h-[28rem]", // Extra tall
  },
  {
    id: 8,
    category: "Social Media",
    title: "Pizza Creative Design",
    desc: "Eye-catching Instagram post for pizza promotion.",
    image:
      "https://i.pinimg.com/474x/68/a6/35/68a6350d531119e8c8014d5d1ab5dd8e.jpg",
    cols: "h-64",
  },
  {
    id: 9,
    category: "Social Media",
    title: "Premium Biryani Creative",
    desc: "Eye-catching Instagram post for biryani promotion.",
    image:
      "https://i.pinimg.com/474x/32/7e/46/327e467a56a849f0379c6aab1e61aecb.jpg",
    cols: "h-64",
  },
  {
    id: 10,
    category: "Social Media",
    title: "Har Chuski Ek Nayi Raahat",
    desc: "Eye-catching Instagram post for chai",
    image:
      "https://i.pinimg.com/474x/b6/ac/03/b6ac03b42d3e243e135448433b61d7a7.jpg",
    cols: "h-64",
  },
  {
    id: 11,
    category: "Social Media",
    title: "Living Space",
    desc: "Cozy and modern living room design.",
    image:
      "https://i.pinimg.com/474x/43/72/5a/43725ac0719e5569bbfcfd4d33cf007b.jpg",
    cols: "h-64",
  },
  {
    id: 12,
    category: "Social Media",
    title: "Creative Iphone 17 Poster Design",
    desc: "Futuristic poster design for iPhone 17 launch.",
    image:
      "https://i.pinimg.com/474x/13/9b/fd/139bfd762735f4a079acd1c43d3cd01e.jpg",
    cols: "h-64",
  },
  {
    id: 13,
    category: "Social Media",
    title: "This or That",
    desc: "Creative Chai advertisement poster design.",
    image:
      "https://i.pinimg.com/474x/de/cb/3d/decb3d1cc1f3943898de7940505ce212.jpg",
    cols: "h-64",
  },
  {
    id: 14,
    category: "Packaging",
    title: "Medicine Box Design",
    desc: "Sleek and professional medicine box packaging.",
    image:
      "https://i.pinimg.com/736x/ec/f9/c1/ecf9c15726c4ac15e35610876ff8b95d.jpg",
    cols: "h-64",
  },
  {
    id: 15,
    category: "Packaging",
    title: "Medicine Box Design",
    desc: "Sleek and professional medicine box packaging.",
    image:
      "https://i.pinimg.com/736x/74/42/36/744236f9ba656d83545097e59eb887c7.jpg",
    cols: "h-64",
  },
    {
    id: 16,
    category: "Packaging",
    title: "Medicine Box Design",
    desc: "Sleek and professional medicine box packaging.",
    image:
      "https://i.pinimg.com/736x/76/1a/ee/761aee7db6280c6de21488d929d4722f.jpg",
    cols: "h-64",
  },
      {
    id: 16,
    category: "Packaging",
    title: "Medicine Box Design",
    desc: "Sleek and professional medicine box packaging.",
    image:
      "https://i.pinimg.com/736x/f4/53/8f/f4538f79e26f58386b7f8112b3671b59.jpg",
    cols: "h-64",
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
        <div className="text-center mb-16 space-y-4 font-serif uppercase">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300">
            <Palette size={16} /> Visual Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Crafting Visual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Stories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated gallery of my best work in packaging, branding, and
            digital advertising.
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
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.desc}
                    </p>

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
                  {selectedImg.desc} <br />
                  <br />
                  This project involved creating high-fidelity visuals using
                  Adobe Photoshop and Illustrator. The goal was to capture the
                  brand's essence through color theory and typography.
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
