import React from 'react';
import classes from "./ShareApp.module.css"
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import Button from "../../button";
import PopupInput from "../../input";

const ShareApp = ({ shareActive, setShareActive, children, onclick, isSharing, setIsSharing, onChange }) => {


  return (
    <div
      className={shareActive ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setShareActive(false)}
    >
      <div
        className={
          shareActive
            ? `${classes.modal__content} ${classes.active}`
            : classes.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.modal__content_title}>Чтобы опубликовать на другой аккаунт укажите ник в телеграмме</h2>
        <img
          className={classes.modal__content_cross}
          src={crossIcon}
          alt="cross"
          onClick={() => setShareActive(false)}
        />
        <PopupInput label={"Telegram"} value={isSharing} onChange={onChange} required/>
        <Button text={"Опубликовать"} onClick={onclick}/>
      </div>
    </div>
  );
};

export default ShareApp;