import React from "react";
import { Link, graphql } from "gatsby";
import * as PropTypes from "prop-types";
import Img from "gatsby-image";
import { injectIntl } from "gatsby-plugin-intl";

const Project = ({ intl: { formatMessage }, projectData }) => {
  return (
    <div class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
          alt=""
        />
        <h1>This is a title</h1>
        <p>Some sample text about the article this hexagon leads to</p>
      </a>
    </div>
  );
};

export default injectIntl(Project);
