import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="bg border-b z-40 px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Bars3CenterLeftIcon
          className="w-7 cursor-pointer"
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
        <h1 className="text-3xl font-bold">Blogstar</h1>
      </div>
      <div className="flex items-center gap-x-10">
        <MagnifyingGlassIcon className="w-6" />
        <UserCircleIcon className="w-10" />
      </div>
    </header>
  );
};

export default Header;
