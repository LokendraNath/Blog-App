import React from "react";

const CreatePost = () => {
  return (
    <div className="flex flex-col rounded-3xl px-5 py-5">
      <input
        type="text"
        placeholder="Title"
        className="mb-5 border-none text-4xl outline-none"
        autoFocus
      />
      <textarea
        placeholder="Write Your Story"
        className="h-60 resize-none text-lg text-gray-600 outline-none"
      ></textarea>
    </div>
  );
};

export default CreatePost;
