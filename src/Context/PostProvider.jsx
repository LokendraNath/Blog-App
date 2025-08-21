import React, { useEffect, useState } from "react";
import { PostContext } from "./PostContext";

const STORAGE_KEY = "posts";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}

    return [
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title:
          "We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact",
        content: `We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact`,
      },
    ];
  });
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {}
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
