// Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGOUT_API } from "../../../services/api/config";
import {
  Fa3,
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { logoutUserSuccess, reset_login_flag } from "../login/reducer";
import Login from "../login/Login";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Line from "./Line";
import axios from "axios";
import { format } from "util";
import fmode from "../../../assets";
import { getLatestTitle } from "../../../services/dbquery";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const isAdmin = useSelector((state) => state.login.isAdmin);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  function thick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const z = format(
      formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
    );

    setTime(z);
  }
  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/news", link: "News" },
    { path: "/products", link: "Products" },
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
    const intervalId = setInterval(() => {
      thick();
    }, 1000);

    return () => {};
  }, []);

  useEffect(() => {
    async function fetchTitle() {
      try {
        const postsTitle = await getLatestTitle();
        setTitle(postsTitle);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchTitle();
  }, []);

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
  const displaySingleTitle = () => {
    if (title && Array.isArray(title?.posts) && title.posts.length > 0) {
      const lastIndex = title.posts.length - 1;
      let nextIndex = currentIndex;

      const handleIndexChange = (increment) => {
        nextIndex += increment;

        // Kontrol ekleyerek indeksi sınırla
        if (nextIndex < 0) {
          nextIndex = 0;
        } else if (nextIndex > lastIndex) {
          nextIndex = lastIndex;
        }
        setCurrentIndex(nextIndex);
        useEffect(() => {
          const intervalId = setInterval(() => {
            handleIndexChange(1); // Her 5 saniyede bir indeksi artır
          }, 5000);

          // Temizleme işlemi
          return () => clearInterval(intervalId);
        }, [currentIndex]);
      };
      const currentTitle = title.posts[currentIndex]?.title;

      return (
        <div className="flex gap-2">
          <h1 className="text-center font-bold text-black px-2 rounded-tl-xl rounded-br-xl bg-white">
            Latest
          </h1>

          <div className="flex-col flex  justify-center items-center">
            <button
              onClick={() => handleIndexChange(+1)}
              className="text-sm  hover:text-orange-500 transition-all duration-200 ease-in"
            >
              <IoIosArrowUp />
            </button>
            <button
              onClick={() => handleIndexChange(-1)}
              className="text-sm  hover:text-orange-500 transition-all duration-200 ease-in"
            >
              <IoIosArrowDown />
            </button>
          </div>

          <div>{currentTitle}</div>
        </div>
      );
    } else {
      return null; // Eğer title boşsa veya posts dizisi yoksa hiçbir şey gösterme
    }
  };

  return (
    <header
      style={{ display: show ? "block" : "none" }}
      className="bg-black text-white"
    >
      {/* Subheader */}
      <div className="flex justify-center items-center gap-44 mx-auto overflow-x-hidden">
        <div className="flex gap-2">{displaySingleTitle()}</div>

        <div>
          <h1 className="text-3xl  my-auto font-extrabold font-digital text-green-600">
            {time}
          </h1>
        </div>

        <div>DENEME</div>
      </div>
      <div className="mt-1">
        <Line />
      </div>
      {/* Subheader */}

      <div>
        <nav className="px-2 py-1 justify-center   flex">
          <img src={fmode.fmode} alt="mockup" className="h-12 w-36 mr-3" />
          <ul className="md:flex md:gap-3 lg:gap-6 xl:gap-8  justify-center  items-center text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li className="text-white " key={path}>
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
            <button className="lg:flex bg-orange-500 px-4 py-1 font-medium rounded text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
              <Link to="/mobile">Mobile App</Link>
            </button>

            {isAdmin && (
              <Link to="/admin/postlist" className="text-white">
                Admin Paneli
              </Link>
            )}
          </ul>

          <div className="text-white ml-2 lg:flex gap-3 items-center hidden">
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
                className="text-black border-black border-2  mx-auto px-1 rounded-lg hover:text-orange-500 transition-all duration-200 ease-in"
              >
                Log in
              </button>
            </>
          )}
        </ul>
        {isLoginOpen && <Login toggleLogin={toggleLogin} />}
      </div>
    </header>
  );
};

export default Navbar;
