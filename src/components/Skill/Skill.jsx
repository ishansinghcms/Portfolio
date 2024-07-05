import classes from "./style.module.css";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { logos } from "./constants";

const BarFill = styled(animated.div)`
  background-color: #007bff;
  height: 14px;
  border-radius: 10px;
  border-right: 2px solid #000;
`;

export default function Skill({ skill, percentage }) {
  const props = useSpring({ width: `${percentage}%`, from: { width: "0%" } });
  return (
    <div className={classes.container}>
      <div className={classes.label}>
        {skill}
        <img src={logos[skill]} className={classes.icon}></img>
      </div>
      <div className={classes.background}>
        <BarFill style={props}>
          <span className={classes.percentage}>{percentage}%</span>
        </BarFill>
      </div>
    </div>
  );
}
