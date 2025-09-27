import React from "react";

const testimonials = [
  {
    text: "Made life easier with bulk invoice payments and AI Scheduler.",
    author: "Sumeeta Kiran",
  },
  {
    text: "Very intuitive and smooth user experience.",
    author: "Rahul Sharma",
  },
  {
    text: "Customer support was super helpful and fast.",
    author: "Priya Verma",
  },
  {
    text: "I love how everything works seamlessly.",
    author: "Ankit Mehta",
  },
  {
    text: "The best UPI payment solution I’ve used so far!",
    author: "Neha Gupta",
  },
];

const UserOpinionSection = () => {
  return (
    <section className="w-full bg-white z-10 relative to-black py-16 px-4 sm:px-8 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <h2 className="   text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black text-center md:text-left">
          See <br />What <br /> Our <br /> Users <br />Say
        </h2>

       
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[70vh] pr-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 to-green-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xl mx-auto opacity-90 hover:opacity-100 transition"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-200">
                {item.text}
              </p>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 text-right">
                – {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserOpinionSection;
