import React from 'react';
import { graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import './project.scss';
import { injectIntl } from 'gatsby-plugin-intl';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import RichTextRenderer from "../components/RichTextRenderer/RichTextRenderer";

const propTypes = {
	data: PropTypes.object.isRequired
};

function ProjectTemplate(props) {
	const { formatMessage, formatDate } = props.intl;
	const project = props.data.contentfulProject;
	const { title, date, place, description, gallery, client } = project;

	return (
		<Layout>
			<SEO title={title} description={title} />
			<section className="project-block">
				
				<Container fluid className="project-container">
					<Row className="project__gallery">
						<ImageGallery images={gallery}></ImageGallery>
					</Row>
					<Row className="project__title">
						<Col className="justify-content-center d-flex">
							<h1>{title}</h1>
						</Col>
					</Row>
					<Row>
						<Col md={9}>
							<RichTextRenderer description={description.json} />
						</Col>
						<Col md={3}>
							<div className="project__detail">
								<span>{formatMessage({ id: 'project_client' })}</span>
								<span>{client}</span>
							</div>
							<div className="project__detail">
								<span>{formatMessage({ id: 'project_place' })}</span>
								<span>{place}</span>
							</div>
							<div className="project__detail">
								<span>{formatMessage({ id: 'project_date' })}</span>
								<span>{formatDate(date, {day: 'numeric', month: 'long', year: 'numeric'})}</span>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
}

ProjectTemplate.propTypes = propTypes;

export default injectIntl(ProjectTemplate);

export const pageQuery = graphql`
	query($id: String!) {
		contentfulProject(id: { eq: $id }) {
			title
			date
			place
			client
			description {
				json
			}
			imageCover {
				fluid {
					src
				}
			}
			gallery {
				fluid {
					src
				}
			}
		}
	}
`;
