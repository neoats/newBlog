import React from "react";
import Navbar from "../../components/admin/navbar/NavBar";
import Footer from "../../components/admin/Footer";
import { Outlet } from "react-router-dom";
const AdminPanel = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className=" overflow-y-scroll flex-1">
        <Outlet />
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default AdminPanel;
