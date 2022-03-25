import React, { useEffect } from "react";
import { useBus, useListener } from "react-bus";
import PostService from "../../../api/PostService";
import EmptyCard from "../empty-card";

const AppsListContainer = ({
  setLoading,
  allApps,
  setAllApps,
  setApps,
  apps,
  children,
}) => {
  const bus = useBus();

  const fetchAllApps = async () => {
    setLoading(true);
    const response = await PostService.getAll();
    setAllApps(response.data);
    setApps(allApps);
    setLoading(false);
  };
  const getId = (id) => {
    fetchAppById(id);
  };
  useListener("appAdded", getId);

  const fetchAppById = async (id) => {
    const response = await PostService.getAppById(id);
    setAllApps([...allApps, response.data]);
    setApps(allApps);
    bus.emit("appState", response.data.state);
    return response;
  };

  useEffect(() => {
    if (!apps.length) {
      fetchAllApps();
    }
  }, [allApps, apps]);

  if (!allApps.length) {
    return <EmptyCard />;
  }

  const props = {};

  return children(props);
};

export default AppsListContainer;
