// index.js

import React from 'react';
import styles from './index.module.css';

function HomePage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to my app!</h1>
			<p className={styles.description}>This is a Next.js app with CSS Modules.</p>
		</div>
	);
}

export default HomePage;
