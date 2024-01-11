// Navbar.jsx

import React, { useState, useEffect, setAdminStatus } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGOUT_API } from "../../services/api/config";
import {
  Fa3,
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { logoutUserSuccess, reset_login_flag } from "../homePage/login/reducer";
import Login from "./login/Login";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const isAdmin = useSelector((state) => state.login.isAdmin);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
    // { path: "/admin", link: "AdminPanel" }, // AdminPanel linkini şu an kapalı tutuyoruz
  ];

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const response = await axios.delete(`${LOGOUT_API}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response);

      sessionStorage.removeItem("authUser");
      sessionStorage.removeItem("token");
      /*   setAdminStatus(false);  */

      dispatch(logoutUserSuccess());
      dispatch(reset_login_flag());
    } catch (error) {
      console.error("Logout error:", error);

      // Eğer sunucu HTTP 400 hatası döndüyse, hatanın içeriğini kontrol et
      if (error.response) {
        console.error("Server response data:", error.response.data);
      }
    }
  };

  return (
    <header
      style={{ display: show ? "block" : "none" }}
      className="bg-black text-white fixed top-0 min-w-full"
    >
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design <span className="text-orange-500">MYSelf</span>
        </a>

        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
          {isAdmin && (
            <Link to="/admin/postlist" className="text-white">
              Admin Paneli
            </Link>
          )}
        </ul>

        <div className="text-white lg:flex gap-4 items-center hidden">
          <button className="lg:flex bg-orange-500 px-6 py-2 font-medium rounded text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            <Link to="/mobile">Mobile App</Link>
          </button>

          <a href="/" className=" hover:text-orange-500">
            <FaFacebook />{" "}
          </a>
          <a href="/" className=" hover:text-orange-500">
            <FaDribbble />{" "}
          </a>
          <a href="/" className=" hover:text-orange-500">
            <FaTwitter />{" "}
          </a>
          <a href="/" className=" hover:text-orange-500">
            <Fa3 />{" "}
          </a>

          <div className="lg:flex gap-4 items-center hidden">
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-orange-500 px-6 py-2 font-medium rounded text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleLogin}
                  className="bg-orange-500 px-6 py-2 font-medium rounded text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile */}
      <ul
        className={`md:hidden  gap-12 text-lg  space-y-4 px-4 py-6 mt-14 bg-white ${
          isMenuOpen
            ? "fixed top-0 left-0 w-full transition-all ease-out duration150"
            : "hidden"
        }`}
      >
        {navItems.map(({ path, link }) => (
          <li className="text-black " key={path}>
            <NavLink onClick={toggleMenu} to={path}>
              {link}
            </NavLink>
          </li>
        ))}
        {isAdmin && (
          <li className="text-black">
            <Link to="/admin/postlist">Admin Paneli</Link>
          </li>
        )}
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="text-black border-black border-2 placeholder:font-medium rounded  hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={toggleLogin}
              className="text-black border-black border-2 mx-auto px-1 rounded-lg hover:text-orange-500 transition-all duration-200 ease-in"
            >
              Log in
            </button>
          </>
        )}
      </ul>
      {isLoginOpen && <Login toggleLogin={toggleLogin} />}
    </header>
  );
};

export default Navbar;
