import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const Banner = React.memo(({ page }) => {
	const getImageSrc = () => {
		return '/assets/home_banner.png';
	};

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.bannerBackground}></div>
			<Image
				src={getImageSrc()}
				alt='banner'
				layout='fill'
				objectFit='cover'
				className={styles.bannerImage}
			/>
			<h1 className={styles.bannerText}>
				{page === 'about' ? '' : 'Home anywhere and everywhere'}
			</h1>
		</div>
	);
});

Banner.displayName = 'Banner';

export default Banner;
