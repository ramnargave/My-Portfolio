import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Palette,
  PenTool,
  BarChart3,
  Bot,
  ArrowUpRight,
  NotebookPen,
} from "lucide-react";
import { href, Link, useLocation } from "react-router-dom";

// ---------------- DATA ----------------
const industries = [
  {
    id: 1,
    title: "Web Development",
    href: "/web-projects",
    desc: "Building scalable, SEO-friendly web apps using MERN Stack. I focus on speed, performance, and clean code architecture.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    bg: "bg-blue-950",
    border: "border-blue-800",
    text: "text-blue-200",
    icon: <Code2 className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    href: "/ui-ux-projects",
    desc: "Designing user-centric interfaces. From wireframing to high-fidelity prototypes, ensuring the best user experience.",
    tags: ["Figma", "Prototyping", "User Research", "Wireframing"],
    bg: "bg-purple-950",
    border: "border-purple-800",
    text: "text-purple-200",
    icon: <Palette className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
  },
  {
    id: 3,
    title: "Graphic Design",
    href: "/graphic-design-projects",
    desc: "Visual storytelling through advertisements, social media creatives, and product packaging that captures attention.",
    tags: ["Photoshop", "Illustrator", "Brand Identity", "Packaging"],
    bg: "bg-orange-950",
    border: "border-orange-800",
    text: "text-orange-200",
    icon: <PenTool className="w-8 h-8 md:w-12 md:h-12 text-orange-400" />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    href: "/digital-marketing-projects",
    desc: "Driving growth through data-driven campaigns. Expertise in SEO optimization and targeted ad strategies.",
    tags: ["SEO", "Google Ads", "Content Strategy", "Analytics"],
    bg: "bg-green-950",
    border: "border-green-800",
    text: "text-green-200",
    icon: <BarChart3 className="w-8 h-8 md:w-12 md:h-12 text-green-400" />,
  },
  {
    id: 5,
    title: "AI Prompt Mastery",
    href: "/ai-prompt",
    desc: "Leveraging Generative AI tools to automate workflows, generate high-quality assets, and solve problems faster.",
    tags: ["ChatGPT", "Midjourney", "Prompt Engineering", "Automation"],
    bg: "bg-indigo-950",
    border: "border-indigo-800",
    text: "text-indigo-200",
    icon: <Bot className="w-8 h-8 md:w-12 md:h-12 text-indigo-400" />,
  },
];

// ---------------- CARD COMPONENT ----------------
const Card = ({ item, index, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const location = useLocation();

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className={`relative flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-5xl h-[65vh] md:h-[500px] rounded-3xl p-8 md:p-12 border ${item.border} ${item.bg} shadow-2xl origin-top overflow-hidden`}
      >
        {/* TEXT CONTENT (Left) */}
        <div className="flex flex-col justify-between md:w-3/5 z-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                {item.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {item.title}
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {item.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 ${item.text}`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <Link to={item.href} className="flex items-center gap-2 text-white font-semibold group cursor-pointer">
              View Projects
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* VISUAL DECORATION (Right) */}
        <div className="absolute md:relative right-0 bottom-0 md:w-2/5 h-full opacity-20 md:opacity-100 pointer-events-none md:pointer-events-auto">
          {/* Abstract Gradient Blob */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] bg-white/20`}
          />

          {/* Large Number Watermark */}
          <span className="absolute bottom-[-20px] right-[-20px] text-[150px] md:text-[200px] font-black text-white/5 leading-none select-none">
            0{item.id}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default function IndustryScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="relative text-white pt-10 pb-0 md:pt-20 md:pb-20"
    >
      {/* Header */}
      <div className="flex gap-3 items-center md:justify-start justify-center pb-3">
  <div className="hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A5AF9] to-[#FF6AC2] items-center justify-center">
       <NotebookPen className="w-6 h-6 " />
  </div>
  <h2 className="text-xl md:text-2xl font-semibold text-black">
    Industries & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" >Projects</span>
  </h2>
</div>


      <div>
                <p className="text-sm md:text-xl text-gray-400 max-w-2xl p-5 md:p-0 text-center md:text-start">
          A breakdown of my technical expertise and the value I bring to every
          project.
        </p>
      </div>

      {/* Cards Loop */}
      <div className="flex flex-col gap-10">
        {industries.map((item, i) => {
          const targetScale = 1 - (industries.length - i) * 0.05;
          return (
            <Card
            
              key={i}
              index={i}
              item={item}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
