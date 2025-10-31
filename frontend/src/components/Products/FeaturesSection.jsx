import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        {/* First Item */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-4"> FREE INTERNATIONL SHIPPING</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders above $100
          </p>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-4"> 30 DAYS RETURN</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money back guarantee{" "}
          </p>
        </div>

        {/* Third Item */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-4"> SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
