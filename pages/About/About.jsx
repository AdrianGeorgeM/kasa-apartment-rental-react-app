// pages/About/About.jsx
import React from 'react';
import Layout from '../../src/components/Layout';
import styles from './About.module.css';

const About = () => {
	return (
		<Layout>
			<div className={styles.aboutContent}>
				{/* Your About page content goes here */}
				<h1>About Us</h1>
				<p>This is the content of the About page.</p>
			</div>
		</Layout>
	);
};

export default About;
