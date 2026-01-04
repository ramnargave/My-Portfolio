import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "Modern personal portfolio with advanced animations and interactivity.",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "React",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop",
    live: "https://ramnargave-portfolio.netlify.app/",
    code: "https://github.com/ramnargave/My-Portfolio",
    featured: false,
  },
  {
    id: 2,
    title: "Food Franchise Management",
    desc: "A scalable multi-outlet food ordering platform with real-time tracking.",
    tech: ["React", "Firebase", "Redux", "Chart.js"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    live: "https://food-franchise-managment.netlify.app/",
    code: "https://github.com/ramnargave/Franchise-Managment-Firebase",
    featured: true,
  },
  {
    id: 3,
    title: "Netflix Page UI",
    desc: "High-conversion landing page with clean aesthetics and responsiveness.",
    tech: ["React", "Tailwind",],
    category: "UI Projects",
    image: "https://vitrina.ai/wp-content/uploads/2024/12/netflix.webp",
    live: "#",
    code: "https://github.com/ramnargave/Netflix-Clone",
    featured: true,
  },
  {
    id: 4,
    title: "Electronic Franchise platform",
    desc: "Admin dashboard for managing products, orders, and analytics.",
    tech: ["React", "Chart.js", "Firebase"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    live: "https://mini-mobile-eccomerce.netlify.app/",
    code: "https://github.com/ramnargave/Mini-Mobile-Complete-E-Com",
    featured: false,
  },
  {
    id: 5,
    title: "Mobile E-Commerce",
    desc: "Admin dashboard for managing products, orders, and analytics.",
    tech: ["React", "Chart.js", "Firebase"],
    category: "Full Stack",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCou9VuyIKrb6NcZnVWY4aVHgOZzHtBl74GQ&s",
    live: "https://mobile-eccomerce.netlify.app/",
    code: "https://github.com/ramnargave/Complete-E-Commerce-Firebase",
    featured: false,
  },
    {
    id: 5,
    title: "Virtual Assistant",
    desc: "Virtual Asistant",
    tech: ["Python", "Speech Recognition", "APIs"],
    category: "Python",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LVZPNiw5GpxUZR9AYupIWga6N1KjWPsEsg&s",
    live: "#",
    code: "https://github.com/ramnargave/virtual-assistant",
    featured: false,
  },
];

const filters = ["All", "Python", "JavaScript", "React", "Full Stack", "UI Projects"];

// Icons (Inline SVG to avoid external dependencies)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 4-1 5 .28 2.15 1.03 3.8 2 5 1.37-.53 2.8-.53 4.2 0 1.5 2 6 2 4.5v1h1"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" 
    ? projectsData 
    : projectsData.filter((p) => p.category === active);

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decor (Optional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* ---------------- HERO HEADER ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-xl font-bold tracking-widest text-blue-600 uppercase mb-1">
            My Project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing my Coding work & experience          </p>
        </motion.div>

        {/* ---------------- FILTERS ---------------- */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-2xl md:rounded-full shadow-sm border border-gray-100">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 
                  ${active === f ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
              >
                {active === f && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- FEATURED SECTION ---------------- */}
        


        {/* ---------------- ALL PROJECTS GRID ---------------- */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <a href={project.live} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition shadow-lg" title="Live Site">
                       <ExternalLinkIcon />
                    </a>
                    <a href={project.code} className="p-2 bg-gray-900 rounded-full text-white hover:scale-110 transition shadow-lg" title="View Code">
                       <GithubIcon />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 font-medium rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ---------------- CTA SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 relative rounded-3xl overflow-hidden bg-gray-900 text-white text-center py-20 px-6"
        >
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px]" />
             <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              I'm currently available for freelance projects and open to full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:scale-105 transition transform shadow-lg hover:shadow-white/25">
                Start a Project
              </a>
              <a href="#" className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white transition transform">
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}