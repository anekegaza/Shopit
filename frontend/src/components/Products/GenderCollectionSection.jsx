import React from "react";
import mensCollectionImage from "../../assets/mens-collection.jpg";
import womensCollectionImage from "../../assets/womens-collection.jpg";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Womens colllecton */}
        <div className="relative flex-1 bg-gray-100">
          <img
            src={womensCollectionImage}
            alt="Women's collection"
            className="w-full h-[700px] object-scale-down"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Mens colllecton */}
        <div className="relative flex-1 bg-gray-100">
          <img
            src={mensCollectionImage}
            alt="Men's collection"
            className="w-full h-[700px] object-scale-down"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
