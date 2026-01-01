import { motion } from "framer-motion";

export default function WebProjectCar({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.9 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 
                 rounded-2xl p-6 hover:scale-105 transition-all duration-300
                 hover:border-cyan-400/40 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-cyan-400 mb-3">
        {project.tech}
      </p>

      <p className="text-gray-400 text-sm leading-relaxed">
        {project.desc}
      </p>

      <button className="mt-6 w-full py-2 rounded-xl bg-cyan-500/20
                         hover:bg-cyan-500 hover:text-black
                         transition-all font-medium">
        View Project
      </button>
    </motion.div>
  );
}
