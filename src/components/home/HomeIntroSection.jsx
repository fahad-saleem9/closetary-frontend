"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HomeIntroSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 border-t border-gray-200 overflow-x-hidden">
      <div className="text-justify lg:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug"
        >
          Smart Fashion – <br className="hidden sm:block" />
          the future of our fashion
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
        >
          Smart fashion is the lifestyle of buying, wearing, and selling our
          clothes in a smart way. Smart fashion starts with knowing what you
          have in your wardrobe. No more stressful mornings picking out outfits
          because you can plan your daily outfits in advance wherever you are.
          You can also sell the clothes you don&apos;t wear efficiently and
          effectively and get pre-loved items from others. Earning extra money
          by selling clothes that are sleeping in your wardrobe and buying
          lovely items at a reasonable price will make your fashion life
          smarter.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg"
        >
          Acloset is the right choice for your smart fashion. It’s simple to
          make your own digital closet and find your own effective styles. Also,
          by selling your unwanted clothes and buying pre-loved items, you can
          complete your smart fashion life, which benefits individuals and the
          environment.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center mt-20"
        >
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
