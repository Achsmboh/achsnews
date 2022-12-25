import React from "react";
import Layout from "../components/Layout";
import CardCategories from "../components/CardCategories";
import Slider from "../components/Slider";

function Dashboard() {
  return (
    <Layout>
      <div>
        <div className="h-96 bg-yellow-500 w-full">
          <Slider />
        </div>
        <CardCategories
          categories={"Business"}
          title={"Judul Berita"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio dolorem, minus hic repudiandae voluptas aspernatur consectetur id sequi assumenda unde doloremque ratione eligendi neque molestias? Atque illum itaquelaboriosam."
          }
          image={"https://tse1.mm.bing.net/th?id=OIP.PVYHn6BzAueWu6hyxf3hzgHaE7&pid=Api&P=0"}
        />
        <CardCategories
          categories={"Entertainment"}
          title={"Judul Berita"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio dolorem, minus hic repudiandae voluptas aspernatur consectetur id sequi assumenda unde doloremque ratione eligendi neque molestias? Atque illum itaquelaboriosam."
          }
          image={"https://tse1.mm.bing.net/th?id=OIP.PVYHn6BzAueWu6hyxf3hzgHaE7&pid=Api&P=0"}
        />
        <CardCategories
          categories={"Sports"}
          title={"Judul Berita"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio dolorem, minus hic repudiandae voluptas aspernatur consectetur id sequi assumenda unde doloremque ratione eligendi neque molestias? Atque illum itaquelaboriosam."
          }
          image={"https://tse1.mm.bing.net/th?id=OIP.PVYHn6BzAueWu6hyxf3hzgHaE7&pid=Api&P=0"}
        />
      </div>
    </Layout>
  );
}

export default Dashboard;
