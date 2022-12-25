import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CardNews = () => {
  return (
    <div className="w-72 h-96 bg-white m-1 mb-4 rounded-2xl shadow-md w-fu">
      <div className="w-full h-52 rounded-2xl">
        <img className="object-cover w-full h-52 rounded-t-2xl" src="https://tse2.mm.bing.net/th?id=OIP.BkkfzHNYZAD8u0X51EN2PwHaFa&pid=Api&P=0" alt="foto" />
      </div>
      <div className="p-2 flex flex-col justify-between h-40 ">
        <div>
          <h3 className="font-semibold text-brown font-Inter text-sm">Judul Berita</h3>
          <p className="font-Inter text-brown text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum culpa aliquam, nesciunt consequatur accusantium dicta voluptatum</p>
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
