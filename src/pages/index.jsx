import React from "react";
import Layout from "../components/Layout";
import CardCategories from "../components/CardCategories";
import Slider from "../components/Slider";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardNews from "../components/CardNews";
import { LoadingTwo, LoadingThree } from "../components/Loading";
import Swal from "sweetalert2";

let image = [];
function Dashboard() {
  const [datas, setDatas] = useState();
  const [business, setBusiness] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [general, setGeneral] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);
  const [sports, setSports] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  // ini untuk masukan search
  const [title, setTitle] = useState();

  useEffect(() => {
    getBusiness();
    getEntertainment();
    getGeneral();
    getHealth();
    getScience();
    getSports();
    getTechnology();
  }, []);

  function getBusiness() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=business&pageSize=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setBusiness(result[0]);
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

  function getEntertainment() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Entertainment&pageSize=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setEntertainment(result[0]);
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

  function getGeneral() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=General&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setGeneral(result[0]);
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

  function getHealth() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=health&pageSize=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setHealth(result[1]);
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

  function getScience() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Science&pageSize=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setScience(result[0]);
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

  function getSports() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Sports&pageSize=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setSports(result[0]);
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

  function getTechnology() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Technology&pageSize=2&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setTechnology(result[0]);
      })
      .catch((err) => {
        console.log(err);
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

  function handleCategory(category) {
    Navigate(`/categories/${category}`, {
      state: {
        category: category,
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
    event.preventDevault("");
  }

  return (
    <Layout onSubmit={() => handleSubmit()} onChange={(e) => setTitle(e.target.value)}>
      <div>
        <div className="h-96  w-full">{loading ? <LoadingTwo /> : <Slider image={image} />}</div>
        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories
            categories={"Business"}
            title={business.title}
            description={business.description}
            image={business.urlToImage}
            onClick={() => handleDetail(business, business.title)}
            onCategories={() => handleCategory("Business")}
          />
        )}

        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories
            categories={"Entertainment"}
            title={entertainment.title}
            description={entertainment.description}
            image={entertainment.urlToImage}
            onClick={() => handleDetail(entertainment, entertainment.title)}
            onCategories={() => handleCategory("Entertainment")}
          />
        )}

        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories categories={"General"} title={general.title} description={general.description} image={general.urlToImage} onClick={() => handleDetail(general, general.title)} onCategories={() => handleCategory("General")} />
        )}

        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories categories={"Health"} title={health.title} description={health.description} image={health.urlToImage} onClick={() => handleDetail(health, health.title)} onCategories={() => handleCategory("Health")} />
        )}

        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories categories={"Science"} title={science.title} description={science.description} image={science.urlToImage} onClick={() => handleDetail(science, science.title)} onCategories={() => handleCategory("Science")} />
        )}

        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories categories={"Sports"} title={sports.title} description={sports.description} image={sports.urlToImage} onClick={() => handleDetail(sports, sports.title)} onCategories={() => handleCategory("Sports")} />
        )}

        {loading ? (
          <LoadingThree />
        ) : (
          <CardCategories
            categories={"Technology"}
            title={technology.title}
            description={technology.description}
            image={technology.urlToImage}
            onClick={() => handleDetail(technology, technology.title)}
            onCategories={() => handleCategory("Technology")}
          />
        )}

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
          {loading ? (
            <LoadingThree />
          ) : (
            datas?.map((item) => (
              <div className=" flex justify-center items-center">
                <CardNews image={item.urlToImage} title={item.title} description={item.description} alt={item.title} key={item.urlToImage} date={item.publishedAt} onClick={() => handleDetail(item, item.title)} />
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
