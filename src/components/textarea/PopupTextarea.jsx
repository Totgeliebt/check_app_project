import React from "react";
import classes from "./PopupTextarea.module.css";

const PopupTextarea = ({ required, value,onChange, textareaLabel }) => {

  return (
    <div>
      <label className={classes.textarea__label} htmlFor="Description">
        {textareaLabel}
      </label>
      <textarea
        required={required}
        value={value}
        onChange={onChange}
        className={classes.textarea}
        id="description"
        cols="30"
        rows="10"
      />
    </div>
  );
};

export default PopupTextarea;
