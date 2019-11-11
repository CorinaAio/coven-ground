import React from "react";
import { Link, graphql } from "gatsby";
import * as PropTypes from "prop-types";
import Img from "gatsby-image";
import { injectIntl } from "gatsby-plugin-intl";
import "./projects.scss";
import Project from "./Project";

const Projects = ({ intl: { formatMessage }, projects }) => {
  return (
    <div id="hexGrid">
      {projects.map(project => (
        <Project projectData={project} />
      ))}
    </div>
  );
};
export default injectIntl(Projects);
