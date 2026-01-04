import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Figma, Smartphone, Zap, Layout } from "lucide-react";

// ---------------- PROJECT DATA ----------------
const bentoItems = [
  {
    id: 1,
    title: "Neobank Mobile App",
    category: "Mobile UI",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    colSpan: "md:col-span-2", // Bada Card (Wide)
    bg: "bg-blue-600",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    colSpan: "md:col-span-1", // Chota Card (Square)
    bg: "bg-purple-600",
  },
  {
    id: 3,
    title: "Design System Doc",
    category: "Documentation",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    bg: "bg-pink-600",
  },
  {
    id: 4,
    title: "Fashion E-Commerce",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    bg: "bg-orange-600",
  },
  {
    id: 5,
    title: "Smart Home Controller",
    category: "IoT Interface",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-3", // Full Width Card
    bg: "bg-emerald-600",
  },
];

export default function UiUxPortfolio() {
  return (
    <section className="min-h-screen py-20 px-4 flex justify-center">
      
      <div className="max-w-6xl w-full">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div className="font-serif uppercase" >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Selected Work</h2>
            <p className=" text-lg">
              A collection of interface designs & user experiences.
            </p>
          </div>
          
          {/* Status Badge */}
          <div className="mt-4 md:mt-0 flex gap-2">
             <span className="px-4 py-1.5 rounded-full border border-black/20 text-sm font-medium text-gray-800">
                2024-25
             </span>
             <span className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-bold flex items-center gap-2">
                <Layout size={14} /> UI/UX
             </span>
          </div>
        </div>

        {/* ---------------- BENTO GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 ${item.colSpan} min-h-[320px] cursor-pointer shadow-lg`}
            >
              
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${item.bg} shadow-[0_0_10px_currentColor]`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Animated Arrow Button */}
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Tool Badges (Top Right - Visible on Hover) */}
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                 <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Figma size={14} className="text-purple-400" /> Figma
                 </div>
                 {item.category === "Mobile UI" && (
                    <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold flex items-center gap-1.5">
                       <Smartphone size={14} className="text-blue-400" /> iOS
                    </div>
                 )}
              </div>

            </motion.div>
          ))}

          {/* ---------------- PROCESS CARD ---------------- */}
          {/* Yeh last wala card aapke process ko dikhane ke liye hai */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 bg-white text-black rounded-3xl p-8 flex flex-col justify-between min-h-[320px] shadow-2xl"
          >
             <div>
               <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                 <Zap size={24} />
               </div>
               <h3 className="text-3xl font-bold mb-2">My Process</h3>
               <p className="text-gray-600 font-medium">From vague idea to polished product.</p>
             </div>
             
             <div className="space-y-3 mt-6">
                {["Research", "Wireframe", "Prototype", "Test"].map((step, j) => (
                  <div key={step} className="flex items-center gap-4 border-b border-gray-200 pb-2">
                    <span className="text-xs font-bold text-gray-400">0{j+1}</span>
                    <span className="font-bold text-lg tracking-tight">{step}</span>
                  </div>
                ))}
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}