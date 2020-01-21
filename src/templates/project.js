import React from 'react';
import { Link, graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../layouts';

const propTypes = {
	data: PropTypes.object.isRequired
};

class ProjectTemplate extends React.Component {
	render() {
		const product = this.props.data.contentfulProduct;
		const { productName: { productName }, productDescription, price, image, brand, categories } = product;
		return (
			<Layout>
				<div
					style={{
						display: `flex`,
						alignItems: `center`
					}}
				>
					<Img fixed={image[0].fixed} />
					<h4>{productName}</h4>
				</div>
				<h1>{productName}</h1>
				<h4>Made by {brand.companyName.companyName}</h4>
				<div>
					<span>Price: ${price}</span>
					<div
						dangerouslySetInnerHTML={{
							__html: productDescription.childMarkdownRemark.html
						}}
					/>
					<div>
						<span>See other: </span>
						<ul>
							{categories.map((category, i) => (
								<li key={i}>
									<Link key={i} to={`/categories/${category.id}`}>
										{category.title.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		);
	}
}

ProjectTemplate.propTypes = propTypes;

export default ProjectTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title  
      date
	  place
	  description {
		json
	  }
	  imageCover {
		fluid {
			src
		}
	  }
    }
  }
`;
