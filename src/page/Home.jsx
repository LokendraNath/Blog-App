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
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {posts.map((p) => (
        <Link key={p.id} to={`/post/${p.id}`}>
          <div className="mb-5 rounded-2xl border px-4 py-5 shadow-lg transition-transform duration-200 hover:scale-102 hover:shadow-2xl lg:min-h-48">
            <div className="mb-5 flex flex-col space-y-2">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="line-clamp-2 text-[17px] whitespace-pre-wrap">
                {p.content}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
