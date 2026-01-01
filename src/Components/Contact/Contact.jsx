import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare, FiArrowUpRight, } from "react-icons/fi";
import { FaArrowUp} from "react-icons/fa";


const Contact = () => {
  const [contactvalue, SetContactValue] = useState(false);
  
  return (
    <section id="contact" className=" mt-10 max-w-6xl mx-auto px-5 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-5 text-center md:text-left"
      >
              {/* ---------------- CTA Card ---------------- */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6A5AF9] to-[#FF6AC2] p-8 text-white shadow-xl">
        {/* Glow */}
        <div className="absolute inset-0 bg-white/10 blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-2">
            Let’s build something amazing together 🚀
          </h3>
          <p className="text-sm text-white/90 mb-5 max-w-xl">
            Have a project in mind or looking for a developer?
            I’m always open to discussing new ideas and opportunities.
          </p>

          <a
            className="inline-flex items-center gap-2 px-5 py-2.5
            rounded-xl bg-white text-black font-medium
            hover:bg-black hover:text-white transition"
            onClick={()=> SetContactValue(!contactvalue)}
          >
            {contactvalue ? <div className="flex gap-2 items-center" >Scroll Up <FaArrowUp/></div> : <div className="flex gap-2 items-center" >Get in Touch<FiArrowUpRight /></div> }
            
          </a>
        </div>
      </div>

      </motion.div>

      {/* Content */}
      <div className={`${contactvalue ? "Block" : "hidden"} mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start`}>
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          <div className=" space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <FiMail />
              <span>yourmail@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FiUser />
              <span>Available for Freelance & Full-time</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <label className="text-sm text-gray-600">Your Name</label>
            <div className="relative mt-2">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <div className="relative mt-2">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <div className="relative mt-2">
              <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
