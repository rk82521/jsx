import React from "react";

const ExperienceSection = () => {
  return (
    <section className="z-10 relative   bg-gradient-to-b from-black via-green-900 to-black text-center w-[88%] text-white ml-10"> 
      {/* Heading */}
      <h2 className="  text-3xl sm:text-4xl md:text-5xl mt-4 sm:mt-8 lg:mt-12  font-bold ">
        Experience The Future, <br />
        With Power of UPI Switch
      </h2>

      {/* Subheading */}
      <p className="text-green-400 text-base sm:text-lg md:text-xl mb-12 px-4 mt-5 sm:mt-7 lg:mt-9">
        Smarter, Faster, and More Secure Payments
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8  sm:px-10 px-4 mt-18 sm:mt-20 lg:mt-22">
        
        <div className="bg-[#D2D2D2] h-55 sm:h-64 md:h-72 rounded-xl shadow-md"></div>
        <div className="bg-[#D2D2D2] h-55 sm:h-64 md:h-72 rounded-xl shadow-md"></div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button className="sm:px-4 py-2 sm:py-3  font-bold rounded-lg border border-green-500 text-white hover:bg-green-600 transition mt-3 sm:mt-6 lg:mt-9">
          EXPLORE SOLUTIONS
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
