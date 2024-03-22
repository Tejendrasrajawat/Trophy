// components/MeetOurDesigner.js

import React from "react";
import { designerData } from "../helper/data";

function MeetOurDesigner() {
  return (
    <section id="designer" className="mt-16">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          Meet Our Designer
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          quisquam soluta sed quam repudiandae animi atque cum eligendi
          consequatur magnam.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {/* Card 1 */}
          {designerData.map((item) => (
            <div className="hover:shadow-lg rounded-lg overflow-hidden w-80 flex flex-col items-center justify-center">
              <img
                className="w-32 h-32 object-cover object-center rounded-full"
                src={item.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-green-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetOurDesigner;
