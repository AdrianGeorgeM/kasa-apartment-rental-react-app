// Gallery.jsx
import React from 'react';
import Thumbnail from '@/src/components/Thumbnail/Thumbnail';
import data from '@/src/data/data.json';
import styles from '../styles/Gallery.module.css'; // Import the CSS module styles

const Gallery = () => {
	return (
		<main>
			<section className={styles.gallery}>
				{data.map((item, index) => (
					<Thumbnail key={index} {...item} />
				))}
			</section>
		</main>
	);
};

export default Gallery;
