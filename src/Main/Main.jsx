import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footers";
import Headers from "../component/Headers/Headers";

const Main = () => {
  return (
    <div>
      <Headers />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
