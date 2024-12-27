"client use";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import Link from 'next/link'





const Navbar = () => {
  return (
   <div>
      <header className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-blue-950">
        {/* Free Shipping Message */}
        <div className="md:text flex items-center space-x-1">
          <div>
            <FaCheck />
          </div>
          <span>Free shipping on all orders over $50</span>
        </div>

        {/* Navigation Items */}
        <div className="text-sm flex items-center space-x-4">
          <div className="flex items-center space-x-1 hover:underline cursor-pointer">
            <span>Eng</span>
            <IoIosArrowDown />
          </div>
          <Link href="/faq" >
          <span className="hover:underline cursor-pointer">FAQs</span>
         
          </Link>
          <IoIosHelpCircle />
          <span>Need Help</span>
        </div>
      </header>

      <header className="md:px-56 hidden text-black-200 md:flex justify-between items-center px-4 py-2 bg-slate-300">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <Link href="/">
        <img src="/images/image.png" alt="logo" />
      </Link>
      <span className="text-md font-medium text-gray-700">Comforty</span>
    </div>
  </div>
  <div className="relative hidden md:flex items-center gap-4 bg-white">
    <span>cart </span> <TiShoppingCart />
    <div><TbSquareRoundedNumber2Filled /></div>
  </div>

        
</header>
<div className="flex justify-between items-center w-[1600px] h-[74px] py-[14px] px-[300px] bg-white shadow-lg ">
  <div className=" w-[330px] h=[15px] flex gap-4">
    <Link href="/"
     className="font-medium text-[14px] leading-[15.4px] text-left hover:text-[#007500]">Home</Link>
 

    <Link href="/Contact" 
    className="font-medium text-[14px] leading-[15.4px] text-left hover:text-[#007500]">Shop</Link>
 

  
    <Link href="/product" 
    className="font-medium text-[14px] leading-[15.4px] text-left hover:text-[#007500]">Product</Link>
  

    <Link href="/faq"
     className="font-medium text-[14px] leading-[15.4px] text-left hover:text-[#007500]">Pages</Link>
  
    <Link href="/About"
     className="font-medium text-[14px] leading-[15.4px] text-left hover:text-[#007500]">About</Link>
   </div>
   <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2">
  <Link href="/Contact">
  <span className="flex text-sm text-gray-500  hover:text-[#007500]">Contact:</span></Link>
  <span className="text-sm text-gray-500">(808) 555-0111</span>
</div>
</div>


</div>
  );
};

export default Navbar;

