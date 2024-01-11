import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const navItems = [
    { path: "addpost", link: "AddPost" },
    { path: "postlist", link: "PostList" },
  ];

  return (
    <div className="bg-blue-500 border-b-4 border-blue-800 p-4 text-white text-center">
      <nav class="flex items-center justify-between flex-wrap rounded-2xl bg-gray-800 p-4">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl text-orange-600">Panel</span>
        </div>
        <div class="w-full block flex-grow lg:w-auto lg:flex lg:items-center lg:justify-between">
          <div class="text-sm lg:flex lg:justify-between lg:mr-3">
            {/* Map navItems to create NavLinks */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block px-4 py-2 lg:inline-block leading-tight text-gray-300  hover:text-white rounded-md hover:bg-gray-700"
              >
                {item.link}
              </NavLink>
            ))}
          </div>
          <div class="flex items-center">
       
            <button className='lg:flex rounded-md border-black  border-2 bg-orange-500 px-3  py-2 font-medium text-justify text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>
                <Link to="/">Ana Sayfa</Link>
              </button>
          </div>
        </div>
        <div class="hidden lg:block">
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-tight rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Submit Report
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
