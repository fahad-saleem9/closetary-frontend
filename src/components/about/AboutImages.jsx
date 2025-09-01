import React from "react";

function AboutImages() {
  return (
    <section className="w-full px-0 sm:px-0 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        
        {/* Image 1 */}
        <div>
          <img
            src="/aboutimage1.png"
            alt="About 1"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Image 2 */}
        <div>
          <img
            src="/aboutimage2.png"
            alt="About 2"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Image 3 */}
        <div>
          <img
            src="/aboutimage3.png"
            alt="About 3"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutImages;
