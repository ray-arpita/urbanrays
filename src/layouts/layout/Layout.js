import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
