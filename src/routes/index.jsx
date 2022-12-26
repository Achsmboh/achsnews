import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages";
import Categories from "../pages/Categories";
import Detail from "../pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories/:title" element={<Categories />} />
        <Route path="/detail/:title" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
