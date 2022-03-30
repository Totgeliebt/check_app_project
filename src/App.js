import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Provider as BusProvider } from 'react-bus'
import React from "react";
import axios from "axios";
// import TelegramLoginButton from 'react-telegram-login';

export const App = () => {
  axios.defaults.withCredentials = true
  // const handleTelegramResponse = response => {
  //   console.log(response);
  // };
  return (

    <>
      <BusProvider>
        {/*<TelegramLoginButton dataOnauth={handleTelegramResponse} botName="OdauBot" />*/}
      <MainPage />
      </BusProvider>
    </>
  );
};
