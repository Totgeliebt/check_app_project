import React from "react";
import AppItem from "../app-item/AppItem";
import classes from "./AppsList.module.css";
import EmptyCard from "../empty-card";

const AppsList = ({ apps, setApps }) => {
  if (!apps.length) {
    return <EmptyCard />;
  }
  console.log(apps);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {apps.map((app, id) => {
        return (
          <AppItem
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
  );
};

export default AppsList;
