import React from 'react';
import classes from './ChangeDescription.module.css';
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import PopupTextarea from "../../textarea";
import Button from "../../button";

const ChangeDescription = ({ active, setActive, children }) => {
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
        <h2 className={classes.modal__content_title}>Добавить приложение</h2>
        <img
          className={classes.modal__content_cross}
          src={crossIcon}
          alt="cross"
          onClick={() => setActive(false)}
        />
        <PopupTextarea textareaLabel={"Описание"} />
        <Button text={"Сохранить"} />
      </div>
    </div>
  );
};


export default ChangeDescription;