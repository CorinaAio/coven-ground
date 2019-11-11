import React from "react";
import { Link, graphql } from "gatsby";
import * as PropTypes from "prop-types";
import Img from "gatsby-image";
import { Col, Container } from "react-bootstrap";
import { rhythm } from "../utils/typography";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import { injectIntl } from "gatsby-plugin-intl";
import Projects from "../components/Projects/Projects";

import "./index.scss";

const propTypes = {
  data: PropTypes.object.isRequired
};
const image = require(`../images/design.jpg`);
const logo = require(`../images/coven-logo.svg`);

const Product = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2)
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.image[0].fixed.src && (
            <Img style={{ margin: 0 }} fixed={node.image[0].fixed} />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.productName.productName}</div>
      </div>
    </Link>
  </div>
);

const Project = () => <div class="hexagon"></div>;

const IndexPage = ({ intl: { formatMessage }, data }) => {
  // const deProductEdges = data.german.edges;
  return (
    <Layout>
      <SEO
        title={formatMessage({ id: "home__meta-title" })}
        description={formatMessage({ id: "home__meta-description" })}
      />

      <section className="home-logo-block">
        <Col className="justify-content-center d-flex">
          <img className="home-logo-block__logo" src={logo} />
        </Col>
        <Container fluid>
          <Projects projects={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        </Container>
      </section>
      {/*}<div>
        <h3>de</h3>
        {deProductEdges.map(({ node }, i) => (
          <Product node={node} key={node.id} />
        ))}
        <img src={image} />
      </div>*/}
    </Layout>
  );
};

/*class IndexPage extends React.Component {
  render() {
    const usProductEdges = this.props.data.us.edges;
    const deProductEdges = this.props.data.german.edges;
    return (
      <Layout>
        <div style={{ marginBottom: rhythm(2) }}>
          <h2>{`Gatsby's`} integration with the Contentful Image API</h2>
          <Link to="/image-api/">See examples</Link>
          <br />
          <br />
          <br />
          <h2>Localization</h2>
          <p>
            The <code>gatsby-source-contentful</code> plugin offers full support
            for {`Contentful's`} localization features. Our sample space
            includes products localized into both English and German.
          </p>
          <p>
            An entry and asset node are created for each locale following
            fallback rules for missing localization. In addition, each node has
            an additional field added, <code>node_locale</code> so you can
            select for nodes from a single locale
          </p>
          <h3>en-US</h3>
          {usProductEdges.map(({ node }, i) => (
            <Product node={node} key={node.id} />
          ))}
          <br />
          <br />
          <h3>de</h3>
          {deProductEdges.map(({ node }, i) => (
            <Product node={node} key={node.id} />
          ))}
        </div>
      </Layout>
    );
  }
}
*/
// IndexPage.propTypes = propTypes;

export default injectIntl(IndexPage);

export const pageQuery = graphql`
  query {
    german: allContentfulProduct(filter: { node_locale: { eq: "de" } }) {
      edges {
        node {
          id
          productName {
            productName
          }
          image {
            fixed(width: 75) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
