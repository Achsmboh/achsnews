import React from "react";
import CardNews from "../components/CardNews";
import Layout from "../components/Layout";

function Categories() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="lg:col-span-2 md:col-span-2 my-2">
          <div className="w-11/12 h-96 bg-green-400"></div>
        </div>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
    </Layout>
  );
}

export default Categories;
