// src/components/common/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Top CTA Section */}
      <div className="bg-black text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-bold mb-8"
        >
          Ready to Start?
        </motion.h2>

        <div className="flex justify-center gap-8">
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center gap-2 border border-white rounded-lg px-4 py-3 hover:bg-white hover:text-black transition"
          >
            <FaGooglePlay className="text-2xl" />
            <span className="font-medium">Google Play</span>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center gap-2 border border-white rounded-lg px-4 py-3 hover:bg-white hover:text-black transition"
          >
            <FaApple className="text-2xl" />
            <span className="font-medium">App Store</span>
          </motion.a>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-gray-50 py-8 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-600 text-sm max-w-4xl mx-auto"
        >
          <p className="mb-1">Looko Inc.</p>
          <p className="mb-1">
            Head Office | 18, Teheran-ro 43-gil, Gangnam-gu, Seoul, Republic of Korea
          </p>
          <p className="mb-1">US Office | Wilmington, Delaware, US</p>
          <p className="mb-1">CEO | Heasin Ko</p>
          <p className="mb-4">Email | support@acloset.app</p>

          {/* Bottom Links & Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-4 mt-6">
            {/* Links */}
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:underline">
                Service Terms
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-gray-500">
              {[
                <FaInstagram />,
                <FaFacebookF />,
                <FaLinkedinIn />,
                <FaYoutube />,
                <FaTiktok />,
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="hover:text-black"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
