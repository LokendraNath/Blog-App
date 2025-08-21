import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../Context/PostContext";

const PostDetails = () => {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const postItem = posts.find((p) => Number(p.id) === Number(id));

  if (!postItem) return <h2>Post Not Found</h2>;

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">{postItem.title}</h1>
      <p className="text-lg whitespace-pre-wrap">{postItem.content}</p>
    </div>
  );
};

export default PostDetails;
