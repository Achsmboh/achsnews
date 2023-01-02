import React, { useState, useEffect } from "react";
import CardNews from "../components/CardNews";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingOne, LoadingTwo } from "../components/Loading";
import Swal from "sweetalert2";

function Categories() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
  const [title, setTitle] = useState();
  const [page, setPage] = useState(1);

  const category = location?.state.category;

  useEffect(() => {
    getCategory();
    setPage(1);
  }, [category]);

  useEffect(() => {
    getCategory();
  }, [page]);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  function getCategory() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&pageSize=8&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setDatas(result);
      })
      .catch((err) => {
        err.response.status === 429
          ? Navigate("/informasi")
          : Swal.fire({
              icon: "error",
              title: err.response.data.code,
              text: err.response.data.message,
            });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  let image = [];
  datas?.map((datum) => {
    image.push(datum.urlToImage);
  });

  function handleDetail(item, title) {
    Navigate(`/detail/${title}`, {
      state: {
        item: item,
      },
    });
  }

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
    <Layout border={category} onChange={(e) => setTitle(e.target.value)} onSubmit={() => handleSubmit()}>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
        <div className="lg:col-span-2 md:col-span-2 mt-1 lg:my-0 my-2 ">
          <div className="w-full h-96 shadow-2xl rounded-2xl">{loading ? <LoadingTwo /> : <Slider image={image} />}</div>
        </div>
        {loading ? (
          <LoadingOne />
        ) : datas?.length !== 0 ? (
          datas?.map((item) => (
            <div className=" flex justify-center items-center">
              <CardNews image={item.urlToImage} title={item.title} description={item.description} alt={item.title} key={item.id} date={item.publishedAt} onClick={() => handleDetail(item, item.title)} />
            </div>
          ))
        ) : (
          <div className=" lg:col-span-5 md:col-span-2 col-span-1 h-96 flex justify-center items-center">
            <div>
              <p className="text-brown font-Inter text-xl w-full text-center">Kami tidak menemukan hasil lagi untuk kategori : {category}</p>
              <p className="text-brown font-Inter text-xl w-full text-center">Silakan kembali ke page sebelumnya.</p>
            </div>
          </div>
        )}

        <div className="lg:col-span-5 md:col-span-2 col-span-1 flex justify-center items-center">
          <div className="btn-group grid grid-cols-2">
            <button disabled={page === 1 ? true : false} className="btn btn-outline text-brown disabled:hover:bg-transparent hover:bg-brown hover:text-brownmuda" onClick={() => handlePrev()}>
              Previous page
            </button>
            <button disabled={datas.length < 8 ? true : false} className="btn btn-outline disabled:hover:bg-transparent hover:bg-brown hover:text-brownmuda text-brown" onClick={() => handleNext()}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
