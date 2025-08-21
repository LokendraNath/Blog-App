/* eslint-disable no-empty */
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
        title: "Do Hard Things if You Want an Easy Life",
        content: `The human brain likes to avoid hard things (as the cognitive miser theory explains). From the beginning of the evolution of Homo sapiens, our brains have been trained to take the path of least resistance. Why?

Because it was necessary for survival. When our ancestors lived in the wild, conserving energy was crucial. They had to hunt, search for food, fight rivals, and escape predators. One wrong move and the result would be death.`,
      },
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title:
          "We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact",
        content: `We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact`,
      },
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title: "The Truth About Energy: Why Some Places and People Drain You",
        content: `Not a Medium member? Read this story here.

Do you remember those times? Walking into a room and feeling the weight of unspoken tension settle around your shoulders. The call with a friend that leaves you exhausted despite having done nothing but listen. The office where the fluorescent lights seem to siphon your vitality hour by hour, until you stumble home emptied of whatever spark got you out of bed that morning.`,
      },
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title:
          "We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact",
        content: `We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact`,
      },
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title:
          "We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact",
        content: `We Removed All Design Patterns From Our Codebase. Here’s the Performance Impact`,
      },
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
  }, );

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
