import classes from "./style.module.css";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
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
      <div className={classes.container}>
        <div className={classes.flex_container}>
          <ul className={classes.navbar_links}>
            <li>
              <Link
                to="/"
                className={`${
                  active === "about" ? classes.active : classes.navbar_item
                }`}
                onClick={() => activeChangeHandle("about")}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className={`${
                  active === "experience" ? classes.active : classes.navbar_item
                }`}
                onClick={() => activeChangeHandle("experience")}
              >
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`${
                  active === "skill" ? classes.active : classes.navbar_item
                }`}
                onClick={() => activeChangeHandle("skill")}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`${
                  active === "project" ? classes.active : classes.navbar_item
                }`}
                onClick={() => activeChangeHandle("project")}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`${
                  active === "connect" ? classes.active : classes.navbar_item
                }`}
                onClick={() => activeChangeHandle("connect")}
              >
                EDUCATION
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
