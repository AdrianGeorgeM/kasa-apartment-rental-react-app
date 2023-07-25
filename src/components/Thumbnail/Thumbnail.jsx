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
				<button aria-label='Add to favorites' className={styles.favoriteButton}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						class={styles.heartFill}
					>
						<path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 4.01 12 5.09 13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
					</svg>
				</button>
			</div>
		</Link>
	);
};

export default Thumbnail;
