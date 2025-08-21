import PostProvider from "./Context/PostProvider";
import React from "react";
import Layout from "./Layout";

const App = () => {
  return (
    <PostProvider>
      <Layout />
    </PostProvider>
  );
};

export default App;
