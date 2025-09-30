import React from "react";

const selectedProduct = {
  name: "Stylisk Jacket",
  originalPrice: 120,
  description: "This is a stylish jacket  perfect for any occasion",
};

const ProductDetails = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Left Thumbnails */}
        <div className="hidden md:flex flex-col space-y-4 mr-6"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
