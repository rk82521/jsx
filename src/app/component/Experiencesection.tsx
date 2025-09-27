import React from "react";

const ExperienceSection = () => {
  return (
    <section className="z-10 relative py-16 bg-gradient-to-b from-black via-green-900 to-black text-center text-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl gap-5px font-bold mb-4 mr-2">
        Experience The Future, <br />
        With Power of UPI Switch
      </h2>

      {/* Subheading */}
      <p className="text-green-400 text-base sm:text-lg md:text-xl mb-12 px-4">
        Smarter, Faster, and More Secure Payments
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-10 md:px-20">
        <div className="bg-gray-300 h-48 sm:h-56 md:h-64 rounded-xl shadow-md"></div>
        <div className="bg-gray-300 h-48 sm:h-56 md:h-64 rounded-xl shadow-md"></div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-lg border border-green-500 text-white hover:bg-green-600 transition">
          EXPLORE SOLUTIONS
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
