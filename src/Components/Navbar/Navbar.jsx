import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Home, User, Briefcase, Mail, Sparkles, 
  Code2, Palette, PenTool, Bot, ChevronDown, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

// ---------------- DATA CONFIG ----------------
const navLinks = [
  { name: "Home", href: "#home", icon: <Home size={18} /> },
  { name: "About", href: "#about", icon: <User size={18} /> },
  { 
    name: "Projects", 
    href: "#projects", 
    icon: <Briefcase size={18} />,
    hasDropdown: true,
    subMenu: [
      { title: "Web Development", icon: <Code2 size={16} />, href: "/web-development" },
      { title: "UI/UX Design", icon: <Palette size={16} />, href: "/uiux" },
      { title: "Graphic Design", icon: <PenTool size={16} />, href: "/graphic-design-projects" },
      { title: "AI Prompts", icon: <Bot size={16} />, href: "/ai-prompt" },
    ]
  },
  { name: "Skills", href: "#skills", icon: <Sparkles size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Mobile States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // Toggle for mobile accordion

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ---------------- DESKTOP NAVBAR (Large Screens) ---------------- */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={`pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-500
            ${isScrolled ? "bg-black/90 scale-95" : "bg-black/60 scale-100"}
          `}
        >
          {/* Logo */}
          <Link to={'/'} className="pl-4 pr-4 flex items-center gap-2 font-bold text-white cursor-pointer group">
            <div className="bg-blue-600 p-1 rounded-lg group-hover:rotate-12 transition-transform">
               <span className="text-white font-mono text-xs">RN</span>
            </div>
            <span className="tracking-tight">RAM.DEV</span>
          </Link>

          <div className="w-[1px] h-6 bg-white/10 mx-2" />

          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  setHoveredTab(link.name);
                  if (link.hasDropdown) setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredTab(null);
                  if (link.hasDropdown) setIsDropdownOpen(false);
                }}
              >
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2
                    ${hoveredTab === link.name ? "text-white" : "text-gray-400"}
                  `}
                >
                  {hoveredTab === link.name && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 border border-white/5 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {link.name} 
                    {link.hasDropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />}
                  </span>
                </a>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl overflow-hidden p-2 backdrop-blur-3xl"
                    >
                      <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" /> {/* Bridge */}
                      <div className="flex flex-col gap-1">
                        {link.subMenu.map((subItem) => (
                          <a key={subItem.title} href={subItem.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors group/item">
                            <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover/item:text-white group-hover/item:bg-blue-600 transition-colors">
                              {subItem.icon}
                            </div>
                            <p className="text-sm font-medium text-gray-200 group-hover/item:text-white">{subItem.title}</p>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="pl-2">
            <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition active:scale-95">
              Hire Me
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ---------------- MOBILE NAVBAR (Phone Screens) ---------------- */}
      <Link to={'/'} className="md:hidden fixed top-5 left-0 right-0 z-50 px-4 py-4 flex justify-between items-center pointer-events-none">
        {/* Mobile Logo */}
        <div className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
           <div className="bg-blue-600 p-1 rounded-md"><span className="text-white text-[10px] font-bold">RN</span></div>
           <span className="text-white font-bold text-sm">RAM.DEV</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="pointer-events-auto p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white active:scale-90 transition-transform shadow-lg"
        >
          <Menu size={24} />
        </button>
      </Link>

      {/* ---------------- MOBILE DRAWER OVERLAY ---------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-neutral-950 text-white flex flex-col md:hidden"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-xl font-bold">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  {/* Main Link Item */}
                  <div 
                    onClick={() => {
                      if (link.hasDropdown) {
                        setMobileSubmenuOpen(!mobileSubmenuOpen);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="flex justify-between items-center text-2xl font-semibold text-gray-300 hover:text-white cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      {link.icon} {link.name}
                    </span>
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${mobileSubmenuOpen ? "rotate-180" : ""}`} 
                      />
                    )}
                  </div>

                  {/* Mobile Submenu (Accordion) */}
                  <AnimatePresence>
                    {link.hasDropdown && mobileSubmenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 mt-4 ml-4 pl-4 border-l border-white/20">
                          {link.subMenu.map((sub, j) => (
                            <a 
                              key={j} 
                              href={sub.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 text-lg text-gray-400 hover:text-white"
                            >
                              <div className="p-1.5 bg-white/5 rounded-md">{sub.icon}</div>
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-white/10">
              <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 active:scale-95 transition">
                Start a Project <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}