import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="sm:ml-64 mt-10">
        {/* <main className="flex-1">{children}</main> */}
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default Layout;
