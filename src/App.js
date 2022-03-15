import "./App.css";
import Header from "./components/UI/header/Header";
import EmptyCard from "./components/UI/empty-card/EmptyCard";
import AddAppPopup from "./components/UI/modals/add-app/AddApp";
import MainPage from "./pages/MainPage/MainPage";
import { Provider as BusProvider } from 'react-bus'

export const App = () => {
  return (
    <>
      <BusProvider>
      <MainPage />
      </BusProvider>
    </>
  );
};
