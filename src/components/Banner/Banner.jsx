import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const Banner = React.memo(() => {
	return (
		<div className={styles.bannerContainer}>
			<div className={styles.bannerBackground}></div>
			<Image
				src='/assets/home_banner.png'
				alt='banner'
				layout='fill'
				objectFit='cover'
				className={styles.bannerImage}
			/>
			<h1 className={styles.bannerText}>Home anywhere and everywhere</h1>
		</div>
	);
});

Banner.displayName = 'Banner';

export default Banner;
