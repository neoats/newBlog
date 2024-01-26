import React from "react";

const Product = ({ imgUrl }) => {
  return (
    <div
      id="Product"
      className="flex rounded-sm items-center bg-slate-700 shadow-2xl shadow-black  justify-center relative "
    >
      {imgUrl ? (
        <img src={imgUrl} alt="" />
      ) : (
        <h1 id="hProduct" className=" text-4xl font-bold text-gray-500">
          Product Not Yet
        </h1>
      )}
    </div>
  );
};

export default Product;
