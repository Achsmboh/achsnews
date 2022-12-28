import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CardNews from "../components/CardNews";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingThree } from "../components/Loading";
import Swal from "sweetalert2";

function Search() {
  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
  // masukan Search
  const [search, setSearch] = useState();

  const title = location?.state.title;

  useEffect(() => {
    getSearch();
  }, [title]);

  function getSearch() {
    setLoading(true);
    axios
      .get(
        `
    https://newsapi.org/v2/top-headlines?q=${title}&country=id&apiKey=${process.env.REACT_APP_API_KEY}`
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
    Navigate(`/cari/${search}`, {
      state: {
        search: search,
      },
    });
    event.preventDevault("");
  }

  const datasLength = datas?.length;
  return (
    <Layout onChange={(e) => setSearch(e.target.value)} onSubmit={() => handleSubmit()}>
      {datasLength !== 0 ? (
        <div className="mb-3">
          <p className="font-Inter text-sm text-brown lg:col-span-5 md:col-span-2 col-span-1">
            Sekitar {datasLength} hasil pencarian untuk {title}
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
          <div className=" lg:col-span-5 md:col-span-2 col-span-1 lg:h-96 flex justify-center items-center">
            <div>
              <p className="text-brown font-Inter text-xl w-full text-center">Kami tidak menemukan hasil untuk: {title}</p>
              <p className="text-brown font-Inter text-xl w-full text-center">Periksa ejaan atau ketik kueri baru.</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Search;
