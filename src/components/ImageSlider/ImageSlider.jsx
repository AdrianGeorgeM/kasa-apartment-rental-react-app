import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';
import arrowLeft from '/public/assets/arrowLeft.svg';
import arrowRight from '/public/assets/arrowRight.svg';

function ImageSlider({ images }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = useCallback(() => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	}, [images]);

	const prevImage = useCallback(() => {
		setCurrentImageIndex((prevIndex) => {
			if (prevIndex === 0) {
				return images.length - 1;
			} else {
				return prevIndex - 1;
			}
		});
	}, [images]);

	return (
		<div className={styles['slider-container']}>
			{images.map((img, index) => (
				<div
					key={img} // using img as key
					className={
						index === currentImageIndex
							? `${styles['slider-image']} ${styles['slider-image-active']}`
							: styles['slider-image']
					}
				>
					<Image src={img} alt={`Slide ${index + 1}`} layout='fill' objectFit='cover' />
				</div>
			))}
			<button
				className={`${styles['slider-button']} ${styles['button-left']}`}
				onClick={prevImage}
				aria-label='Previous slide'
			>
				<Image src={arrowLeft} alt='Previous' width={40} height={40} />
			</button>
			<button
				className={`${styles['slider-button']} ${styles['button-right']}`}
				onClick={nextImage}
				aria-label='Next slide'
			>
				<Image src={arrowRight} alt='Next' width={40} height={40} />
			</button>
			<div className={styles['slider-counter']}>
				{currentImageIndex + 1} / {images.length}
			</div>
		</div>
	);
}

export default ImageSlider;
