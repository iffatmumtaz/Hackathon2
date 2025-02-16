import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      {/* Top Header */}
      <header className="hidden md:flex justify-between items-center px-4 py-2 bg-blue-950 text-gray-200">
        <div className="flex items-center space-x-1">
          <FaCheck />
          <span>Free shipping on all orders over $50</span>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1 hover:underline cursor-pointer">
            <span>Eng</span>
            <IoIosArrowDown />
          </div>
          <Link href="/faq">
            <span className="hover:underline cursor-pointer">FAQs</span>
          </Link>
          <IoIosHelpCircle />
          <span>Need Help</span>
        </div>
      </header>

      {/* Logo and Cart Section */}
      <header className="flex justify-between items-center px-4 py-2 bg-slate-300">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="/images/image.png" alt="logo" className="h-8 w-auto" />
          </Link>
          <span className="text-md font-medium text-gray-700">Comforty</span>
        </div>
        <div className="hidden md:flex items-center gap-4 bg-white p-2 rounded-lg">
          <span>Cart</span>
          <TiShoppingCart className="text-xl" />
          <TbSquareRoundedNumber2Filled className="text-lg" />
        </div>
      </header>

      {/* Main Navigation */}
      <div className="flex justify-between items-center w-full h-[74px] py-4 px-4 md:px-16 bg-white shadow-lg">
        <div className="flex space-x-4">
          <Link href="/" className="font-medium text-sm hover:text-[#007500]">Home</Link>
          <Link href="/Contact" className="font-medium text-sm hover:text-[#007500]">Shop</Link>
          <Link href="/product" className="font-medium text-sm hover:text-[#007500]">Product</Link>
          <Link href="/faq" className="font-medium text-sm hover:text-[#007500]">Pages</Link>
          <Link href="/About" className="font-medium text-sm hover:text-[#007500]">About</Link>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-gray-500">
          <Link href="/Contact" className="hover:text-[#007500]">
            <span>Contact:</span>
          </Link>
          <span>(808) 555-0111</span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 py-2 bg-white shadow-lg">
        <button className="text-xl">☰</button> {/* Hamburger Menu */}
        <Link href="/">
          <img src="/images/image.png" alt="logo" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center space-x-2">
          <TiShoppingCart className="text-xl" />
          <TbSquareRoundedNumber2Filled className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

