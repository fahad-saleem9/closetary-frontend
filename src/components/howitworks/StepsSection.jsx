import React from "react";

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      image: "/step1.png",
      title: "1. Make outfits",
      description:
        "Download Acloset App. Make your own outfit ideas and find your personal style by our AI recommendation.",
    },
    {
      id: 2,
      image: "/step2.png",
      title: "2. Share",
      description:
        "Share your outfit ideas and get inspired from millions of ideas from fashionistas all over the world.",
    },
    {
      id: 3,
      image: "/step3.png",
      title: "3. Plan & log outfits",
      description:
        "Planning and logging your daily outfits will help you find your favorite clothes and styles.",
    },
  ];

  return (
    <section className="py-12 text-center max-w-5xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Explore your personal style
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center px-4" 
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Learn More →
        </button>
      </div>
    </section>
  );
};

export default StepsSection;
