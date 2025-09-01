// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="w-full bg-white pt-24 pb-12 md:pt-28 md:pb-16">
         <div className="max-w-5xl mx-auto 
  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 
  grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h1 className="text-3xl md:text-5xl font-light text-gray-700 mb-8">
                        <span className="font-bold text-gray-900">Closetary</span>{" "}
                        <span className="font-semibold text-black">
                            is a space for your smart fashion
                        </span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex space-x-4 mt-12">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-100 text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                        >
                            <Play size={20} />
                            <span>Google Play</span>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-100 text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                        >
                            <Apple size={20} />
                            <span>App Store</span>
                        </a>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="/1.png"
                        alt="Closet App Preview"
                        className="mx-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
