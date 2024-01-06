import React, { useState, useEffect, useRef, useContext } from "react";
import "./LoginForm2.css";

import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { LOGIN_API } from "../../../services/api/config";

import { APIClient } from "./api_helper";
import {
  loginSuccess,
  apiError,
} from "./reducer";
import { useDispatch } from "react-redux";

const LoginForm2 = ({ toggleLogin }) => {
  const dispatch = useDispatch();
  const userRef = useRef(null);
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [username, pwd]);

/*   const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${LOGIN_API}`,
        { username: username, password: pwd },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const accessToken = response.data.accessToken;
      const auth = response.data.user.isAdmin;

      setIsAdmin(auth);
      // setIsLoggedIn(true);
      setUsername('');
      setPwd('');
      toggleLogin();
   console.log(response)
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid username or password');
      setIsLoggedIn(false);
    }
  }; */

  const handleClose = () => {
    setError(null);
    setIsLoggedIn(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await new APIClient().create(`${LOGIN_API}`, {
        username: username,
        password: pwd,
      });
      if (response) {
        dispatch(
          loginSuccess({
            user: response.user, // Kullanıcı bilgisi
            isAdmin: response.user.isAdmin, // isAdmin bilgisi
            isLoggedIn: true,
          })
        );
        sessionStorage.setItem("authUser", JSON.stringify(response));
        console.log(response);
        sessionStorage.setItem("token", response.accessToken);
        toggleLogin();
      }
    } catch (error) {
      dispatch(apiError(error.message));
      console.error("Error during login:", error);
      setError("Invalid username or password");
    }
    
  };
  
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form onSubmit={handleSubmit}>
        {/* Close button for the popup */}
        <button
          onClick={toggleLogin}
          className="left-4 text-black hover:text-orange-600"
        >
          <FaXmark className="w-5 h-5" />
        </button>
        {/* Login form */}
        <h1 className="mb-3 fw-normal">Please sign in</h1>

        <div className="inputBox">
          <span>Email or Username</span>
          <input
            type="text"
            id="username"
            name="username"
            ref={userRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i></i>
        </div>

        <div className="inputBox">
          <span>Password</span>
          <input
            type="password"
            id="password"
            name="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          <i></i>
        </div>

        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Sign Up</a>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-orange-500 w-32 mt-2 px-6 py-2 font-medium rounded-sm text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
        >
          Log in
        </button>

        <h5 className="h5 mb-3 fw-normal">&copy; 2022-2023</h5>
      </form>
    </div>
  );
};

export default LoginForm2;
