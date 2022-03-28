import React, {useState} from 'react';
import {useBus} from "react-bus";
import PostService from "../../../../api/PostService";
import {removeWhiteSpaces} from "../../../../utils/helpers";

const AddAppContainer = ({setActive,children}) => {
  const [appName, setAppName] = useState("");
  const [appBundle, setAppBundle] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [appPending, setAppPending] = useState(false);

  const bus = useBus();

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
    setAppName("");
    setAppBundle("");
    setAppDescription("");
  };

  const handleBundleInput = (e) => {
    setAppBundle(e.target.value);
    removeWhiteSpaces(appBundle);
  };
  const props = {
    handleBundleInput,
    handleAddApp,
    appName,
    setAppName,
    appBundle,
    setAppBundle,
    appDescription,
    setAppDescription,
    appPending,
    setAppPending,
  };
  return children(props);
};

export default AddAppContainer;