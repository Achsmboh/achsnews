import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();

  function handleCategory(category) {
    Navigate(`/categories/${category}`, {
      state: {
        category: category,
      },
    });
  }

  return (
    <div className=" bg-brown w-full lg:h-80 p-7">
      <div className="lg:grid md:grid grid-cols-2 lg:h-full">
        <div className="flex flex-col">
          <div className="lg:w-2/3 w-full">
            <Link to={"/"}>
              <h2 className="text-brownmuda lg:text-3xl md:text-2xl text-2xl font-Inter font-bold  cursor-pointer mb-3">AchsNews.</h2>
            </Link>

            <div className="flex flex-col justify-between lg:h-full">
              <div>
                <p className="font-Inter text-brownmuda text-sm">
                  AchsNews merupakan salah satu portfolio yang saya miliki. Achsnews adalah sebuah web yang
                  <span title="Achmad Maulana Achsan">
                    {` `}
                    <a href="https://achmad-maulana-achsan.netlify.app/">saya</a>
                    {` `}
                  </span>
                  buat dan kelola sebagai salah satu contoh dari karya atau hasil pekerjaan saya.
                </p>
              </div>
              <div>
                <p className="font-Inter text-brownmuda my-2 text-sm" title="Nomor WhatsApp">
                  +6285727966282
                </p>
                <p className="font-Inter text-brownmuda text-sm" title="Email">
                  maulana.achsanxiipa1@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid lg:grid-cols-3 grid-cols-2 h-full">
          <div className="w-full h-full  flex lg:justify-center md:justify-center">
            <ul>
              <p className="text-brownmuda font-Inter font-bold lg:mb-2 ">Categories</p>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button title="Business" onClick={() => handleCategory("Business")}>
                  Business
                </button>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button title="Entertainment" onClick={() => handleCategory("Entertainment")}>
                  Entertainment
                </button>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button onClick={() => handleCategory("General")} title="General">
                  General
                </button>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button title="Health" onClick={() => handleCategory("Health")}>
                  {" "}
                  Health
                </button>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button title="Science" onClick={() => handleCategory("Science")}>
                  Science
                </button>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button title="Sports" onClick={() => handleCategory("Sports")}>
                  Sports
                </button>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <button title="Technology" onClick={() => handleCategory("Technology")}>
                  Technology
                </button>
              </li>
            </ul>
          </div>
          <div
            className="w-full flex 
           flex-col lg:items-center md:items-center "
          >
            <ul>
              <p className="text-brownmuda font-Inter font-bold lg:mb-2">About</p>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <p>
                  <a href="https://achmad-maulana-achsan.netlify.app/">About me</a>
                </p>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <a href="https://wa.me/085727966282">Contact</a>
              </li>
            </ul>
            <ul className="lg:hidden mt-2 flex flex-col items-start">
              <p className="text-brownmuda font-Inter font-bold  ">Follow Us</p>
              <li className="text-brownmuda font-Inter text-sm ">
                <a href="https://www.linkedin.com/in/achmad-maulana-achsan-3579921bb/">Linkedin</a>
              </li>
              <li className="text-brownmuda font-Inter text-sm cursor-pointer">
                <a href="https://www.instagram.com/achsmboh/"> Instagram</a>
              </li>
              <li className="text-brownmuda font-Inter text-sm ">
                <a href="https://www.youtube.com/channel/UC54B_C_h-_9LrNheCNdhQdQ">Youtube</a>
              </li>
              <li className="text-brownmuda font-Inter text-sm ">
                <a href="https://github.com/Achsmboh">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="w-full h-full lg:flex justify-center  hidden">
            <ul>
              <p className="text-brownmuda font-Inter font-bold lg:mb-2 ">Follow Us</p>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <a href="https://www.linkedin.com/in/achmad-maulana-achsan-3579921bb/">Linkedin</a>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <a href="https://www.instagram.com/achsmboh/">Instagram</a>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <a href="https://www.youtube.com/channel/UC54B_C_h-_9LrNheCNdhQdQ">Youtube</a>
              </li>
              <li className="text-brownmuda font-Inter text-sm lg:mb-2">
                <a href="https://github.com/Achsmboh">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:mt-0 md:mt-0 mt-2">
        <p className="text-brownmuda text-sm font-Inter flex items-center lg:justify-start md:justify-start justify-center">
          Copyright <FaRegCopyright className="mx-1" /> 2022 - Achmad Maulana Achsan
        </p>
      </div>
    </div>
  );
};

export default Footer;
