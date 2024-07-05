import classes from "./style.module.css";
import { useState } from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

export default function Experience() {
  const [active, setActive] = useState("Software Engineer");
  const handleClick = (name) => {
    setActive(name);
  };
  return (
    <div className={classes.container}>
      <h3>PROFESSIONAL EXPERIENCE</h3>
      <div className={classes.buttons}>
        <input
          type="button"
          className={`${
            active === "Freelance" ? classes.active : classes.button
          }`}
          value="Freelance"
          onClick={() => handleClick("Freelance")}
        />
        <input
          type="button"
          className={`${
            active === "Software Engineer" ? classes.active : classes.button
          }`}
          value="Software Engineer"
          onClick={() => handleClick("Software Engineer")}
        />

        <input
          type="button"
          className={`${
            active === "Internship" ? classes.active : classes.button
          }`}
          value="Internship"
          onClick={() => handleClick("Internship")}
        />
      </div>
      <ExperienceItem title={active} />
    </div>
  );
}
