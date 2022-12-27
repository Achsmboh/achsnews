import React, { useState } from "react";
import Layout from "../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

function Detail() {
  const location = useLocation();
  const [title, setTitle] = useState();
  const Navigate = useNavigate();

  const item = location?.state?.item;

  // function untuk search
  function handleSubmit(event) {
    Navigate(`/search/${title}`, {
      state: {
        title: title,
      },
    });
    event.preventDevault();
  }

  return (
    <Layout onChange={(e) => setTitle(e.target.value)} onSubmit={() => handleSubmit()}>
      <div className="lg:grid grid-cols-2 gap-5">
        <div className="h-96 w-full">
          <img className="w-full h-full object-cover object-top" src={item.urlToImage} alt={item.title} />
        </div>
        <div>
          <div className="py-3">
            <h2 className="text-brown font-semibold font-Inter text-3xl">{item.title}</h2>
          </div>
          <div className="my-1 flex items-center">
            <div className="flex items-center">
              <div className="text-brown text-base mr-2">
                <AiOutlineClockCircle />
              </div>
              <div>
                <p className="text-brown font-semibold font-Inter text-sm">{item.publishedAt.substring(0, 10)}</p>
              </div>
            </div>
            <div className="flex items-center ml-5">
              <div className="text-brown text-sm mr-2">
                <BsPencilFill />
              </div>
              <div>
                <p className="text-brown font-Inter text-sm capitalize"> {item.author}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-brown font-Inter text-sm">{item.description}</p>
            <p className="text-brown font-Inter text-sm">
              {item.content}{" "}
              <a href={item.url} className="text-blue-600 font-Inter underline">
                baca selengkapnya...
              </a>
            </p>

            <p className="text-brown font-Inter text-sm mt-10">Artikel ini tayang di {item.source.name}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Detail;
