import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import "./index.css";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/experience", element: <Experience /> },
    ],
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
