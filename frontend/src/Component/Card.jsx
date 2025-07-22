import React from "react";

const Card = ({ number, title, description }) => {
  return (
    // Added 'w-80' for a fixed width (320px). You can adjust this value (e.g., w-72, w-96)
    // or use a max-width like 'max-w-sm' to constrain it while allowing responsiveness.
    <div className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 border-blue-200 bg-white transform hover:-translate-y-2 hover:scale-105 cursor-pointer flex flex-col items-center text-center p-8 h-full w-80">
      {/* Number Circle */}
      <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-3xl font-bold border-4 border-blue-300 shadow-md mb-6">
        {number}
      </div>

      {/* Title */}
      <h4 className="text-2xl font-semibold text-blue-800 mb-4 leading-tight">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};
export default Card;
