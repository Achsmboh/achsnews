import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const featuredProducts = [image1, image2, image3];
let count = 0;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleNext();
    }, 5000);
  };

  const handleNext = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };

  const handlePrev = () => {
    const productLength = featuredProducts.length;
    count = (currentIndex + productLength - 1) % productLength;
    setCurrentIndex(count);
  };

  return (
    <div className="w-full select-none relative">
      <img className="w-full h-96 object-cover" src={featuredProducts[currentIndex]} alt="" />
      <div
        className="absolute top-1/2 w-full px-3 transform -translate-y-1/2 
       flex justify-between"
      >
        <button className="hover:bg-brownmuda" onClick={handlePrev}>
          <GrFormPrevious className="text-5xl" />
        </button>
        <button className="hover:bg-brownmuda" onClick={handleNext}>
          <GrFormNext className="text-5xl" />
        </button>
      </div>
    </div>
  );
}
