import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import classes from "./style.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Main />
      <Navbar />
    </div>
  );
}
