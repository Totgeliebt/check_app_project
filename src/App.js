import "./App.css";
import { Provider as BusProvider } from "react-bus";
import React from "react";
import Auth from "./pages/Auth/Auth";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <>
      <BusProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Auth />} />
            <Route path="v1/apps" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </BusProvider>
    </>
  );
};
