import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-main-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* icons */}
        <div className="icons hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        {/* center text */}
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and relaible shipping!</span>
        </div>
        {/* phone nos */}
        <div className="text-sm hidden md:block">
          <a href="tel:+2348123410135" className="hover:text-gray-300">
            {" "}
            +234 (812) 341-0135{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
