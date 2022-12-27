import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CardNews from "../components/CardNews";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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
        console.log(err);
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

  return (
    <Layout onChange={(e) => setSearch(e.target.value)} onSubmit={() => handleSubmit()}>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full ">
        {datas ? (
          datas.map((datum) => (
            <div className=" flex justify-center items-center">
              <CardNews key={datum.title} onClick={() => handleDetail(datum, datum.title)} title={datum.title} date={datum.publishedAt} image={datum.urlToImage} description={datum.description} />
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </Layout>
  );
}

export default Search;
