import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-brown w-full lg:h-80 p-7">
      <div className="lg:grid md:grid grid-cols-2 lg:h-full">
        <div className="flex flex-col">
          <div className="lg:w-2/3 w-full">
            <h2 className="text-brownmuda lg:text-3xl md:text-2xl text-2xl font-Inter font-bold  cursor-pointer mb-3">AchsNews.</h2>
            <div className="flex flex-col justify-between lg:h-full">
              <div>
                <p className="font-Inter text-brownmuda text-sm">
                  AchsNews merupakan salah satu portfolio yang saya miliki. Achsnews adalah sebuah web yang saya buat dan kelola sebagai salah satu contoh dari karya atau hasil pekerjaan saya.
                </p>
              </div>
              <div>
                <p className="font-Inter text-brownmuda my-2 text-sm">+6285727966282</p>
                <p className="font-Inter text-brownmuda text-sm">maulana.achsanxiipa1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid lg:grid-cols-3 grid-cols-2 h-full">
          <div className="w-full h-full  flex lg:justify-center md:justify-center">
            <ul>
              <p className="text-brownmuda font-Inter font-bold lg:mb-2 ">Categories</p>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Business</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Entertainment</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">General</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Health</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Science</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Sports</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Technology</li>
            </ul>
          </div>
          <div
            className="w-full flex 
           flex-col lg:items-center md:items-center "
          >
            <ul>
              <p className="text-brownmuda font-Inter font-bold lg:mb-2">About</p>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">About me </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Contact</li>
            </ul>
            <ul className="lg:hidden mt-2 flex flex-col items-start">
              <p className="text-brownmuda font-Inter font-bold  ">Follow Us</p>
              <li className="text-brownmuda font-Inter text-sm ">Linkedin</li>
              <li className="text-brownmuda font-Inter text-sm ">Instagram</li>
              <li className="text-brownmuda font-Inter text-sm ">Youtube</li>
            </ul>
          </div>
          <div className="w-full h-full lg:flex justify-center  hidden">
            <ul>
              <p className="text-brownmuda font-Inter font-bold lg:mb-2 ">Follow Us</p>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Linkedin</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Instagram</li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-brownmuda text-sm font-Inter flex items-center lg:justify-start md:justify-start justify-center">
          2022 <FaRegCopyright className="mx-1" /> Achmad Maulana Achsan
        </p>
      </div>
    </div>
  );
};

export default Footer;
