import React, {useState} from "react";
import PopupInput from "../../input/PopupInput";
import classes from "./AddApp.module.css";
import PopupTextarea from "../../textarea/PopupTextarea";
import Checkbox from "../../checkbox";
import Button from "../../button";
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import axios from "axios";

const AddApp = ({ value, active, setActive, setApps, apps }) => {
  const [appData, setAppData] = useState([])
  async function fetchApps(appName, appBundle, appDescription) {
    // async function fetchApps(
    //   appName,
    //   appDescription,
    //   appBundle,
    //   url = "https://app-state.herokuapp.com/v1/apps",
    //   data = {
    //     appName: `${appName}`,
    //     appDescription: `${appDescription}`,
    //     appBundle: `${appBundle}`,
    //   }
    // ) {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   return response.json();}

    const appData = {
      name: `${appName}`,
      description: `${appBundle}`,
      bundle: `${appDescription}`,
    };
    const response = await axios
      .post("https://app-state.herokuapp.com/v1/apps", appData, {
        "Content-Type": "application/json",
        Accept: "application/json",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  // setAppData(appData)
    // setApps(response.data)
  }

  const handleAddApp = (e) => {
    e.preventDefault();
    fetchApps();
    setActive(false);
  };

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
          method="POST"
          action="https://app-state.herokuapp.com/v1/apps"
        >
          <PopupInput appName={value} label={"Название"} />
          <PopupTextarea appDescription={value} textareaLabel={"Описание"} />
          <PopupInput
            appBundle={value}
            label={"Текстовое поле формата com.app.bundle"}
          />
          <Checkbox />
          <Button text={"Добавить"} />
        </form>
      </div>
    </div>
  );
};

export default AddApp;
