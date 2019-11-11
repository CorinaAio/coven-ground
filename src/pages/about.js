import React from "react";
import { Link, graphql } from "gatsby";
import * as PropTypes from "prop-types";
import Img from "gatsby-image";
import { rhythm } from "../utils/typography";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import { injectIntl } from "gatsby-plugin-intl";

const AboutPage = ({ intl: { formatMessage }, data }) => {
  return (
    <Layout>
      <SEO
        title={formatMessage({ id: "about__meta-title" })}
        description={formatMessage({ id: "about__meta-description" })}
      />

      <div>About page</div>
    </Layout>
  );
};

export default injectIntl(AboutPage);
