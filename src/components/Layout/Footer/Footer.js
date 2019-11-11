import "./styles.scss";

import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const Footer = ({ intl: { formatMessage, locale } }) => {
  return <footer className="footer">footer</footer>;
};

export default injectIntl(Footer);
