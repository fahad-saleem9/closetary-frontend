import React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import StatsSection from "./StatsSection";
import HomeIntroSection from "./HomeIntroSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <HomeIntroSection/>
    </div>
  );
}

export default Home;
