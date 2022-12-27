import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

const CardNews = ({ date, title, description, image, alt, onClick }) => {
  return (
    <div className="w-80 h-96 bg-white m-1 mb-4 rounded-2xl shadow-md ">
      <div className="w-full h-52 rounded-2xl">
        <img className="object-cover w-full h-52 rounded-t-2xl" src={image} alt={alt} />
      </div>
      <div className="flex items-center px-2">
        <div className="text-brown text-base mr-2">
          <AiOutlineClockCircle />
        </div>
        <div>
          <p className="text-brown  font-Inter text-sm">{date?.substring(0, 10)}</p>
        </div>
      </div>
      <div className=" px-2 flex flex-col justify-between h-36 ">
        <div>
          <h3 className="font-semibold text-brown font-Inter text-sm">{title}</h3>
          <p className="font-Inter text-brown text-sm">{description?.substring(0, 60)}...</p>
        </div>
        <button onClick={onClick} className="flex items-center">
          <p className="text-brown font-semibold text-sm font-Inter mr-2">See details</p>
          <FiArrowUpRight className="text-brown font-bold text-base" />
        </button>
      </div>
    </div>
  );
};

export default CardNews;
