import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import Dashboard from "./pages";
import Categories from "./pages/Categories";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Categories />
  </React.StrictMode>
);
