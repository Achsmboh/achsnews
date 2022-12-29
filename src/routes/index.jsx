import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages";
import Categories from "../pages/Categories";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import Search2 from "../pages/Search2";
import Informasi from "../pages/Informasi";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories/:title" element={<Categories />} />
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/cari/:id" element={<Search2 />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
