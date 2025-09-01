// src/components/about/AboutMission.jsx
import React from "react";

const AboutMission = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Subheading */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h3>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-6">
          Make smart fashion becomes your <br className="hidden sm:block" />
          everyday fashion life
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
          We believe smart fashion can be your daily fashion life when we fully
          understand the lifetime value of the clothes in our wardrobe. As people
          become more familiar with their wardrobes, they learn more about their
          personal style and can make the most of what they have without making
          extra purchases. We will change typical fast fashion flaws by allowing
          users to sell clothes they no longer wear straight from their closets,
          allowing them to fill their wardrobe gaps at reasonable prices.
        </p>
      </div>
    </section>
  );
};

export default AboutMission;
