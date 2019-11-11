import * as React from "react";

import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import { Nav } from "react-bootstrap";

const LocaleSwitcher = ({ className = "" }) => (
  <IntlContextConsumer>
    {({ languages, language: currentLocale }) =>
      languages
        .filter(language => language != currentLocale)
        .map(language => {
          const image = require(`../../../../images/icons/flag-${language}.svg`);
          return (
            <Nav.Link
              key={language}
              className={className}
              onClick={() => changeLocale(language)}
              style={{
                verticalAlign: "center"
              }}
            >
              <img src={image} style={{ width: "20px" }} />
            </Nav.Link>
          );
        })
    }
  </IntlContextConsumer>
);

export default LocaleSwitcher;
