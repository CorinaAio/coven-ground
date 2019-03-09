import React, { Component } from "react";
import Menu from "../menu/Menu.js";

const styles = {
  backgroundColor: "#969696",
  display: "flex",
  justifyContent: "center",
  height: "100px",
  alignItems: "center"
};

const Header = ({ menuItems }) => {
  return (
    <div className="coven-header" style={styles}>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default Header;
