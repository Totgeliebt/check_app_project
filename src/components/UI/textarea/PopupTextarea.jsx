import React, { useState } from "react";
import classes from "./PopupTextarea.module.css";

const PopupTextarea = ({ value,onChange, textareaLabel }) => {
  const [textareaValue, setTextareaValue] = useState("");
  return (
    <div>
      <label className={classes.textarea__label} htmlFor="Description">
        {textareaLabel}
      </label>
      <textarea
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
