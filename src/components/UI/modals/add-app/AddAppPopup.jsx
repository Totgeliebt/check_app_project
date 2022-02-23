import React from "react";
import PopupInput from "../../input/PopupInput";
import classes from "./AddAppPopup.module.css";
import PopupTextarea from "../../textarea/PopupTextarea";
import Checkbox from "../../checkbox";
import Button from "../../button";
import crossIcon from "../../../../assets/icons/cross-icon.svg";

const AddAppPopup = ({ active, setActive, children }) => {
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
        <PopupInput label={"Название"} />
        <PopupTextarea textareaLabel={"Описание"} />
        <PopupInput label={"Текстовое поле формата com.app.bundle"} />
        <Checkbox />
        <Button text={"Добавить"} />
      </div>
    </div>
  );
};

export default AddAppPopup;
