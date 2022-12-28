import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, onChange, onSubmit, border }) => {
  return (
    <div className="bg-brownmuda">
      <div className="h-screen overflow-auto ">
        <div className="top-0 sticky z-20">
          <Navbar onChange={onChange} onSubmit={onSubmit} border={border} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="p-7">{children}</div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
