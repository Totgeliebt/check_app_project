import React from "react";
import classes from "./PopupTextarea.module.css";

const PopupTextarea = ({ textareaLabel }) => {
  return (
    <div>
      <label className={classes.textarea__label} htmlFor="Description">
        {textareaLabel}
      </label>
      <textarea
        className={classes.textarea}
        id="description"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default PopupTextarea;
