import React, { useState } from "react";
import classes from "./PopupInput.module.css";
// BaseInput
// BaseButton
// type={'popup'}
const PopupInput = ({ label, type = "default" }) => {
  const [inputValue, setInputValue] = useState("");
  if (type === "popup") {
    return (
      <div>
        <label className={classes.popupInput__label} htmlFor="name">
          {label}
        </label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="name"
          id="name"
          className={classes.popupInput}
        />
      </div>
    );
  }
};

export default PopupInput;
