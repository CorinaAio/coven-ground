import React, { Component } from "react";
import MenuItem from "./MenuItem.js";

const menuStyles = {
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "space-between",
  width: "500px"
};

const Menu = ({ menuItems }) => {
  return (
    <div className="coven-menu" style={menuStyles}>
      {menuItems.map(menuItem => (
        <MenuItem {...menuItem} />
      ))}
    </div>
  );
};

export default Menu;
