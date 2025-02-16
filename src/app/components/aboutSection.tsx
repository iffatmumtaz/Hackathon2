
import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-center mb-12 text-gray-800">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaTruck className="text-4xl text-[#007580] mb-4" />,
            title: "Next day as standard",
            text: "Order before 3pm and get your order the next day as standard.",
          },
          {
            icon: <FaCheck className="text-4xl text-[#007580] mb-4" />,
            title: "Made by true artisans",
            text: "Handmade crafted goods made with real passion and craftsmanship.",
          },
          {
            icon: <IoFileTrayOutline className="text-4xl text-[#007580] mb-4" />,
            title: "Unbeatable prices",
            text: "For our materials and quality you won’t find better prices anywhere.",
          },
          {
            icon: <BiSolidLeaf className="text-4xl text-[#007580] mb-4" />,
            title: "Recycled packaging",
            text: "We use 100% recycled material to ensure our footprint is more manageable.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] p-6 text-center shadow-md rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <h3 className="text-[20px] font-medium text-[#007580] mt-4">
              {item.title}
            </h3>
            <p className="text-[16px] text-gray-600 mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
