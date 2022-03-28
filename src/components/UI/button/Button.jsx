import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClick, text, type = "default" }) => {
  if (type === "mini") {
    return <button onClick={onClick} className={classes.button_mini}>{text}</button>
  }
  if (type === "default") {
    return <button onClick={onClick} className={classes.button}>{text}</button>;
  }
}
export default Button;

