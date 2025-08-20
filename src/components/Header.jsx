import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="fixed top-0 w-full z-40 border-b-[1px] bg-white px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Bars3CenterLeftIcon
            className="w-7 cursor-pointer"
            onClick={() => setSidebarOpen((prev) => !prev)}
          />
          <NavLink to="/">
            <h1 className="text-3xl font-bold">Blogstar</h1>
          </NavLink>
        </div>
        <div className="flex items-center gap-x-5">
          <NavLink to="/create">
            <PencilIcon className="w-6" />
          </NavLink>
          <UserCircleIcon className="w-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
