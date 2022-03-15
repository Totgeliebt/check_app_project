import React, { useEffect } from "react";
import AppItem from "../app-item/AppItem";
import EmptyCard from "../empty-card";
import PostService from "../../../api/PostService";
import { useListener } from "react-bus";

const AppsList = ({ apps, setLoading, setApps }) => {
  const fetchAllApps = async () => {
    setLoading(true);
    const response = await PostService.getAll();
    setApps(response.data);
    setLoading(false);
  };

  const getId = React.useCallback((id) => {
    fetchAppById(id);
  }, []);
  useListener("appAdded", getId);

  const fetchAppById = async (id) => {
    const response = await PostService.getAppById(id);
    setApps(apps.push(response.data));
    return response;
  };

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
        {apps.map((app, id) => {
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
            />
          );
        })}
      </div>
    </>
  );
};

export default AppsList;
