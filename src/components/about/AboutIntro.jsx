import React from "react";

function AboutIntro() {
  return (
    <section className="w-full bg-white mt-20 sm:mt-24 lg:mt-28 px-6 sm:px-8 lg:px-10 py-16">
      <div className="max-w-4xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-8">
          We at team Acloset are creating <br className="hidden sm:block" />
          smart fashion with data and  technologies
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
          Many people today enjoy a more convenient life thanks to exceptional
          services powered by data and technology. However, the problem of
          dressing, which is very stressful in our daily lives, remains unsolved.
          It is not only a problem for individuals but the damage it causes to
          the environment because of clothing waste.
          <br /><br />
          Our team is here to solve this problem. We believe our service,{" "}
          <strong className="text-gray-900">"Acloset"</strong>, can improve the
          inefficient and stressful aspects of our daily fashion life by turning
          it into <span className="italic">‘smart fashion’</span> through AI-based
          digital closets and data. There’s no more difficulty deciding what to buy,
          no more late appointments choosing an outfit, or frustration from messy closets. 
          <br /><br />
          <span className="font-semibold text-gray-800">
            Start your smart fashion life with Acloset.
          </span>
        </p>
      </div>
    </section>
  );
}

export default AboutIntro;
