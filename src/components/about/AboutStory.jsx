import React from "react";

const AboutStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The story of Closetary
        </h2>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Founder 1 */}
          <div className="text-center">
            <img
              src="/founder1.png"
              alt="Founder Muhammad Noman"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Founder</h3>
            <p className="text-gray-600">Muhammad Noman</p>
          </div>

          {/* Founder 2 */}
          <div className="text-center">
            <img
              src="/founder2.png"
              alt="Founder Fahad"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Co-Founder</h3>
            <p className="text-gray-600">Fahad</p>
          </div>

          {/* Founder 3 */}
          <div className="text-center">
            <img
              src="/founder3.png"
              alt="Founder Usman Qadri"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Co-Founder</h3>
            <p className="text-gray-600">Usman Qadri</p>
          </div>
        </div>

        {/* Story Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Closetary was founded by Muhammad Noman together with Fahad, a skilled
          developer, and Usman Qadri, a creative designer. The idea was born
          from a simple but universal frustration: despite having wardrobes full
          of clothes, people often feel they have “nothing to wear.” Noman
          realized this wasn’t just about fashion, but about how overwhelming
          and unorganized choices can be a problem perfectly suited for
          technology to solve and with this vision, the team created Closetary,
          a smart digital closet powered by artificial intelligence. It allows
          users to digitize their wardrobe, visualize clothing options at a
          glance, and receive outfit recommendations tailored to the weather,
          lifestyle, and personal style preferences. What began as a solution
          for everyday outfit struggles quickly evolved into something bigger: a
          platform that empowers individuals to manage, style, and share their
          fashion with ease.
        </p>
      </div>
    </section>
  );
};

// ✅ Export default
export default AboutStory;
