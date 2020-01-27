import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import './projects.scss';
import Project from './Project';

const Projects = ({ intl: { formatMessage }, projects }) => {
	return (
		<ul id="hexGrid" className="clear">
			{projects.map((project) => {
				const { title, imageCover, id } = project.node;
				return <Project key={project.node.id} projectData={{ title, image: imageCover, id }} />;
			})}
		</ul>
	);
};
export default injectIntl(Projects);
