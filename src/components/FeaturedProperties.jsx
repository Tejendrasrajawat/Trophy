import React, { useState } from "react";
import { featuredData } from "../helper/data";

function FeaturedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(featuredData.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <section id="featured" className="mt-10">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          Featured Properties
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          quisquam soluta sed quam repudiandae animi atque cum eligendi
          consequatur magnam.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Slides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-hidden">
            {featuredData
              .slice(currentSlide * 3, currentSlide * 3 + 3)
              .map((item, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    className="w-full h-56 object-cover object-center"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-green-600">{item.price} / sqft</p>
                  </div>
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-600">
                      Managed By Junior Developers
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Dot Indicators */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 pb-4">
            <div className="flex items-center justify-center space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full bg-green-600 ${
                    currentSlide === index ? "opacity-100" : "opacity-50"
                  } focus:outline-none`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
