import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "XYZ Tech Solutions",
    duration: "Jan 2024 – Jun 2024",
    description:
      "Built responsive UI using React.js & Tailwind CSS. Worked on dashboards, reusable components and performance optimization.",
  },
  {
    role: "React.js Developer",
    company: "Freelance / Client Projects",
    duration: "Jul 2024 – Present",
    description:
      "Created animated portfolios, admin panels and modern web apps using React, Firebase and Framer Motion.",
  },
  {
    role: "Web Developer Trainee",
    company: "ABC Institute",
    duration: "Aug 2023 – Dec 2023",
    description:
      "Learned HTML, CSS, JavaScript fundamentals and built multiple mini projects with clean UI practices.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Experience = () => {
  return (
    <section className="mt-0 md:mt-10 px-5 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <div className="flex gap-3 items-center md:justify-start justify-center pb-3">
  <div className="hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A5AF9] to-[#FF6AC2] items-center justify-center">
       <GoFileDirectory className="w-6 h-6 " />
  </div>
       <span className="text-transparent text-xl md:text-2xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" >Experience</span>
</div>
       
        <p className="text-gray-500 max-w-2xl text-sm md:text-xl">
          A clear overview of my professional journey, roles, and the real-world
          projects I’ve worked on.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="
              relative rounded-2xl p-6
             backdrop-blur-xl
              border border-white/30
              shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              transition
            "
          >
            {/* Gradient Accent */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none" />

            <div className="relative">
              {/* Top */}
              <div className="block md:flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center">
                    <FiBriefcase className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 md:mb-0
                    
                    
                    ">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 whitespace-nowrap ml-10">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
