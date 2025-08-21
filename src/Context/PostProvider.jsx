import React, { useState } from "react";
import { PostContext } from "./PostContext";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: Date.now() + Math.floor(Math.random() * 1000),
      title: "Example Using Home Data",
      content: `As systems scale, teams grow, and complexity creeps in, 
more senior engineers are switching to something else:

Hexagonal Architecture, also known as Ports and Adapters.

It’s not a trend. It’s a practical shift born from real pain in production systems.

Let’s walk through why.`,
    },
  ]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
