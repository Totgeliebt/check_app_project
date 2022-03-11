import React, { useEffect, useState } from "react";
import PopupInput from "../../input/PopupInput";
import classes from "./AddApp.module.css";
import PopupTextarea from "../../textarea/PopupTextarea";
import Checkbox from "../../checkbox";
import Button from "../../button";
import crossIcon from "../../../../assets/icons/cross-icon.svg";
import PostService from "../../../../api/PostService";

const AddApp = ({ active, setActive, setApps, apps, setLoading}) => {
  const [appId, setAppId] = useState("");
  const [appName, setAppName] = useState("");
  const [appBundle, setAppBundle] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [appPending, setAppPending] = useState(false);
  // const { fetchApp } = AddAppContainer;

  //using custom hook - which is not working
  // const [fetchAllApps, isAppsLoading, appsError] = useFetching(async (apps, setApps) => {
  //   const response = await PostService.getAll();
  //   setApps(response.data);
  // })
  const fetchApp = async (
    appName,
    appDescription,
    appBundle,
    appPending,
    appId,
    setAppId,
    setApps,

  ) => {
    const appData = {
      name: `${appName}`,
      bundle: `${appBundle}`,
      description: `${appDescription}`,
      is_pending: `${appPending}`,
    };

    const response = await PostService.postAppData(appData)
      .then(function (response) {
        setAppId(response.data.id);
        //  console.log(response.data.id)
        console.log(appId)
        fetchAppById(response.data.id);

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const fetchAppById = async (appId) => {
    const response = await PostService.getAppById(appId);
    console.log(response.data)
    return response
  }

  const handleAddApp = (e) => {
    e.preventDefault();
    fetchApp(appName, appDescription, appBundle, appPending, appId, setAppId);
    setActive(false);
    setAppName("");
    setAppBundle("");
    setAppDescription("");
  };

  const fetchAllApps = async (apps, setApps) => {
    setLoading(true)
    const response = await PostService.getAll();
    setApps(response.data);
    setLoading(false)
  }
  useEffect(() => {
    fetchAllApps(apps, setApps, setLoading);
  }, [appId]);

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
            onChange={(e) => setAppBundle(e.target.value)}
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
