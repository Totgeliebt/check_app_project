import React from "react";
import classes from "./Checkbox.module.css";

const Checkbox = () => {
  return (
    <div style={{ position: "relative" }}>
      <input
        className={classes.checkbox__box1}
        type="checkbox"
        id="pending1"
        name="pending"
        value="pending"
      />
      <label className={classes.checkbox__label1} htmlFor="pending">
        Pending
      </label>
    </div>
  );
};

export default Checkbox;
