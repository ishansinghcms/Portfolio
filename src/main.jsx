import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import "./index.css";
import Skills from "./components/Skill/Skills.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <About /> },
      { path: "/skills", element: <Skills /> },
    ],
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
