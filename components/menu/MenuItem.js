import React, { Component } from "react";
import Link from "next/link";

const menuItemStyles = {
  textDecoration: "none",
  color: "#000",
  ":hover": {
    color: "#985F70"
  }
};

const MenuItem = ({ value, link }) => {
  return (
    <Link href={link}>
      <a className="coven-menu-item" style={menuItemStyles}>
        {value}
      </a>
    </Link>
  );
};

export default MenuItem;
