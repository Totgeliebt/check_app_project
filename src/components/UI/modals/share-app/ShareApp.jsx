import React from 'react';
import classes from "./ShareApp.module.css"
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import Button from "../../button";
import PopupInput from "../../input";

const ShareApp = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${classes.modal__content} ${classes.active}`
            : classes.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.modal__content_title}>Чтобы опубликовать на другой аккаунт укажите  ник в телеграмме</h2>
        <img
          className={classes.modal__content_cross}
          src={crossIcon}
          alt="cross"
          onClick={() => setActive(false)}
        />
        <PopupInput label={"Telegram"}/>
        <Button text={"Опубликовать"} />
      </div>
    </div>
  );
};

export default ShareApp;