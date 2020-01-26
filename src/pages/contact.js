import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import { injectIntl } from 'gatsby-plugin-intl';
import { Container, Row, Col } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './contact.scss';

const AboutPage = ({ intl: { formatMessage }, data }) => {
	return (
		<Layout>
			<SEO
				title={formatMessage({ id: 'contact__meta-title' })}
				description={formatMessage({ id: 'contact__meta-description' })}
			/>

			<section className="contact-page">
				<Container className="contact-page-container">
					<Row>
						<Col>
							<h1>{formatMessage({ id: 'contact__title' })}</h1>
						</Col>
					</Row>
					<Row>
						<Col className="contact-page__description">
							<p>{formatMessage({ id: 'contact__description' })}</p>
						</Col>
					</Row>
					<Row>
						<Col className="contact-page__details">
							<div className="hexagon">
                <a href="mailto:covenground@yahoo.com" className="contact-page__details__icon">
                  <EmailIcon /> 
                </a>
                <a href="https://www.facebook.com/pg/covenground" className="contact-page__details__icon">
                  <FacebookIcon/>
                </a>
                <a href="https://www.instagram.com/covenground" className="contact-page__details__icon">
                  <InstagramIcon/>
                </a>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default injectIntl(AboutPage);
