import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./page/CreatePost.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./page/Home.jsx";
import App from "./App.jsx";
import PostDetails from "./components/PostDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "profile",
        element: <Home />,
      },
    ],
  },
  { path: "/create", element: <CreatePost /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
