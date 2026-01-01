import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Mail } from "lucide-react";
import Ram from "../../assets/Ram.png"; // Aapki image ka path sahi rakhein

// ----------------- TYPEWRITER HOOK (Custom) -----------------
const useTypewriter = (
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000
) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0); // Reset to first word
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return `${words[index % words.length].substring(0, subIndex)}${
    blink ? "|" : " "
  }`;
};

// ----------------- ICONS DATA -----------------
// Outer Circle (Design/Tools)
const outerIcons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
    alt: "Photoshop",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
    alt: "Premiere",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg",
    alt: "Illustrator",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    alt: "Canva",
  },
];

// Inner Circle (Coding)
const innerIcons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
];

function HeroSection() {
  const typedText = useTypewriter([
    "Full-Stack Developer",
    "UI/UX Designer",
    "Video Editor",
    "Creative Thinker",
  ]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-10 md:pt-0">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-5 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* ---------------- LEFT SIDE: TEXT ---------------- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
          <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-2">
            Hello, It's Me
          </h2>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            Ramchandra <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Nargave
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 h-10">
            I am a <span className="text-purple-600 font-mono">{typedText}</span>
          </div>

          <p className="text-gray-600 max-w-lg mb-8 leading-relaxed text-lg">
            Bridging the gap between creative design and technical engineering.
            I build brands, code websites, and edit stories.
          </p>

          {/* ------------------------------------------Buttons Section------------------------------------------ */}

          <div className="mt-3 w-full justify-center md:justify-start flex gap-5">
            {/* Resume Download Button  */}

            <motion.a
              href="/Ram.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white \

              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 \

              shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40 transition"
            >
              <ArrowDownToLine size={16} /> Download
            </motion.a>

            {/* Reach out Button  */}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white \

              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 \

              shadow-lg shadow-indigo-500/30 hover:shadow-pink-500/40 transition"
            >
              <Mail size={16} /> reach Out
            </motion.a>
          </div>
        </div>

        {/* ---------------- RIGHT SIDE: ORBIT ANIMATION ---------------- */}
        <div className="relative flex justify-center items-center h-[500px] w-full mt-5 md:mt-0">
          {/* Main Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl"
          >
            <img
              src={Ram}
              alt="Ram Nargave"
              className="w-full h-full object-cover mt-8 scale-110"
            />
          </motion.div>

          {/* --- INNER ORBIT (CODE) --- */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] border border-dashed border-gray-300 rounded-full z-0"
          >
            {innerIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 md:w-14 md:h-14 bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center justify-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${
                    i * (360 / innerIcons.length)
                  }deg) translate(170px) rotate(-${
                    i * (360 / innerIcons.length)
                  }deg)`,
                  // Note: translate value should match half of width/height roughly (170px for mobile, adjust via media query if needed)
                }}
              >
                <motion.img
                  animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-full h-full"
                />
              </div>
            ))}
          </motion.div>

          {/* --- OUTER ORBIT (DESIGN) --- */}
          <motion.div
            animate={{ rotate: -360 }} // Rotates opposite direction
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[480px] h-[480px] md:w-[600px] md:h-[600px] border border-gray-200/60 rounded-full z-0 opacity-70 hidden sm:block"
          >
            {outerIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md border border-gray-100 flex items-center justify-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${
                    i * (360 / outerIcons.length)
                  }deg) translate(300px) rotate(-${
                    i * (360 / outerIcons.length)
                  }deg)`,
                }}
              >
                <motion.img
                  animate={{ rotate: 360 }} // Counter-rotate
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
