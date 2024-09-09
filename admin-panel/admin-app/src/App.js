// App.js
import React, { useState } from "react";
import "./App.css";
import MainDash from "./Components/MainDash";
import RightSide from "./Components/RightSide";
import Sidebar from "./Components/Sidebar";
import Table from "./Components/Table";
import ContactList from "./Components/ContactList";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("MainDash");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Table":
        return <Table />;
      case "ContactList":
        return <ContactList />;
      default:
        return <MainDash />;
    }
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar onSelect={handleComponentChange} />
        {renderComponent()}
        <RightSide />
      </div>
    </div>
  );
}

export default App;
