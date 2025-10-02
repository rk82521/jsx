"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}


const faqData: FaqItem[] = [
  { question: "What is RupeeFlow?", answer: "Aaj maine breakup ki party kr liye Subah se 2 bottle daru bhi pi lee hnn " },
  { question: "Is RupeeFlow free?", answer: "আপনি যদি বাংলা গানের কথা ইংরেজিতে চান, তাহলে আপনি" },
  { question: "How is RupeeFlow different from other UPI apps?", answer: "Lagawelu Jab Lipistic, Hilela Aara Distric Lagawelu Jab Lipistic, Hilela Aara Distric" },
  { question: "Is RupeeFlow Safe?", answer: "Kyunki tum hi ho Ab tum hi ho Zindagi ab tum hi ho Chain bhi, mera dard bhi " },
  { question: "How does RupeeFlow Work?", answer: "Khoon mein tere mitti Mitti mein tera khoon Khoon mein tere mitti Mitti mein tera khoon Upar allah niche dharti" },
  { question: "How to do bulk invoice payments?", answer: "You can upload invoices in bulk, and RupeeFlow processes them securely via UPI." }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (el) el.style.maxHeight = openIndex === idx ? `${el.scrollHeight}px` : "0px";
    });
  }, [openIndex]);

  return (
    <section className="w-full bg-gray-50 py-12 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Explore our FAQ section to find answers about RupeeFlow’s financial solutions
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg sm:text-xl text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
<div
  ref={(el) => {
    if (el) contentRefs.current[index] = el;
  }}
  className="overflow-hidden transition-all duration-300 max-h-0"
>
  <p className="mt-2 text-gray-600 text-sm sm:text-base">{faq.answer}</p>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
