import React, { useEffect, useState } from "react";
import PopupInput from "../../input/PopupInput";
import classes from "./AddApp.module.css";
import PopupTextarea from "../../textarea/PopupTextarea";
import Checkbox from "../../checkbox";
import Button from "../../button";
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import PostService from "../../../../api/PostService";
import { removeWhiteSpaces } from "../../../../utils/helpers";
import { useBus } from "react-bus";

const AddApp = ({ active, setActive }) => {

  const [appName, setAppName] = useState("");
  const [appBundle, setAppBundle] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [appPending, setAppPending] = useState(false);

  const bus = useBus();
  //using custom hook - which is not working
  // const [fetchAllApps, isAppsLoading, appsError] = useFetching(async (apps, setApps) => {
  //   const response = await PostService.getAll();
  //   setApps(response.data);
  // })
  const fetchApp = async (appName, appDescription, appBundle, appPending) => {
    const appData = {
      name: `${appName}`,
      bundle: `${appBundle}`,
      description: `${appDescription}`,
      is_pending: `${appPending}`,
    };

    const response = await PostService.postAppData(appData)
      .then(function (response) {
        bus.emit("appAdded", response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleAddApp = (e) => {
    e.preventDefault();
    fetchApp(appName, appDescription, appBundle, appPending);
    setActive(false);
    setAppName('')
    setAppBundle("");
    setAppDescription("");
  };

  const handleBundleInput = (e) => {
    setAppBundle(e.target.value);
    removeWhiteSpaces(appBundle);
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

export default AddApp;
