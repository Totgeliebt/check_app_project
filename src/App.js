import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Provider as BusProvider } from 'react-bus'
import React from "react";
import TelegramLoginButton from "react-telegram-login/src";
export const App = () => {

  const handleTelegramResponse = response => {
    console.log(response);
  };



  return (
    <>
      <BusProvider>

        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="testBot" />
      <MainPage />
      </BusProvider>
    </>
  );
};
