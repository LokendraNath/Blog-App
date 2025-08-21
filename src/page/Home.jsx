import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  PencilSquareIcon,
  ShareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import PostContext from "../Context/PostContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { posts } = useContext(PostContext);
  return (
    <div className="grid grid-cols-1 space-y-5">
      {posts.map((p) => (
        <Link key={p.id} to={`/post/${p.id}`}>
          <div className="rounded-2xl border px-4 py-5 shadow-lg transition-transform duration-200 hover:scale-102 hover:shadow-2xl">
            <div className="mb-3 flex w-full justify-between">
              <div className="flex space-x-2">
                <UserCircleIcon className="w-6" />
                <p>Lokendra Verma ·</p>
              </div>
              <PencilSquareIcon className="w-6" />
            </div>
            <div className="mb-5 flex flex-col space-y-2">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="line-clamp-2 whitespace-pre-wrap text-[17px]">{p.content}</p>
            </div>
            <div className="flex w-full items-center justify-between px-3">
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
        </Link>
      ))}
    </div>
  );
};

export default Home;
