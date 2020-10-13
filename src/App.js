import React from "react";
import "./App.css";
import MaintenanceMode from "./pages/MaintenanceMode";
import HelmetContainer from "./components/helmet/HelmetContainer";

function App() {
  return (
    <div className="page-container">
      <HelmetContainer />
      <header className="header">Farida Alin.</header>
      <MaintenanceMode />
    </div>
  );
}

export default App;
