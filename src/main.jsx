import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./page/CreatePost.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./page/Home.jsx";
import PostDetails from "./components/PostDetails.jsx";
import Layout from "./Layout.jsx";
import PostProvider from "./Context/PostProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </StrictMode>,
);
