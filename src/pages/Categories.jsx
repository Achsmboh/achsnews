import React, { useState, useEffect } from "react";
import CardNews from "../components/CardNews";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Categories() {
  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

  const category = location?.state.category;

  useEffect(() => {
    getCategory();
  }, [category]);

  function getCategory() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`)
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

  let image = [];
  datas?.map((datum) => {
    image.push(datum.urlToImage);
  });

  useEffect(() => {
    datas?.map((datum) => {
      image.push(datum.urlToImage);
    });
  }, [loading]);

  function handleDetail(item, title) {
    Navigate(`/detail/${title}`, {
      state: {
        item: item,
      },
    });
  }

  return (
    <Layout>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
        <div className="lg:col-span-2 md:col-span-2 my-2 ">
          <div className="w-full h-96 shadow-2xl rounded-2xl">{loading ? <p>Please wait ...</p> : <Slider image={image} />}</div>
        </div>
        {loading ? (
          <p>Please Wait</p>
        ) : (
          datas?.map((item) => (
            <div className=" flex justify-center items-center">
              <CardNews image={item.urlToImage} title={item.title} description={item.description} alt={item.title} key={item.id} date={item.publishedAt} onClick={() => handleDetail(item, item.title)} />
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}

export default Categories;
