import React from "react";
import { useBus, useListener } from "react-bus";
import PostService from "../../api/PostService";
import EmptyCard from "../empty-card";
import {useFetching} from "../../hooks/useFetching";

const AppsListContainer = ({
  allApps,
  setAllApps,
  setApps,
  children,
}) => {

  const bus = useBus();
  const [fetching, isLoading, error] = useFetching(PostService.getAppById);
  const getId = (id) => {
    fetchAppById(id);
  };
  useListener("appAdded", getId);

  const fetchAppById = async (id) => {
    const response = await fetching(id);
    setAllApps([...allApps, response.data]);
    setApps(allApps);
    bus.emit("appState", response.data.state);
    return response;
  };

  if (!allApps.length) {
    return <EmptyCard />;
  }

  const props = {};

  return children(props);
};

export default AppsListContainer;
