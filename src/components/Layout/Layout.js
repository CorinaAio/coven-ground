import "../../styles/index.scss";

import React, { Fragment } from "react";

import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
const Layout = ({ children }) => (
  <Fragment>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

export default Layout;
