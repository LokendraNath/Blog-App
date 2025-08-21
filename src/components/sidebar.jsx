import React from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  Bars3CenterLeftIcon,
  BookmarkIcon,
  BookOpenIcon,
  HomeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isCreatePage = location.pathname === "/create";
  return (
    <div
      className={`${isCreatePage && "hidden"} min-h-screen w-52 shrink-0 bg-gray-100 px-5 py-4 ease-in-out`}
    >
      <ul className="mt-10 h-full space-y-10">
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
