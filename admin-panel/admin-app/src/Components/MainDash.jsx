// MainDash.js

import React from "react";
import Cards from "./Cards";

import ContactList from "./ContactList"; // Import the ContactList component
import "./MainDash.css";
import Table from "./Table";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table /> 
      <ContactList />
      {/* Include the ContactList component here */}
    </div>
  );
};

export default MainDash;
