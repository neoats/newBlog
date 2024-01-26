import React from "react";

const Button = ({ url }) => {
  return (
    <div id="pButton" className="rounded-lg">
      <button className="lg:flex shadow-lg shadow-black border-black border-b-2  border-r-4 bg-orange-500 px-3  py-3 rounded-lg font-medium text-justify text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
        <a className="font-extrabold" href={url}>
          Live Preview
        </a>
      </button>
    </div>
  );
};

export default Button;
