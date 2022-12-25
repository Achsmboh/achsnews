import React from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-brownmuda w-full h-16 px-5 shadow-lg">
      <div className="flex justify-between">
        <div className=" h-16 flex items-center">
          <h2 className="text-brown lg:text-3xl md:text-2xl text-2xl font-Inter font-bold p-2 cursor-pointer">AchsNews.</h2>
        </div>
        <div className="lg:flex md:flex items-center hidden">
          <ul className="flex lg:gap-14 gap-2 text-brown font-Inter font-bold justify-between h-full items-center">
            <li className="">
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">Business</div>
            </li>
            <li>
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">Entertainment</div>
            </li>
            <li>
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">General</div>
            </li>
            <li>
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">Health</div>
            </li>
            <li>
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">Science</div>
            </li>
            <li>
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">Sports</div>
            </li>
            <li>
              <div className="hover:border-b-4 hover:border-b-brown hover:scale-105 transition cursor-pointer text-sm">Technology</div>
            </li>
          </ul>
        </div>
        <div className="h-16 lg:flex items-center hidden">
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered focus:outline-brown bg-white" />
              <button className="btn btn-square bg-brown border-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex mx-2 h-16  items-center">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1">
              <div className="text-2xl  text-brown">
                <BsFillMenuButtonWideFill />
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow focus:bg-brownmuda bg-brownmuda rounded-box w-72">
              <div>
                <div className="w-full ">
                  <div className="form-control w-full bg-red-600-red-300">
                    <div className="input-group w-full">
                      <input type="text" placeholder="Search…" className="input input-bordered focus:outline-brown w-full bg-white" />
                      <button className="btn btn-square bg-brown border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <li className="">
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">Business</div>
              </li>
              <li>
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">Entertainment</div>
              </li>
              <li>
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">General</div>
              </li>
              <li>
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">Health</div>
              </li>
              <li>
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">Science</div>
              </li>
              <li>
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">Sports</div>
              </li>
              <li>
                <div className="hover:border-b-4 hover:border-b-brown hover:bg-brownmuda font-Inter text-brown font-bold cursor-pointer md:hidden flex text-sm">Technology</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;