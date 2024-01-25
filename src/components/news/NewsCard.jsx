import React from "react";
import moment from "moment";

const NewsCard = ({ news }) => {
  const cardHeight = 825;
  return (
    <div
      className="flex flex-col border-black border-dotted   bg-gray-400 rounded-sm  mb-12"
      style={{ height: `${cardHeight}px` }}
    >
      {/* picture */}
      {/* picture */}
      <div className="  rounded-lg">
        <div className="">
          {news.urlToImage ? (
            <img
              src={news.urlToImage}
              alt={news.title}
              className="w-96 h-96 "
            />
          ) : (
            <div className="bg-gray-300 h-96 w-full">
              <h1 className="absolute inset-0 text-2xl font-bold text-gray-500 transform -rotate-45 flex items-center justify-center">
                The file can't be found.
              </h1>
            </div>
          )}
        </div>
      </div>
      {/* title */}
      <div className="my-2 flex flex-col items-center">
        <p className=" text-md font-semibold text-gray-700 ">{news.author}</p>
        <div className="font-medium  text-sm text-gray-700 ">
          <span>{moment(news.publishedAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      {/* content */}
      <div className=" p-6 mt-2">
        <h1 className="text-center mb-4 text-2xl font-semibold">
          {news.title}
        </h1>

        <p className="text-center text-lg text-gray-700 mb-4">
          {news.description && (
            <>
              {news.description.slice(0, 100)}
              {news.description.length > 100 && " ... "}
            </>
          )}
        </p>

        <div className="text-center">
          <a href={news.url}>
            <button className="border-r-4 font-bold border-b-4 px-2 py-1 border-black duration-500 ease  hover:-translate-y-1 inline-block bg-orange-600 text-base rounded-sm text-white cursor-pointer z-1">
              Okumaya Devam Et
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
