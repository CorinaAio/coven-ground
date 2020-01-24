import React from 'react';
import { graphql } from 'gatsby';
import { Col, Container } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import { injectIntl } from 'gatsby-plugin-intl';
import Projects from '../components/Projects/Projects';

import './index.scss';

const logo = require(`../images/coven-logo.svg`);

const IndexPage = ({ intl, data }) => {
	const { formatMessage } = intl;
	console.log(data);
	const projectEdges = data[intl.locale].edges;

	return (
		<Layout>
			<SEO
				title={formatMessage({ id: 'home__meta-title' })}
				description={formatMessage({ id: 'home__meta-description' })}
			/>

			<section className="home-logo-block">
				<Col className="justify-content-center d-flex">
					<img className="home-logo-block__logo" src={logo} alt="logo" />
				</Col>
				<Container fluid className="projects-container">
					<Projects projects={projectEdges} />
				</Container>
			</section>
		</Layout>
	);
};

export default injectIntl(IndexPage);

export const pageQuery = graphql`
	query {
		ro: allContentfulProject(filter: { node_locale: { eq: "ro" } }) {
			edges {
				node {
					id
					title
					imageCover {
						fluid {
							src
						}
					}
				}
			}
		}
		en: allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
			edges {
				node {
					id
					title
					imageCover {
						fluid {
							src
						}
					}
				}
			}
		}
	}
`;
