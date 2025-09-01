import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      img: "/p1.png",
      title: "100 B",
      desc: "100 billion garments produced each year",
    },
    {
      img: "/p2.png",
      title: "50 %",
      desc: "People do not wear at least 50% of their wardrobe",
    },
    {
      img: "/p3.png",
      title: "$500 B",
      desc: "$500 billion is lost each year because of under-wearing and failure to recycle clothes",
    },
  ];

  return (
    <section className="py-12 px-8 sm:px-10 md:px-12 lg:px-14">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.2, // staggered cards
              }}
              viewport={{ once: false, amount: 0.3 }} // repeat on scroll
              className="flex flex-col"
            >
              <div className="w-full h-56 rounded-lg overflow-hidden shadow-md">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }} // smooth hover zoom
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3
                className="mt-4 text-2xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.25 + 0.2 }}
                viewport={{ once: false }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.25 + 0.3 }}
                viewport={{ once: false }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
