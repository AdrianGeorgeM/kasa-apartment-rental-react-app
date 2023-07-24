import React from 'react';
import Link from 'next/link';
import styles from './Thumbnail.module.css';

const Thumbnail = ({ id, cover, title }) => {
	return (
		<Link href={`/apartment/${id}`} className={styles.card} passHref>
			<div className={styles.cardImage} style={{ backgroundImage: `url(${cover})` }}>
				<div className={styles.cardTitle}>{title}</div>
				<button className={styles.favoriteButton}>♥</button>
			</div>
		</Link>
	);
};

export default Thumbnail;
