import React, {useEffect, useState} from "react";
import AppItem from "../app-item/AppItem";
import EmptyCard from "../empty-card";
import PostService from "../../../api/PostService";
import { useBus, useListener } from "react-bus";

const AppsList = ({ setLoading, apps, setApps, filteredApps, allApps, setAllApps }) => {
  const bus = useBus();

  const fetchAllApps = async () => {
    setLoading(true);
    const response = await PostService.getAll();
    setApps(response.data);
    setAllApps(response.data);
    setLoading(false);
  };
console.log(apps)
  const getId = (id) => {
    fetchAppById(id);
  };
  useListener("appAdded", getId);

  const fetchAppById = async (id) => {
    const response = await PostService.getAppById(id);
    setAllApps([...allApps, response.data]);
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
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredApps.map((app, id) => {
          return (
            <AppItem
              app={app}
              key={app.id}
              id={app.id}
              state={app.state}
              allApps={allApps}
              setAllApps={setAllApps}
            />
          );
        })}
      </div>
    </>
  );
};

export default AppsList;
