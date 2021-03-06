const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	// The “graphql” function allows us to run arbitrary
	// queries against the local Contentful graphql schema. Think of
	// it like the site has a built-in database constructed
	// from the fetched data that you can run queries against.
	return graphql(
		`
      {
        allContentfulProject(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		// Create Project pages
		const projectTemplate = path.resolve(`./src/templates/project.js`);
		// We want to create a detailed page for each
		// product node. We'll just use the Contentful id for the slug.
		_.each(result.data.allContentfulProject.edges, (edge) => {
			// Gatsby uses Redux to manage its internal state.
			// Plugins and sites can use functions like "createPage"
			// to interact with Gatsby.
			createPage({
				// Each page is required to have a `path` as well
				// as a template component. The `context` is
				// optional but is often necessary so the template
				// can query data specific to each page.
				path: `/project/${edge.node.id}/`,
				component: slash(projectTemplate),
				context: {
					id: edge.node.id
				}
			});
		});
	})
	.then(() => {
	  graphql(
	    `
	      {
	        allContentfulBlog(limit: 1000, sort: {fields: date, order: DESC}) {
	          edges {
	            node {
				  id
				  date
	            }
	          }
	        }
	      }
	    `
	  ).then(result => {
	    if (result.errors) {
	      throw result.errors;
	    }

	    // Create Blog pages
	    const blogTemplate = path.resolve(`./src/templates/blog.js`);
	    // We want to create a detailed page for each
	    // category node. We'll just use the Contentful id for the slug.
	    _.each(result.data.allContentfulBlog.edges, edge => {
	      // Gatsby uses Redux to manage its internal state.
	      // Plugins and sites can use functions like "createPage"
	      // to interact with Gatsby.
	      createPage({
	        // Each page is required to have a `path` as well
	        // as a template component. The `context` is
	        // optional but is often necessary so the template
	        // can query data specific to each page.
	        path: `/blog/${edge.node.id}/`,
	        component: slash(blogTemplate),
	        context: {
	          id: edge.node.id
	        }
	      });
	    });
	});
	});
};
