import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { DotLoader, PropagateLoader, ClimbingBoxLoader } from "react-spinners";

const LoadingOne = () => {
  return (
    <div className="sweet-loading  w-full lg:col-span-3 md:col-span-2 h-96 col-span-1 flex justify-center items-center">
      <ClipLoader color={"#1E1E1E"} loading={true} size={150} />
    </div>
  );
};

const LoadingTwo = () => {
  return (
    <div className="sweet-loading h-full w-full col-span-3 flex justify-center items-center">
      <DotLoader color="#1E1E1E" />
    </div>
  );
};

const LoadingThree = () => {
  return (
    <div className="sweet-loading h-full w-full col-span-3 flex justify-center items-center">
      <PropagateLoader color="#1E1E1E" />
    </div>
  );
};

const LoadingFour = () => {
  return (
    <div className="sweet-loading lg:h-96 h-96 w-full col-span-3 flex justify-center items-center">
      <ClimbingBoxLoader color="#1E1E1E" />
    </div>
  );
};

export { LoadingOne, LoadingTwo, LoadingThree, LoadingFour };
