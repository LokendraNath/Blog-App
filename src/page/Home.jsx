import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  PencilSquareIcon,
  ShareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 mt-10 px-5">
      <div className="my-10 border shadow-lg rounded-2xl px-4 py-5 hover:scale-102 hover:shadow-2xl transition-transform duration-200">
        <div className="flex mb-3 w-full justify-between">
          <div className="flex space-x-2">
            <UserCircleIcon className="w-6" />
            <p>Lokendra Verma ·</p>
            <p className="">Jul 19</p>
          </div>
          <PencilSquareIcon className="w-6" />
        </div>
        <div className="flex flex-col space-y-2 mb-5">
          <h2 className="text-xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            facere.
          </h2>
          <p className="text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            corporis commodi ad ducimus, quas enim iste. Atque, suscipit iure?
            Nisi.
          </p>
        </div>
        <div className="flex w-full justify-between items-center px-3">
          <div className="flex space-x-5">
            <div className="flex space-x-2">
              <ArrowUpCircleIcon className="w-5 cursor-pointer" />
              <p>239</p>
            </div>
            <div className="flex space-x-2">
              <ArrowDownCircleIcon className="w-5 cursor-pointer" />
              <p>11</p>
            </div>
            <div className="flex space-x-2">
              <ChatBubbleOvalLeftIcon className="w-5 cursor-pointer" />
              <p>239</p>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex space-x-2">
              <ShareIcon className="w-5 cursor-pointer" />
              <p>5</p>
            </div>
            <BookmarkIcon className="w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
