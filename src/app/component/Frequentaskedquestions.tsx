
"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is RupeeFlow?",
    answer: "Aaj maine breakup ki party kr liye Subah se 2 bottle daru bhi pi lee hnn",
  },
  {
    question: "Is RupeeFlow free?",
    answer: "আপনি যদি বাংলা গানের কথা ইংরেজিতে চান, তাহলে আপনি",
  },
  {
    question: "How is RupeeFlow different from other UPI apps?",
    answer: "Lagawelu Jab Lipistic, Hilela Aara Distric Lagawelu Jab Lipistic, Hilela Aara Distric",
  },
  {
    question: "Is RupeeFlow Safe?",
    answer: "Kyunki tum hi ho Ab tum hi ho Zindagi ab tum hi ho Chain bhi, mera dard bhi",
  },
  {
    question: "How does RupeeFlow Work?",
    answer:
      "Khoon mein tere mitti Mitti mein tera khoon Khoon mein tere mitti Mitti mein tera khoon Upar allah niche dharti",
  },
  {
    question: "How to do bulk invoice payments?",
    answer: "You can upload invoices in bulk, and RupeeFlow processes them securely via UPI.",
  },
];

const Frequentaskedquestions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white w-[88%] min-h-[530px] text-black px-2 sm:px-6 md:px-8 lg:px-20 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
      {/* Left Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-5">
          Explore our FAQ section to find answers about RupeeFlow’s financial solutions.
        </p>
      </div>

      {/* Right Section (FAQs) */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left font-medium ml-5 text-gray-900 text-base sm:text-lg"
            >
              {faq.question}
              <span className="ml-2 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
  className={`overflow-hidden transition-all duration-500 ease-in-out ${
    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
  }`}
>
  <p className="ml-7 text-gray-600 p- rounded-md">
    {faq.answer}
  </p>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequentaskedquestions;











