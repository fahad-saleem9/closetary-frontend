// src/components/home/JourneySection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDoorClosed, FaSearch, FaHeart } from "react-icons/fa";

export default function JourneySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 border-t border-gray-200 pt-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-16">
            Journey to <span className="text-black">smart fashion</span> with{" "}
            <span className="text-black">Closetary</span>
          </h2>
        </motion.div>

        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-20"
        >
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <FaDoorClosed size={64} className="text-black" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Step 1. Know your clothes
            </h3>
            <p className="text-gray-600 max-w-lg">
              You might be surprised to find out how many clothes you already
              have. Smart fashion starts with knowing what you have. Your
              wardrobe is worth much more than you think.
            </p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-8"
        >
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md relative">
            <FaSearch size={64} className="text-black" />
            <FaHeart
              size={18}
              className="text-pink-500 absolute top-3 right-3"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Step 2. Find your personal style
            </h3>
            <p className="text-gray-600 max-w-lg">
              Enjoy your personal style with different clothes and outfit
              recommendations. Freeing you from making stressful fashion
              selections every morning.
            </p>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full flex justify-center mt-12"
        >
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
