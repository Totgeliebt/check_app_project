import React, {useState} from "react";
import PopupInput from "../../input/PopupInput";
import classes from "./AddApp.module.css";
import PopupTextarea from "../../textarea/PopupTextarea";
import Checkbox from "../../checkbox";
import Button from "../../button";
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import axios from "axios";

const AddApp = ({active, setActive, setApps, apps }) => {
  const [appId, setAppId] = useState('')
  const [appName, setAppName] = useState("");
  const [appBundle, setAppBundle] = useState('')
  const [appDescription, setAppDescription] = useState('')
  const [appPending, setAppPending] = useState(true);


  async function fetchApp(appName, appDescription, appBundle, appPending, appId, setAppId) {
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
      bundle:  `${appBundle}` ,
      description: `${appDescription}`,
      is_pending: `${appPending}`
    };

    const response = await axios
      .post("https://app-state.herokuapp.com/v1/apps", appData, {
        "Content-Type": "application/json",
        Accept: "application/json",
      })
      .then(function (response) {
        setAppId(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function fetchAllApps(apps, setApps) {
    const response = await axios
      .get("https://app-state.herokuapp.com/v1/apps" + appId)
    setApps(response.data)
  }
  console.log(apps)
  const handleAddApp = (e) => {
    e.preventDefault();
    // fetchApp(appName, appDescription, appBundle, appPending,appId, setAppId);
    setActive(false);
    fetchAllApps(apps, setApps)
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
          <PopupInput value={appName} onChange={(e) => setAppName(e.target.value)} label={"Название"} />
          <PopupTextarea value={appDescription} onChange={(e) => setAppDescription(e.target.value)} textareaLabel={"Описание"} />
          <PopupInput value={appBundle} onChange={(e) => setAppBundle(e.target.value)}

            label={"Текстовое поле формата com.app.bundle"}
          />
          <Checkbox checked={appPending} onChange={() => setAppPending(!appPending)}/>
          <Button text={"Добавить"} />
        </form>
      </div>
    </div>
  );
};

export default AddApp;
