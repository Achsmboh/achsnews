import React from "react";
import Layout from "../components/Layout";
import CardCategories from "../components/CardCategories";
import Slider from "../components/Slider";
import { useState, useEffect } from "react";
import axios from "axios";
import image0 from "../assets/image1.jpg";
import ima2 from "../assets/image2.jpg";
import ima3 from "../assets/image3.jpg";

function Dashboard() {
  const [image1, setImage1] = useState(image0);
  const [image2, setImage2] = useState(ima2);
  const [image3, setImage3] = useState(ima3);
  const [business, setBusiness] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [general, setGeneral] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);
  const [sports, setSports] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [loading, setLoading] = useState(false);
  const image = [image1, image2, image3];

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
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setBusiness(result[0]);
        setImage1(result[0].urlToImage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getEntertainment() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Entertainment&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setEntertainment(result[0]);
        setImage2(result[0].urlToImage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getGeneral() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=General&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setGeneral(result[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getHealth() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setHealth(result[1]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getScience() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Science&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setScience(result[0]);
        setImage3(result[0].urlToImage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getSports() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Sports&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setSports(result[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getTechnology() {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=Technology&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        const result = ress.data.articles;
        setTechnology(result[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  console.log("url", business.urlToImage);

  console.log("image", image);

  return (
    <Layout>
      <div>
        <div className="h-96 bg-yellow-500 w-full">
          <Slider image={image} />
        </div>
        {loading ? <p>Please wait</p> : <CardCategories categories={"Business"} title={business.title} description={business.description} image={business.urlToImage} />}

        <CardCategories categories={"Entertainment"} title={entertainment.title} description={entertainment.description} image={entertainment.urlToImage} />
        <CardCategories categories={"General"} title={general.title} description={general.description} image={general.urlToImage} />
        <CardCategories categories={"Health"} title={health.title} description={health.description} image={health.urlToImage} />
        <CardCategories categories={"Science"} title={science.title} description={science.description} image={science.urlToImage} />
        <CardCategories categories={"Sports"} title={sports.title} description={sports.description} image={sports.urlToImage} />
        <CardCategories categories={"Technology"} title={technology.title} description={technology.description} image={technology.urlToImage} />
      </div>
    </Layout>
  );
}

export default Dashboard;
