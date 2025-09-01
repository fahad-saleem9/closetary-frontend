import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Splash from "./components/auth/Splash";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Home from "./components/home/Home";
import HowItWorks from "./components/howitworks/HowItWorks";
import AboutUs from "./components/about/AboutUs";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected pages */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <main className="pt-16">
                <Home />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <>
              <Navbar />
              <main className="pt-16">
                <HowItWorks />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <main className="pt-16">
                <AboutUs />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Navbar />
              <main className="pt-16">
                <Faq />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
