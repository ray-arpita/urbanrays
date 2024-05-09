import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
