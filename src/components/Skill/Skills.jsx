import classes from "./style.module.css";

export default function Skills() {
  return (
    <div className={classes.container}>
      <div className={classes.skill_container}>
        <h3>Frontend</h3>
      </div>
      <div className={classes.skill_container}>
        <h3>Backend</h3>
      </div>
      <div className={classes.skill_container}>
        <h3>Databases</h3>
      </div>
      <div className={classes.skill_container}>
        <h3>Programming</h3>
      </div>
    </div>
  );
}
