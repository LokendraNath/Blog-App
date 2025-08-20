import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header setSidebarOpen={setSidebarOpen} />
      <div>
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
