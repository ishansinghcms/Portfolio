import classes from "./style.module.css";
import myImage from "../../../assets/my_photo.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className={classes.container}>
      <h3>About Me</h3>
      <h1>Hey. What's Up? Hello! 👋</h1>
      <p>
        Welcome to my portfolio! I'm <span>Ishan Singh</span>, a dedicated and
        detail-oriented <span>Full Stack Developer</span> with expertise in{" "}
        <span>MERN</span> stack. With a strong foundation in both front-end and
        back-end technologies, I excel in creating seamless and efficient web
        applications.
      </p>
      <p>
        With <span>B.E. in Computer Science</span>,<span>1 year 2 months</span>{" "}
        of professional work experience and <span>9 months</span> of
        freelancing, I have developed a diverse portfolio of projects, ranging
        from dynamic single-page applications to complex enterprise-level
        applications. My expertise lies in translating complex requirements into
        scalable, maintainable, and user-friendly solutions. I am proficient in
        modern JavaScript frameworks and libraries, and I have a keen eye for
        design and user experience.
      </p>
      <p>
        Open to work in- Bangalore, Hyderabad, Noida, Gurugram Pune and Remote
        locations.
      </p>
      <p>
        Let's{" "}
        <Link className={classes.Link}>
          <span className={classes.link}>Connect!</span>
        </Link>{" "}
        and discuss how we can work together to bring your ideas to life!
      </p>
    </div>
  );
}
