import Skill from "../Skill/Skill";
import classes from "./style.module.css";
import {
  frontendSkills,
  backendSkills,
  fullStackSkills,
  programmingSkills,
  databaseSkills,
  operatingSystemSkills,
} from "./constants";

export default function Skills() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>TECHNICAL SKILLS</h3>
      <div className={classes.skill_container}>
        <h3>Frontend Technologies</h3>
        {frontendSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
      <div className={classes.skill_container}>
        <h3>Backend Technologies</h3>
        {backendSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
      <div className={classes.skill_container}>
        <h3>Full Stack Technologies</h3>
        {fullStackSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
      <div className={classes.skill_container}>
        <h3>Programming Languages</h3>
        {programmingSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
      <div className={classes.skill_container}>
        <h3>Databases</h3>
        {databaseSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
      <div className={classes.skill_container}>
        <h3>Operating Systems</h3>
        {operatingSystemSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}
