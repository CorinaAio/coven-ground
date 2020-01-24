import React from 'react';
import { graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import './project.scss';
import { BLOCKS } from '@contentful/rich-text-types';
import { injectIntl } from 'gatsby-plugin-intl';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import BulletList from "../components/BulletList/BulletList";

const propTypes = {
	data: PropTypes.object.isRequired
};

const quoteIcon = require(`../images/icons/quote_icon.svg`);

function ProjectTemplate(props) {
	const { formatMessage } = props.intl;
	const options = {
		renderNode: {
			[BLOCKS.UL_LIST]: (node) => {
				const list = node.content.map(elem => {
					console.log(elem.content[0].content[0])
					return elem.content[0].content[0].value
				})
				return <BulletList listItems={list}/>
			},
			[BLOCKS.QUOTE]: (node) => {
				const { content } = node.content[0];
				return (
					<div className="block-quote">
						<img className="block-quote__start" src={quoteIcon} />
						<div className="block-quote__content">{content.map(paragrapgh => <p>{paragrapgh.value}</p>)}</div>
						<img className="block-quote__close" src={quoteIcon} />
					</div>
				)
			},
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				console.log(node);
				const imgSrc = node.data.target.fields.file['en-US'].url;
				//   const { title, description } = node.data.target.fields;
				return <img src={imgSrc} />;
			}
		}
	};
	const project = props.data.contentfulProject;
	const { title, date, place, description, gallery, client } = project;
	console.log(formatMessage({ id: 'project_client' }));
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
						<Col md={9}>{documentToReactComponents(description.json, options)}</Col>
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
								<span>{date}</span>
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
