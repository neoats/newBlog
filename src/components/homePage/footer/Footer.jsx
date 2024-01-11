import React, { useState, useEffect } from "react";
import assets from "../../../assets";
import Line from "./Line";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* gray-part */}
      <div className="flex p-4 bg-gray-800 text-gray-200">
        <div className="max-w-7md mx-auto">
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-24">
            <div className="mb-5">
              <h2 className="font-bold text-md pb-2 border-b hover:border-orange-500 hover:text-orange-500">
                Company
              </h2>
              <div className="pt-2">
                ______________
                <br />
                ______________
                <br />
                ______________
                <br />
                ______________
                <br />
              </div>
            </div>
            <div className="mb-5">
              <h2 className="font-bold text-md pb-2 border-b hover:border-orange-500 hover:text-orange-500">
                Servisler
              </h2>
              <ul className="pt-2 pl-2">
                <li className="text-sm hover:text-orange-500">Home</li>
                <li className="text-sm hover:text-orange-500">Services</li>
                <li className="text-sm hover:text-orange-500">About</li>
                <li className="text-sm hover:text-orange-500">Blogs</li>
                <li className="text-sm hover:text-orange-500">Contact</li>
                <li>
                  <button className="text-sm hover:text-orange-500">
                    Mobile
                  </button>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h2 className="font-bold text-md pb-2 border-b hover:border-orange-500 hover:text-orange-500 ">
                Yararlı Linkler
              </h2>
              <ul className="pt-2 pl-2">
                <li className="text-sm hover:text-orange-500">Web Design</li>
                <li className="text-sm hover:text-orange-500">
                  Web Development
                </li>
                <li className="text-sm hover:text-orange-500">
                  Mobile Development
                </li>
                <li className="text-sm hover:text-orange-500">___________</li>
                <li className="text-sm hover:text-orange-500">___________</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Line />
      {/* orange-part */}
      <div className="flex h-16 bg-orange-600 justify-between">
        <div className="pl-4 lg:pl-8 xl:pl-20">
          <p className="text-white pt-5 mr-4">
            &copy; 2023 - Tüm Hakları Saklıdır
          </p>
        </div>
        <div>
          <button
            id="upBtn"
            className="h-14 w-14  mr-4 lg:mr-8 xl:mr-20 mt-1"
            onClick={handleScrollToTop}
          >
            <img
              src={assets.up}
              alt=""
              className="object-scale-down h-auto w-auto"
            />
          </button>
        </div>
      </div>
      <div className="bg-orange-900 p-1"></div>
    </div>
  );
};

export default Footer;
