import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CardNews = ({ date, title, description, image, key, alt }) => {
  return (
    <div key={key} className="w-80 h-96 bg-white m-1 mb-4 rounded-2xl shadow-md ">
      <div className="w-full h-52 rounded-2xl">
        <img className="object-cover w-full h-52 rounded-t-2xl" src={image} alt={alt} />
      </div>
      <div className="pl-2 mt-1">
        <p className="text-brown font-Inter text-xs ">Tanggal : {date.substring(0, 10)}</p>
      </div>
      <div className=" px-2 flex flex-col justify-between h-36 ">
        <div>
          <h3 className="font-semibold text-brown font-Inter text-sm">{title}</h3>
          <p className="font-Inter text-brown text-sm">{description?.substring(0, 60)}...</p>
        </div>
        <div className="flex items-center">
          <p className="text-brown font-semibold text-sm font-Inter mr-2">See details</p>
          <FiArrowUpRight className="text-brown font-bold text-base" />
        </div>
      </div>
    </div>
  );
};

export default CardNews;
