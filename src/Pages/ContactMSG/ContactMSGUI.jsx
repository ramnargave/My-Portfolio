import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMail, FiUser, FiTrash2, FiX } from "react-icons/fi";

const initialMessages = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    message:
      "Hi, I really liked your portfolio. I want a similar website for my startup. Please let me know your availability.",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Aman Verma",
    email: "aman@gmail.com",
    message:
      "Are you available for freelance React projects this month? I have a dashboard project.",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Neha Singh",
    email: "neha@gmail.com",
    message:
      "Need help with UI/UX design for a web app. Let’s connect and discuss the requirements.",
    time: "2 days ago",
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [activeMessage, setActiveMessage] = useState(null);

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
    setActiveMessage(null);
  };

  return (
    <section className="max-w-6xl mx-auto px-5 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-2">
          Contact Messages
        </h2>
        <p className="text-gray-500">
          Messages received from your portfolio contact form.
        </p>
      </motion.div>

      {/* Message Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => setActiveMessage(msg)}
            className="
              cursor-pointer rounded-2xl p-6
              bg-white border border-gray-200
              shadow-sm hover:shadow-lg transition
            "
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <FiUser />
                </div>
                <div>
                  <h4 className="font-medium">
                    {msg.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {msg.email}
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                {msg.time}
              </span>
            </div>

            <p className="text-sm text-gray-600 line-clamp-3">
              {msg.message}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 relative"
            >
              {/* Close */}
              <button
                onClick={() => setActiveMessage(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <FiX size={20} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
                  <FiUser />
                </div>
                <div>
                  <h4 className="font-semibold">
                    {activeMessage.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {activeMessage.email}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {activeMessage.message}
              </p>

              {/* Actions */}
              <div className="flex justify-between gap-4">
                <a
                  href={`mailto:${activeMessage.email}`}
                  className="flex-1 text-center py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
                >
                  Reply
                </a>

                <button
                  onClick={() => deleteMessage(activeMessage.id)}
                  className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(Messages);
