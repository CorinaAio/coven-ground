import React from 'react';
import { graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import './blog.scss';
import { injectIntl } from 'gatsby-plugin-intl';
import ImageGallery from '../components/ImageGallery/ImageGallery';

const propTypes = {
	data: PropTypes.object.isRequired
};

function BlogTemplate(props) {
	const { formatMessage, formatDate } = props.intl;
	const blog = props.data.contentfulBlog;
	const { title, date, heading, description, gallery } = blog;
	return (
		<Layout>
			<SEO title={title} description={heading} />
			<section className="blog-block">
				<Container fluid className="blog-container">
				</Container>
			</section>
		</Layout>
	);
}

BlogTemplate.propTypes = propTypes;

export default injectIntl(BlogTemplate);

export const pageQuery = graphql`
	query($id: String!) {
		contentfulBlog(id: { eq: $id }) {
			title
            date
            heading
			description {
				json
			}
			gallery {
				fluid {
					src
				}
			}
		}
	}
`;
