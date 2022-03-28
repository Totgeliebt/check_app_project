import React from 'react';
import classes from "../Header.module.css";
import appLogo from "../../../../assets/icons/app-logo.svg";

const Logo = () => {
  return (
    <div className={classes.header__logo}>
      <img
        src={appLogo}
        className={classes.header__logo_icon}
        alt="logo"
      />
      <div>
        <h1 className={classes.header__logo_title}>AppCheck</h1>
        <p className={classes.header__logo_text}>Список приложений</p>
      </div>
    </div>
  );
};

export default Logo;