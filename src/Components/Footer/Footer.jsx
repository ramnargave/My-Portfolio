import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiArrowUpRight,
} from "react-icons/fi";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-5 backdrop-blur-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-8 md:p-10 "
    >


      {/* ---------------- Footer Content ---------------- */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h4 className="font-semibold mb-3">About Me</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            I’m a frontend developer focused on building clean,
            user-friendly and scalable web experiences using
            modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600 flex gap-5 md:block">
            {["Home", "Projects", "Tools", "About", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-black transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-gray-100
              flex items-center justify-center
              hover:bg-black hover:text-white transition"
            >
              <FiGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-gray-100
              flex items-center justify-center
              hover:bg-black hover:text-white transition"
            >
              <FiLinkedin />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-gray-100
              flex items-center justify-center
              hover:bg-black hover:text-white transition"
            >
              <FiInstagram />
            </a>
            <a
              href="mailto:yourmail@gmail.com"
              className="w-10 h-10 rounded-xl bg-gray-100
              flex items-center justify-center
              hover:bg-black hover:text-white transition"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- Bottom ---------------- */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ram Nargave. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
