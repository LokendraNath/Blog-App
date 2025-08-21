import React, { useContext, useState } from "react";
import PostContext from "../Context/PostContext";

const CreatePost = () => {
  const { setPosts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContet] = useState(``);

  function handlePublicClick() {
    const newPost = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      title: title,
      content: content,
    };
    setPosts((prevPost) => [newPost, ...prevPost]);
    setTitle("");
    setContet(``);
  }

  return (
    <div className="flex flex-col rounded-3xl px-5 py-5">
      <div className="grid grid-cols-4 space-x-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="col-span-3 mb-5 border-none text-4xl outline-none"
          autoFocus
        />
        <button
          onClick={handlePublicClick}
          className="h-10 rounded-full bg-green-400 px-4 py-1 font-bold text-white"
        >
          Publish
        </button>
      </div>

      <textarea
        placeholder="Write Your Story"
        value={content}
        onChange={(e) => setContet(e.target.value)}
        className="h-96 resize-none text-lg text-gray-600 outline-none"
      ></textarea>
    </div>
  );
};

export default CreatePost;
