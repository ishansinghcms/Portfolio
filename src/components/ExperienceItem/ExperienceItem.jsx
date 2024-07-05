import classes from "./style.module.css";
import { experiences } from "./constants";

export default function ExperienceItem({ title }) {
  return (
    <div className={classes.container}>
      <div className={classes.meta_data}>
        <img
          className={classes.logo}
          src={experiences[title].logo}
          alt="Betsol Logo"
        />
        <div className={classes.details}>
          <div className={classes.top_details}>
            <p>{experiences[title].position}</p>
            <p>{experiences[title].date}</p>
          </div>
          <div className={classes.bottom_details}>
            <p>{experiences[title].location}</p>
            <p>{experiences[title].duration}</p>
          </div>
        </div>
      </div>
      <ul className={classes.list}>
        {experiences[title].experience.map((exp, index) => (
          <li key={index}>
            <p dangerouslySetInnerHTML={{ __html: exp }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
