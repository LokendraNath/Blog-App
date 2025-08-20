import React from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  Bars3CenterLeftIcon,
  BookmarkIcon,
  BookOpenIcon,
  HomeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 z-50 bg-gray-100 min-h-screen w-54 px-5 py-4 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-54"
      }`}
    >
      <div className="flex items-center gap-x-3">
        <Bars3CenterLeftIcon
          className="w-7 cursor-pointer"
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
        <h1 className="text-3xl font-bold">Blogstar</h1>
      </div>
      <ul className="mt-10 space-y-5 h-full">
        <li>
          <NavLink to="/" className="flex space-x-3">
            <HomeIcon className="w-7" />
            <p className="text-xl">Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className="flex space-x-3">
            <PencilSquareIcon className="w-7" />
            <p className="text-xl">Create Post</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/myposts" className="flex space-x-3">
            <BookOpenIcon className="w-7" />
            <p className="text-xl">My Posts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/saved-post" className="flex space-x-3">
            <BookmarkIcon className="w-7" />
            <p className="text-xl">Save Posts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="flex space-x-3">
            <ArrowLeftEndOnRectangleIcon className="w-7 text-red-600" />
            <p className="text-xl text-red-600">Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
