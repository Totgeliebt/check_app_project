import React from 'react';
import classes from './PopupInput.module.css'
// BaseInput
// BaseButton
// type={'popup'}
const PopupInput = ({ label, type = "default" }) => {
  if (type === "popup") {
    return (
      <div>
        <label className={classes.popupInput__label} htmlFor="name">
          {label}
        </label>
        <input name="name" id="name" className={classes.popupInput}></input>
      </div>
    );
  }

  if (type === "default") {
    return (
      <div>
        <label className={classes.popupInput__label} htmlFor="name">
          {label}
        </label>
        <input name="name" id="name" className={classes.popupInput}></input>
      </div>
    );
  }
};

export default PopupInput;