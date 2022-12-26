import React from "react";
import CardNews from "../components/CardNews";
import Layout from "../components/Layout";
import Slider from "../components/Slider";

function Categories() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
        <div className="lg:col-span-2 md:col-span-2 my-2">
          <div className="w-full h-96">
            <Slider />
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <CardNews
            image={"https://tse2.mm.bing.net/th?id=OIP.BkkfzHNYZAD8u0X51EN2PwHaFa&pid=Api&P=0"}
            title={"Judul Berita"}
            description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum culpa aliquam, nesciunt consequatur accusantium dicta voluptatum"}
          />
        </div>
        <div className=" flex justify-center items-center">
          <CardNews
            image={"https://tse2.mm.bing.net/th?id=OIP.BkkfzHNYZAD8u0X51EN2PwHaFa&pid=Api&P=0"}
            title={"Judul Berita"}
            description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum culpa aliquam, nesciunt consequatur accusantium dicta voluptatum"}
          />
        </div>
        <div className=" flex justify-center items-center">
          <CardNews
            image={"https://tse2.mm.bing.net/th?id=OIP.BkkfzHNYZAD8u0X51EN2PwHaFa&pid=Api&P=0"}
            title={"Judul Berita"}
            description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum culpa aliquam, nesciunt consequatur accusantium dicta voluptatum"}
          />
        </div>
        <div className=" flex justify-center items-center">
          <CardNews
            image={"https://tse2.mm.bing.net/th?id=OIP.BkkfzHNYZAD8u0X51EN2PwHaFa&pid=Api&P=0"}
            title={"Judul Berita"}
            description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum culpa aliquam, nesciunt consequatur accusantium dicta voluptatum"}
          />
        </div>
        <div className=" flex justify-center items-center">
          <CardNews
            image={"https://tse2.mm.bing.net/th?id=OIP.BkkfzHNYZAD8u0X51EN2PwHaFa&pid=Api&P=0"}
            title={"Judul Berita"}
            description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum culpa aliquam, nesciunt consequatur accusantium dicta voluptatum"}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
