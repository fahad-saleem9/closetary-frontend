// src/components/home/ProblemSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 ">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}  //  repeat on scroll
          className="text-3xl md:text-5xl font-semibold text-gray-900 leading-snug"
        >
          Our fashion, <br />
          <span className="font-bold text-primary-600">
            it is okay to go on like this?
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}  //  repeat on scroll
          className="mt-6 text-lg text-gray-500 leading-relaxed"
        >
          The fashion industry's influence on our everyday lives can have a
          detrimental effect. We continuously buy clothes, yet we only wear
          around 50% of our wardrobe. So the clothing loses value because it
          ‘sleeps’ in our closet with no purpose. So, we have a closet full of
          clothes, but we don’t know exactly what we have. Then we spend much
          time thinking about what to wear and getting dressed becomes very
          stressful. This is a problem that must be addressed. We must find a
          solution to achieve a better fashion life for people and the
          environment.
        </motion.p>
      </div>
    </section>
  );
}
