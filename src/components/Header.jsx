import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = ({ setSidebarOpen }) => {
  const location = useLocation();

  const isCreatePage = location.pathname === "/create";

  return (
    <header className="fixed top-0 z-40 w-full border-b-[1px] bg-white px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <NavLink to="/">
            <h1 className="text-3xl font-bold">Blogstar</h1>
          </NavLink>
        </div>
        {isCreatePage ? (
          <NavLink to="/profile">
            <UserCircleIcon className="w-8" />
          </NavLink>
        ) : (
          <div className="flex items-center gap-x-10">
            <NavLink to="/create" className="flex gap-x-2">
              <PencilSquareIcon className="w-6" />
              <p className="hidden md:block">Write</p>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
