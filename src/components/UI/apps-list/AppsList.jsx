import React, { useEffect } from "react";
import AppItem from "../app-item/AppItem";
import EmptyCard from "../empty-card";
import PostService from "../../../api/PostService";
import { useBus, useListener } from "react-bus";

const AppsList = ({ apps, setLoading, setApps, filteredApps }) => {
  const bus = useBus();

  const fetchAllApps = async () => {
    setLoading(true);
    const response = await PostService.getAll();
    setApps(response.data);
    setLoading(false);
  };

  const getId = (id) => {
    fetchAppById(id);
  };
  useListener("appAdded", getId);

  const fetchAppById = async (id) => {
    const response = await PostService.getAppById(id);
    setApps([...apps, response.data]);
    console.log(response.data.state);
    bus.emit("appState", response.data.state);
    return response;
  };



  // if(apps.length > 0) {
  //   console.log(apps[0].state)
  // }

  const getState = (selectedOption) => {
    console.log(selectedOption)
    // const deletedApps = apps.filter((app) => {
    //   return (selectedOption.includes('pendingApps') && app.state ===0) }
    //
    // const pendingApps = apps.filter((app) => {
    //   return (selectedOption.includes('deletedApps') && app.state ===2)}
    // }
    //ver 1
    // const sortedApps = apps.filter((app) => {
    //
    //   return (selectedOption.includes('pendingApps') && app.state ===0) ||
    //     (selectedOption.includes('deletedApps') && app.state ===2)
    // })
    // setApps(sortedApps)
    // // ver 2
    if(selectedOption==='deletedApps') {
      const filteredApps = apps.filter((app) => app.state === 2);
      setApps(filteredApps)
    } else if (selectedOption==='pendingApps'){
      const filteredApps = apps.filter((app) => app.state === 0);
      setApps(filteredApps)
    } else {
      setApps(filteredApps)
    }
  };
  useListener("appState", getState);


  useEffect(() => {
    if (!apps.length) {
      fetchAllApps();
    }
  }, [apps]);

  if (!apps.length) {
    return <EmptyCard />;
  }
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredApps.map((app, id) => {
          return (
            <AppItem
              apps={apps}
              setApps={setApps}
              key={app.id}
              app={app}
              id={app.id}
              name={app.name}
              bundle={app.bundle}
              description={app.description}
              icon={app.icon}
              version={app.version}
              update={app.last_update}
              rate={app.rate}
              rateCounting={app.rate_count}
              installations={app.installations}
              state={app.state}
            />
          );
        })}
      </div>
    </>
  );
};

export default AppsList;
