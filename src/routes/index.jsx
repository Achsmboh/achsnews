import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages";
import Categories from "../pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories/:title" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
