import React from 'react';
import classes from "../Header.module.css";
import plus from "../../../../assets/icons/plus.svg";

const AddApp = ({setActive, onClick}) => {
  return (
    <div onClick={() => setActive(true)} className={classes.header__addApp}>
      <div className={classes.header__addApp_btn}>
        <img
          className={classes.header__addApp_plus}
          src={plus}
          alt="plus"
        />
      </div>
      <p className={classes.header__addApp_title}>Добавить приложение</p>
    </div>
  );
};

export default AddApp;