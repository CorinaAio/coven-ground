import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

const Project = ({ intl: { formatMessage }, projectData }) => {
	return (
		<li>
			<div className="hex">
				<a className="hexIn" href="#">
					<div style={{backgroundImage: `url(${projectData.image.fluid.src})`}} className="project__image" />
					<h1 className="project__title">
						<span>{projectData.title}</span>
					</h1>
				</a>
			</div>
		</li>
	);
};

export default injectIntl(Project);
