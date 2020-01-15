import React from 'react';
import { Link, graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { injectIntl } from 'gatsby-plugin-intl';

const Project = ({ intl: { formatMessage }, projectData }) => {
	return (
		<li>
			<div class="hex">
				<a class="hexIn" href="#">
					<img src="https://img.point.pet/images/a0047-000145-56a2bce25f9b58b7d0cdf7cf.jpg" alt="" />
					<h1 class="project__title">
						<span>This is a title</span>
					</h1>
				</a>
			</div>
		</li>
	);
};

export default injectIntl(Project);
