import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", },
  { label: "About", href: "#about" },
  { label: "Work", href: "/webprojects" },
  { label: "Skills", href: "#skills" },
];

 function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      {/* Navbar */}
      <div
        className={`transition-all duration-300 border-b border-white/10 ${
          scrolled
            ? "backdrop-blur-xl bg-black/60"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-[#b558eb] hover:text-indigo-400 transition"
          >
            Ram<span className="text-indigo-400">.</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={item.href}
                    className="group relative text-sm font-semibold hover:text-gray-700 transition"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 transition-all group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40 transition"
            >
              <Mail size={16} /> Reach Out
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden backdrop-blur-xl bg-black/90 border-b border-white/10 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-gray-300 hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            <Mail size={18} /> Reach Out
          </a>
        </ul>
      </motion.div>
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(false)}
       className={` ${ open ? 'block' : 'hidden' } z-30 md:hidden h-[100vh] w-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100 `} 
       > 
      </motion.div>
    </header>
  );
}

export default React.memo(Navbar);