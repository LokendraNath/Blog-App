import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10 flex gap-4">
        <Sidebar />
        <main className="flex-1 px-5 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
