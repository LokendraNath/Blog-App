import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./page/CreatePost.jsx";
import NotFound from "./components/NotFound.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Layout /> },
  { path: "/create", element: <CreatePost /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
