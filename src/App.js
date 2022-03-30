import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import {Provider as BusProvider} from "react-bus";
import React from "react";
import Auth from "./pages/Auth/Auth";

export const App = () => {
  return (
    <>
      <BusProvider>
        <Auth/>
        <MainPage />
      </BusProvider>
    </>
  );
};
