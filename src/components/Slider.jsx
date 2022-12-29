import React from "react";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { LoadingFour } from "./Loading";

export default function Slider({ image }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredProducts, setFeaturedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  let count = 0;

  useEffect(() => {
    setFeaturedProduct(image);
  }, []);

  useEffect(() => {
    // startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleNext();
    }, 1000);
  };

  const handleNext = () => {
    const productLength = featuredProducts.length;
    count = (currentIndex + 1) % productLength;
    setCurrentIndex(count);
  };

  const handlePrev = () => {
    const productLength = featuredProducts.length;
    count = (currentIndex + productLength - 1) % productLength;
    setCurrentIndex(count);
  };

  return (
    <div className="w-full select-none relative object-center rounded-2xl">
      {featuredProducts ? <img className="w-full h-96 object-cover rounded-2xl" src={featuredProducts[currentIndex]} alt={featuredProducts[currentIndex]} /> : <LoadingFour />}

      <div
        className="absolute top-1/2 w-full px-3 transform -translate-y-1/2 
       flex justify-between"
      >
        <button className="hover:bg-brownmuda" onClick={() => handlePrev()}>
          <GrFormPrevious className="text-5xl" />
        </button>
        <button className="hover:bg-brownmuda" onClick={() => handleNext()}>
          <GrFormNext className="text-5xl" />
        </button>
      </div>
    </div>
  );
}
