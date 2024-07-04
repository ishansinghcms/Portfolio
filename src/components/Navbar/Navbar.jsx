import React from "react";
import classes from "./style.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  //handler functions
  const activeChangeHandle = (activeLinkName) => {
    setActive(activeLinkName);
  };

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbarLogo}>
          <img src={logo} alt="Logo" className={classes.logoImage} />
        </div>
        <ul className={classes.navbarLinks}>
          <li>
            <Link
              to="/"
              className={`${
                active === "about" ? classes.active : classes.navbarItem
              }`}
              onClick={() => activeChangeHandle("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`${
                active === "skill" ? classes.active : classes.navbarItem
              }`}
              onClick={() => activeChangeHandle("skill")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${
                active === "project" ? classes.active : classes.navbarItem
              }`}
              onClick={() => activeChangeHandle("project")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${
                active === "experience" ? classes.active : classes.navbarItem
              }`}
              onClick={() => activeChangeHandle("experience")}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${
                active === "connect" ? classes.active : classes.navbarItem
              }`}
              onClick={() => activeChangeHandle("connect")}
            >
              Connect
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
