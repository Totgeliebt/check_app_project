import React from "react";
import classes from "./Button.module.css";

const Button = ({ text, type = "default" }) => {
  if (type === "mini") {
    return <button className={classes.button_mini}>{text}</button>

  }
  if (type === "default") {
    return <button className={classes.button}>{text}</button>;
  }
}
export default Button;

