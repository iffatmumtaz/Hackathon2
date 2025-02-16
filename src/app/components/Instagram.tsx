
import React from "react";
import Image from "next/image";

const Instagram = () => {
  // Array of images to ensure all images are unique
  const images = [
    { src: "/images/image1.png", alt: "Instagram product 1" },
    { src: "/images/image2.png", alt: "Instagram product 2" },
    { src: "/images/image3.png", alt: "Instagram product 3" },
    { src: "/images/image4.png", alt: "Instagram product 4" },
    { src: "/images/image5.png", alt: "Instagram product 5" },
    { src: "/images/image6.png", alt: "Instagram product 6" },
  ];

  return (
    <div className="w-full bg-[#F0F2F3]">
      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto py-16 px-6 text-center space-y-8">
        <h2 className="font-bold text-[28px] sm:text-[40px] lg:text-[50px] text-gray-900">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Email Input Section */}
          <div className="relative w-full sm:w-[500px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 text-sm sm:text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          {/* Submit Button */}
          <button className="px-8 py-3 text-sm sm:text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-10">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[50px] font-bold text-center text-gray-900">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">View More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;

