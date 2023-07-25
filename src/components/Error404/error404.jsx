import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Error404.module.css';

const Error404 = () => {
	return (
		<div className={styles['error-main']}>
			<div className={styles['error__title']}>404</div>
			<div className={styles['error-tagline']}>
				Oops! It looks like this page doesn t exist.
			</div>

			<Link href='/' className={styles['error__link']}>
				Go back to the home page
			</Link>
		</div>
	);
};

export default Error404;
