// Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import MainDash from "./MainDash"; // Update the import path
import RightSide from "./RightSide"; // Update the import path
import Table from "./Table"; // Update the import path
import ContactList from "./ContactList"; // Update the import path

const Sidebar = ({ onSelect }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0%",
    },
    false: {
      left: "-60%",
    },
  };

  const handleMenuItemClick = (index) => {
    setSelected(index);
    onSelect(SidebarData[index].component);
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleMenuItemClick(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
