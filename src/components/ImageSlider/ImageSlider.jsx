import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';
import arrowLeft from '/public/assets/arrowLeft.svg';
import arrowRight from '/public/assets/arrowRight.svg';

function ImageSlider({ images }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => {
			return (prevIndex + 1) % images.length;
		});
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) => {
			if (prevIndex === 0) {
				return images.length - 1; // go to the last image
			} else {
				return prevIndex - 1;
			}
		});
	};

	return (
		<div className={styles['slider-container']}>
			<Image
				className={styles['slider-image']}
				src={images[currentImageIndex]}
				alt='slide'
				layout='fill'
				objectFit='cover'
			/>
			<button
				className={`${styles['slider-button']} ${styles['button-left']}`}
				onClick={prevImage}
			>
				<Image src={arrowLeft} alt='Previous' width={40} height={40} />
			</button>
			<button
				className={`${styles['slider-button']} ${styles['button-right']}`}
				onClick={nextImage}
			>
				<Image src={arrowRight} alt='Next' width={40} height={40} />
			</button>
		</div>
	);
}

export default ImageSlider;
