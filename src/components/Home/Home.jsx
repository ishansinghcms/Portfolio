import classes from "./style.module.css";
import myImage from "../../../assets/my_photo.png";
import linkedinIcon from "../../../assets/Linkedin.png";
import githubIcon from "../../../assets/Github.png";
import leetcodeIcon from "../../../assets/Leetcode.png";
import { Outlet } from "react-router-dom";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `http://localhost:5173/public/Ishan_Singh_Full_stack.pdf`;
    link.download = "Ishan's resume.pdf";
    link.click();
  };

  return (
    <div className={classes.container}>
      <div className={classes.left_container}>
        <div className={classes.circle}>
          <img src={myImage} alt="My Image" className={classes.image} />
        </div>
        <h1>Ishan Singh</h1>
        <h2>Full Stack Developer</h2>
        <div className={classes.links}>
          <a
            href="https://www.linkedin.com/in/ishan-singh-97b592199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="Linkedin logo"
              className={classes.icon}
            />
          </a>
          <a
            href="https://github.com/ishansinghcms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github Logo" className={classes.icon} />
          </a>
          <a
            href="https://leetcode.com/u/ishan707/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={leetcodeIcon}
              alt="Leetcode logo"
              className={classes.icon}
            />
          </a>
        </div>
        <button onClick={handleDownload}>Download Resume</button>
      </div>
      <div className={classes.right_container}>
        <Outlet />
      </div>
    </div>
  );
}
