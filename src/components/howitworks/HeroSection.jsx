import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-start text-white"
      style={{
        backgroundImage: `url("/p4.png")`,
        backgroundSize: "cover",
        backgroundPosition: "top center", // better alignment for hero image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content (aligned with Navbar logo) */}
      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 mt-20 md:mt-28 lg:mt-36 text-left">
          
          {/* Animated Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }} //  animate on every scroll
          >
            Acloset is a digital closet <br className="hidden sm:block" />
            fashion space for your smart <br className="hidden md:block" />
            fashion life.
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }} //  repeat animation
          >
            Our community, more than{" "}
            <span className="font-semibold">2.5M global users’ choice</span>.{" "}
            <br className="hidden sm:block" />
            Ready to get started? Here’s how it works.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
