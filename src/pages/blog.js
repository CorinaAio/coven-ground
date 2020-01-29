import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import { injectIntl } from 'gatsby-plugin-intl';
import { Container } from 'react-bootstrap';
import './blog.scss';

const BlogPage = ({ intl, data }) => {
	const { formatMessage, locale, formatDate } = intl;
	const blogPosts = data[locale].edges.map((edge) => edge.node);
	const placeholderImg = require(`../images/default-blog.jpg`);
	const noBlogPostsImg = require('../images/no-blog-posts.png');

	const getBgImage = (gallery) => {
		if (!gallery) return placeholderImg;

		return gallery[0].fluid.src;
	};

	console.log(blogPosts);
	return (
		<Layout>
			<SEO
				title={formatMessage({ id: 'blog__meta-title' })}
				description={formatMessage({ id: 'blog__meta-description' })}
			/>
			<section className="blog-posts-wrapper">
				<Container fluid className="blog-posts-container">
					{(!blogPosts || blogPosts.length === 0) && (
						<div className="noposts-wrapper">
							<img src={noBlogPostsImg} />
							<p>{formatMessage({ id: 'blog_no_blog_posts' })}</p>
						</div>
					)}
					{blogPosts &&
						blogPosts.length > 0 &&
						blogPosts.map((blogPost) => {
							const { title, id, heading, date, gallery } = blogPost;
							return (
								<div className="blog-posts__item">
									<div className="hexagon" style={{ backgroundImage: `url(${getBgImage(gallery)})` }}>
										<div className="hexTop" />
										<div className="hexBottom" />
									</div>
									<div className="blog-posts__item__description">
										<Link to={`/blog/${id}`}>
											<h3>{title}</h3>
										</Link>
										<span>{heading}</span>
										<p>
											<i>
												{formatDate(date, { day: 'numeric', month: 'long', year: 'numeric' })}
											</i>
										</p>
									</div>
								</div>
							);
						})}
				</Container>
			</section>
		</Layout>
	);
};

export default injectIntl(BlogPage);

export const pageQuery = graphql`
	query {
		ro: allContentfulBlog(filter: { node_locale: { eq: "ro" } }) {
			edges {
				node {
					id
					title
					heading
					date
					gallery {
						fluid {
							src
						}
					}
				}
			}
		}
		en: allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
			edges {
				node {
					id
					title
					heading
					date
					gallery {
						fluid {
							src
						}
					}
				}
			}
		}
	}
`;
