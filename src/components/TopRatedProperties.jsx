// components/TopRatedProperties.js

import React from "react";
import { featuredData } from "../helper/data";

function TopRatedProperties() {
  return (
    <section id="top-rated" className="mt-10">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          Top Rated Properties
        </h2>

        <p className="text-lg text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          quisquam soluta sed quam repudiandae animi atque cum eligendi
          consequatur magnam.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredData.slice(0, 3).map((item) => (
            <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg flex">
              <div className="w-40 relative">
                <img
                  className="w-full h-full object-cover rounded-l-lg"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between px-4 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-green-600 mb-2">{item.price} / sqft</p>
                <div className="text-xl mb-2">{item.location}</div>
                <p className="text-sm text-gray-600 mb-4">
                  Managed By Junior Developers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopRatedProperties;
