import React from "react";
import Layout from "../components/Layout";
import image from "../assets/notfound.svg";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

function NotFound() {
  return (
    <div className="bg-brownmuda">
      <div className="h-screen overflow-auto ">
        <div className="top-0 sticky z-20"></div>
        <div className="flex flex-col justify-between h-full">
          <div className="p-7 w-full h-full flex justify-center items-center flex-col">
            <div className="flex flex-col justify-around items-center h-full">
              <div className="flex flex-col items-center">
                <img className="lg:w-64 md:w-64 w-32 h-auto object-cover" src={image} alt={image} />
                <p className="font-Inter text-brown text-sm my-5">Halaman ini tidak tersedia. Mohon maaf soal ini.</p>
                <Link to={"/"}>
                  <button className="btn bg-transparent normal-case text-brown font-Inter hover:bg-brown hover:text-brownmuda font-normal">Back to Home</button>
                </Link>
              </div>
              <div className="">
                <p className="text-brown text-sm font-Inter flex items-center justify-center">
                  Copyright <FaRegCopyright className="mx-1" /> 2022 - Achmad Maulana Achsan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
