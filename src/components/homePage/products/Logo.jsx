import React from "react";

const Logo = ({ imgUrl }) => {
  return (
    <div
      id="pLogo"
      className="w-20 h-20 flex rounded-sm  items-center bg-slate-700 shadow-lg shadow-black/100 justify-center"
    >
      {imgUrl ? (
        <img
          src={imgUrl}
          className=" rounded-sm object-fill h-full w-full"
          alt=""
        />
      ) : (
        <h1 className=" text-4xl font-bold text-gray-500">?</h1>
      )}
    </div>
  );
};

export default Logo;
