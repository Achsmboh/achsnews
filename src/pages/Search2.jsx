import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CardNews from "../components/CardNews";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingThree } from "../components/Loading";
import Swal from "sweetalert2";

function Search2() {
  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
  //   ini untuk masukan search
  const [title, setTitle] = useState();
  const [page, setPage] = useState(1);

  const search = location?.state.search;

  useEffect(() => {
    getSearch();
  }, [page]);

  useEffect(() => {
    getSearch();
  }, [search]);

  function getSearch() {
    setLoading(true);
    axios
      .get(
        `
    https://newsapi.org/v2/top-headlines?q=${search}&country=id&pageSize=10&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
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

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const datasLength = datas?.length;
  return (
    <Layout onSubmit={() => handleSubmit()} onChange={(e) => setTitle(e.target.value)}>
      {datasLength !== 0 ? (
        <div className="mb-3">
          <p className="font-Inter text-sm text-brown lg:col-span-5 md:col-span-2 col-span-1">
            Sekitar {datasLength} hasil pencarian untuk {search}
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full ">
        {loading ? (
          <div className="lg:col-span-5 md:col-span-2 col-span-1 h-96">
            <LoadingThree />
          </div>
        ) : datasLength !== 0 ? (
          datas?.map((datum) => (
            <div className=" flex justify-center items-center">
              <CardNews key={datum.title} onClick={() => handleDetail(datum, datum.title)} title={datum.title} date={datum.publishedAt} image={datum.urlToImage} description={datum.description} />
            </div>
          ))
        ) : (
          <div className=" lg:col-span-5 md:col-span-2 col-span-1 h-96 flex justify-center items-center">
            <div>
              <p className="text-brown font-Inter text-xl w-full text-center">Kami tidak menemukan hasil untuk: {search}</p>
              <p className="text-brown font-Inter text-xl w-full text-center">Periksa ejaan atau ketik kueri baru.</p>
            </div>
          </div>
        )}
      </div>
      <div className="lg:col-span-5 md:col-span-2 col-span-1 flex justify-center items-center">
        <div className="btn-group grid grid-cols-2">
          <button onClick={() => handlePrev()} disabled={page === 1 ? true : false} className="btn btn-outline disabled:hover:bg-transparent hover:bg-brown hover:text-brownmuda text-brown">
            Previous page
          </button>
          <button onClick={() => handleNext()} disabled={datasLength < 10 ? true : false} className="btn btn-outline disabled:hover:bg-transparent hover:bg-brown hover:text-brownmuda text-brown">
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Search2;
