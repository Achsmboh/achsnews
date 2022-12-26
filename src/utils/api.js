import axios from "axios";

const instance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?country=id&category=`,
});

export default {
  getCategorie: (category) =>
    instance({
      method: `GET`,
      url: `${category}&apiKey=${process.env.REACT_APP_API_KEY}`,
    }),

  getDetail: (category) =>
    instance({
      method: `GET`,
      url: `${category}&apiKey=${process.env.REACT_APP_API_KEY}`,
    }),
};
