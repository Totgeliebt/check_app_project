import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Provider as BusProvider } from 'react-bus'
import React from "react";


export const App = () => {

  return (

    <>
      <BusProvider>

      <MainPage />
      </BusProvider>
    </>
  );
};
