import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { Link } from "gatsby";

const Project = ({ intl: { formatMessage }, projectData }) => {
	return (
		<li>
			<Link to={`/project/${projectData.id}/`}>
			<div className="hex">
				<div className="hexIn" href="#">
					<div style={{backgroundImage: `url(${projectData.image.fluid.src})`}} className="project__image" />
					<h1 className="project__title">
						<span>{projectData.title}</span>
					</h1>
				</div>
			</div>
			</Link>
		</li>
	);
};

export default injectIntl(Project);
