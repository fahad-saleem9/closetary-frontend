import React from "react";
import CountUp from "react-countup";

const AboutStats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What We Achieved
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* 1st Stat */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">
              <CountUp
                end={2.5}
                decimals={1}
                duration={3}
                enableScrollSpy
              />{" "}
              M+
            </h3>
            <p className="mt-2 text-lg text-gray-600">Global users</p>
          </div>

          {/* 2nd Stat */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">
              <CountUp
                end={70}
                duration={3}
                enableScrollSpy
              />{" "}
              K+
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              Daily uploaded <br /> fashion items
            </p>
          </div>

          {/* 3rd Stat */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">
              <CountUp
                end={10}
                duration={3}
                enableScrollSpy
              />{" "}
              K+
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              Style log <br /> updated daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
