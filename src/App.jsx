// App.jsx
import React from "react";
import { Provider } from "react-redux";
import store from "./components/homePage/login/store";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className=" flex-1">
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;