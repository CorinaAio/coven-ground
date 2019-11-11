import "./styles.scss";

import { Nav, Navbar } from "react-bootstrap";

import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import React, { useEffect, useState } from "react";

import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

const Navigation = ({ intl: { locale, formatMessage } }) => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div
      className={`navigation fixed-top ${
        navigationOpen ? "navigation--open" : ""
      }`}
    >
      <Navbar variant="dark" expand="xl" className={`navigation__menu`}>
        <section
          className="navigation__mobile"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <LocaleSwitcher className="navigation__locale-switcher--mobile" />
          <Navbar.Toggle />
        </section>
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Link to="/" activeClassName="active" className="nav-link">
              {formatMessage({ id: "navbar_link_portofolio" })}
            </Link>
            <Link to="/about" activeClassName="active" className="nav-link">
              {formatMessage({ id: "navbar_link_about" })}
            </Link>
            <Link to="/blog" activeClassName="active" className="nav-link">
              {formatMessage({ id: "navbar_link_blog" })}
            </Link>
            <Link to="/contact" activeClassName="active" className="nav-link">
              {formatMessage({ id: "navbar_link_get-in-touch" })}
            </Link>
            <LocaleSwitcher className="navigation__locale-switcher" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default injectIntl(Navigation);
