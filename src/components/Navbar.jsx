// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      {/* Wrapper for centering content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 
        py-4 flex justify-between items-center">

        {/* Left: Logo */}
        <a href="/" className="flex items-center">
          <motion.img
            src="/closetary.png"
            alt="Closetary Logo"
            className="h-10 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </a>

        {/* Center: Links (Desktop only) */}
        <ul className="hidden lg:flex space-x-6 text-gray-500 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/how-it-works", label: "How it works" },
            { to: "/about", label: "About us" },
            // { to: "/press", label: "Press" },
            { to: "/faq", label: "FAQ" },
            { to: "/blog", label: "Blog" },
          
          ].map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ y: -2, color: "#000" }}
              transition={{ duration: 0.2 }}
            >
              <Link to={item.to}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>

  
        <div className="flex items-center space-x-4">
          {/* Language Dropdown (desktop) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 text-gray-700 font-medium hover:text-black transition-colors"
            >
              <span>EN</span>
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-24 py-2"
                >
                  <button className="block w-full text-left px-4 py-1 hover:bg-gray-100">EN</button>
                  <button className="block w-full text-left px-4 py-1 hover:bg-gray-100">KR</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className=" block lg:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden px-6 py-4 space-y-4"
          >
            <Link to="/" className="block text-gray-700 hover:text-black">Home</Link>
            <Link to="/how-it-works" className="block text-gray-700 hover:text-black">How it works</Link>
            <Link to="/about" className="block text-gray-700 hover:text-black">About us</Link>
            <Link to="/press" className="block text-gray-700 hover:text-black">Press</Link>
            <Link to="/faq" className="block text-gray-700 hover:text-black">FAQ</Link>
            <Link to="/blog" className="block text-gray-700 hover:text-black">Blog</Link>
            <Link to="/recruit" className="block text-gray-700 hover:text-black">Recruit (채용)</Link>
            <div className="border-t pt-2">
              <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">EN</button>
              <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">KR</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
