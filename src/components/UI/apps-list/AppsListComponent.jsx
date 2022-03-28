import React from "react";
import { AppItem } from "../app-item";

const AppsListComponent = ({ apps, setApps, filteredApps, setAllApps }) => {
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
              setAllApps={setAllApps}
              apps={apps}
              setApps={setApps}
            />
          );
        })}
      </div>
    </>
  );
};

export default AppsListComponent;
