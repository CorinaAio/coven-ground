module.exports = {
	siteMetadata: {
		title: `Coven Ground`,
		description: 'Coven Ground',
		author: 'Coven Ground'
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `9xqzuxa0v5bf`,
				accessToken: `8e5-prp_lQgeBXiLH3kQNDszbf98ZBCGTU2T2P2suBU`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				path: `${__dirname}/src/i18n`,
				languages: [ `en`, `ro` ],
				defaultLanguage: `ro`,
				redirect: true
			}
		}
		// {
		//   resolve: `gatsby-plugin-typography`,
		//   options: {
		//     pathToConfigModule: `src/utils/typography`
		//   }
		// }
	]
};
