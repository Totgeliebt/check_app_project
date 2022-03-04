import React from "react";
import classes from "./Checkbox.module.css";

const Checkbox = ({checked, onChange}) => {
  return (
    <div style={{ position: "relative" }}>

      <input
        checked={checked}
        onChange={onChange}
        className={classes.checkbox__box}
        type="checkbox"
        id="pending"
        name="pending"
        value="pending"
      />
      <label className={classes.checkbox__label} htmlFor="pending">
        Pending
      </label>
    </div>
  );
};

export default Checkbox;
