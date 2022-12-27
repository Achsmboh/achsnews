import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CardCategories = ({ categories, title, description, image, onClick, onCategories }) => {
  return (
    <div className="my-1">
      <div className="lg:h-72 md:h-72 w-full border border-b-2 border-b-brown lg:grid md:grid grid-cols-3 py-5">
        <div>
          <h1 className="lg:text-4xl md:text-3xl text-xl font-Inter text-brown font-bold">{categories}</h1>
          <button onClick={onCategories} className=" lg:flex md:flex hidden items-center">
            <p className="text-brown font-semibold text-sm font-Inter mr-2">See all</p>
            <FiArrowUpRight className="text-brown font-bold text-base" />
          </button>
        </div>
        <div className="col-span-2">
          <div className="lg:flex md:flex justify-between items-center h-full w-full">
            <div className="lg:w-2/3 md:w-2/3 h-full flex flex-col justify-center">
              <div className="flex flex-col justify-between lg:h-2/3 md:h-2/3  lg:pr-2 md:pr-2">
                <div className="lg:hidden md:hidden grid w-full h-32">
                  <img src={image} alt="foto" className="w-full h-32 object-cover object-center" />
                </div>
                <h2 className="font-Inter text-brown font-bold lg:text-2xl md:text-2xl">{title}</h2>
                <p className="font-Inter text-brown text-sm ">{description}</p>
                <button onClick={onClick} className="flex items-center">
                  <p className="text-brown font-semibold text-sm font-Inter mr-2">See detail</p>
                  <FiArrowUpRight className="text-brown font-bold text-base" />
                </button>
              </div>
            </div>
            <div className="lg:grid md:grid hidden w-56 h-56">
              <img src={image} alt="foto" className="w-56 h-56 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategories;
