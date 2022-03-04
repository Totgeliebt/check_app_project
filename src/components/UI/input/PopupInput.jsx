import React from "react";
import classes from "./PopupInput.module.css";
// BaseInput
// BaseButton
// type={'popup'}
const PopupInput = ({ value, onChange, label, type = "default" }) => {

  if (type === "popup") {
    return (
      <div>
        <label className={classes.popupInput__label} htmlFor="name">
          {label}
        </label>
        <input
          value={value}
          onChange={onChange}
          name="name"
          id="name"
          className={classes.popupInput}
        />
      </div>
    );
  }

  if (type === "default") {
    return (
      <div>
        <label className={classes.popupInput__label} htmlFor="name">
          {label}
        </label>
        <input
          value={value}
          onChange={onChange}
          name="name"
          id="name"
          className={classes.popupInput}
        />
      </div>
    );
  }
};

export default PopupInput;
