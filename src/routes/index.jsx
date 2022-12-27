import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages";
import Categories from "../pages/Categories";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import Search2 from "../pages/Search2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories/:title" element={<Categories />} />
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/cari/:id" element={<Search2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
