import React, { useState } from "react";
import PopupInput from "../../input/PopupInput";
import classes from "./AddApp.module.css";
import PopupTextarea from "../../textarea/PopupTextarea";
import Checkbox from "../../checkbox";
import Button from "../../button";
import crossIcon from "../../../assets/icons/cross-icon.svg";

const AddAppComponent = ({
  active,
  setActive,
  handleBundleInput,
  handleAddApp,
  appName,
  setAppName,
  appBundle,
  appDescription,
  setAppDescription,
  appPending,
  setAppPending,
}) => {
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
        <form
          onSubmit={handleAddApp}
        >
          <PopupInput
            required
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            label={"Название"}
          />
          <PopupTextarea
            required
            value={appDescription}
            onChange={(e) => setAppDescription(e.target.value)}
            textareaLabel={"Описание"}
          />
          <PopupInput
            required
            value={appBundle}
            onChange={handleBundleInput}
            label={"Текстовое поле формата com.app.bundle"}
          />
          <Checkbox
            checked={appPending}
            onChange={() => setAppPending(!appPending)}
          />
          <Button text={"Добавить"} />
        </form>
      </div>
    </div>
  );
};

export default AddAppComponent;
