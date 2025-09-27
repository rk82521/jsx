import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description?: string;
  points: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, points }) => {
  return (
    <div className="bg-white  w-full min-h-[400px] sm:min-h-[450px] md:min-h-[400px] rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start md:sticky  md:top-[10%] py-6 px-4 sm:px-6 md:px-10 gap-8"> 
      
      {/* Left side (image / placeholder) */}
      <div className="w-full md:w-1/2 h-62 sm:h-78 md:h-82 bg-gray-200 rounded-xl"></div>

      {/* Right side (text + list + button) */}
      <div className="flex flex-col md:w-1/2 gap-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            {description}
          </p>
        )}

        <ul className="space-y-3">
          {points.map((point, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center w-3 h-3 bg-green-100 text-green-700 text-xs ">
                ✅
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 border-2 border-green-800 text-green-800 px-4 py-2 mt-5 font-bold rounded-xl hover:bg-green-50 transition text-sm sm:text-base md:text-lg">
            LEARN MORE 
            <ChevronRight className="text-green-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
