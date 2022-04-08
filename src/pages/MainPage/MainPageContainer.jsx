import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import { useListener } from "react-bus";

const MainPageContainer = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [allApps, setAllApps] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const [fetching, isLoading, error] = useFetching(PostService.getAll);

  if (!!error && isLoading) {
    // return  component
  }

  const fetchAllApps = async () => {
    const response = await fetching();
    setAllApps(response.data);
    setApps(response.data);
  };

  const filteredApps = apps.filter((app) => {
    return (
      app.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      app.description.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      app.bundle.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  });

  const getState = (selectedOption) => {
    if (selectedOption === "deletedApps") {
      const sortedApps = allApps.filter((app) => app.state === 2);
      setApps(sortedApps);
    } else if (selectedOption === "pendingApps") {
      const sortedApps = allApps.filter((app) => app.state === 0);
      setApps(sortedApps);
    } else {
      setApps(allApps);
    }
  };

  useListener("appState", getState);

  useEffect(() => {
    fetchAllApps();
  }, []);

  const props = {
    searchInputValue,
    setSearchInputValue,
    setModalActive,
    setSelectedOption,
    selectedOption,
    isLoading,
    allApps,
    setAllApps,
    apps,
    setApps,
    filteredApps,
    modalActive,
  };

  return children(props);
};

export default MainPageContainer;
