import React, { useEffect } from "react";
import AppItem from "../app-item/AppItem";
import EmptyCard from "../empty-card";
import PostService from "../../../api/PostService";
import { useBus, useListener } from "react-bus";

const AppsList = ({ apps, setLoading, setApps, filteredApps }) => {
  const bus = useBus();

  // const fetchAllApps = async () => {
  //   setLoading(true);
  //   const response = await PostService.getAll();
  //   setApps(response.data);
  //   setLoading(false);
  // };

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

  // useEffect(() => {
  //   if (!apps.length) {
  //     console.log('fetchAllApps()')
  //     fetchAllApps();
  //   }
  // }, [apps]);




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
