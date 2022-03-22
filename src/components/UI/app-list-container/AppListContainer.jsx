import React, {useEffect, useState} from 'react';
import AppsList from "../apps-list/AppsList";
import PostService from "../../../api/PostService";
import {useListener} from "react-bus";
import EmptyCard from "../empty-card";

const AppListContainer = ({apps, onClick, loading, setLoading, setApps, filteredApps}) => {
  const [globalApps, setGlobalApps] = useState([]);

  const fetchAllApps = async () => {
    setLoading(true);
    // const response = await PostService.getAll();
    // console.log('Hello')
    // setGlobalApps(response.data);
    setLoading(false);
  };

  const getState = (selectedOption) => {
    console.log(selectedOption)
    if(selectedOption==='deletedApps') {
      const filteredApps = globalApps.filter((app) => app.state === 2);
      setGlobalApps(filteredApps)
    } else if (selectedOption==='pendingApps'){
      const filteredApps = globalApps.filter((app) => app.state === 0);
      setGlobalApps(filteredApps)
    } else {
      setGlobalApps(globalApps)
    }
  };
  useListener("appState", getState);

  useEffect(() => {
    if(!globalApps.length){
     console.log('fetchAllApps()')
      fetchAllApps();
    }
  }, [globalApps]);

  if (!globalApps.length) {
    return <EmptyCard />;
  }
  return (
    <div>
      <AppsList
        apps={globalApps}
        setApps={setGlobalApps}
        onClick={onClick}
        loading={loading}
        setLoading={setLoading}
        filteredApps={filteredApps}
      />
    </div>
  );
};

export default AppListContainer;