import React from "react";
import { motion } from "framer-motion";

function StepCard() {
  const steps = [
    {
      image: "/p5.png",
      title: "1. Add clothes",
      description:
        "Download Acloset app. Take a photo of your clothes then your digital closet will be ready!",
      delay: 0,
    },
    {
      image: "/p6.png",
      title: "2. See what you have",
      description:
        "Make your closet based on your preference. Any kinds of categorization is possible such as season, style, and travel closets.",
      delay: 0.2,
    },
    {
      image: "/p7.png",
      title: "3. Identify your style",
      description:
        "See various statistics related to your fashion life. What brands you paid most, items with high Cost Per Wear.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Create your digital closet
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: step.delay,
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg md:text-xl mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <button className="px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-900 transition">
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default StepCard;
