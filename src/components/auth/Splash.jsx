import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register"); 
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      {/* Logo GIF */}
      <img 
        src="/Logo.gif"
        alt="Logo"
        className="w-72 h-72 mb-6 animate-bounce drop-shadow-lg" 
      />

      {/* Brand Name */}
      <h1 className="text-5xl font-extrabold tracking-wide animate-fadeIn">
        Closeatry
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-lg opacity-80 animate-fadeIn delay-200">
        Your personalized fashion companion 
      </p>
    </div>
  );
}
