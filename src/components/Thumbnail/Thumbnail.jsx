import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Thumbnail.module.css';

const Thumbnail = ({ id, cover, title }) => {
	return (
		<Link href={`/apartment/${id}`} className={styles.card} passHref>
			<div className={styles.cardImage}>
				<Image src={cover} alt={title} layout='fill' objectFit='cover' quality={100} />
				<div className={styles.cardTitle}>{title}</div>
				<button aria-label='Add to favorites' className={styles.favoriteButton} />
			</div>
		</Link>
	);
};

export default Thumbnail;
