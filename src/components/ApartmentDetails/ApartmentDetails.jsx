import React, { useMemo } from 'react';
import Image from 'next/image';
import data from '/src/data/data.json';
import styles from './ApartmentDetails.module.css';
import Tag from '../Tag/Tag';
import ImageSlider from '../ImageSlider/ImageSlider';
import Dropdown from '../Dropdown/Dropdown';
const STAR_RANGE = Array(5).fill(null);

const Star = ({ filled }) => (
	<Image
		src={filled ? '/assets/star_filled.svg' : '/assets/star_blank.svg'}
		alt='Star'
		className={styles.star}
		width={30}
		height={30}
	/>
);

const ApartmentDetails = ({ id }) => {
	const apartment = useMemo(() => data.find((datas) => datas.id === id), [id]);

	if (!apartment) {
		return (
			<div className={styles.info}>
				<h1 className={styles.infoHeaderTitle}>Oops!</h1>
				<p className={styles.infoHeaderLocation}>
					We&apos;re unable to find the apartment details right now. Please try again
					later.
				</p>
			</div>
		);
	}

	const {
		title = 'Unavailable',
		location = 'Unavailable',
		pictures = [],
		tags = ['No tags'],
		host: { name = 'Unavailable', picture = 'Unavailable' } = {},
		rating = 0,
	} = apartment;

	return (
		<div className={styles.apartment}>
			<ImageSlider images={pictures} />
			<main>
				<div className={styles.info}>
					<div className={styles.infoHeader}>
						<h1 className={styles.infoHeaderTitle}>{title}</h1>
						<p className={styles.infoHeaderLocation}>{location}</p>
						<div className={styles.introHeaderTags}>
							{tags.map((tag, index) => (
								<Tag key={`tag-${index}`} tag={tag} />
							))}
						</div>
					</div>
					<div className={styles.infoProfile}>
						<div className={styles.infoHost}>
							<p className={styles.infoHostName}>{name}</p>
							<div className={styles.infoHostPicture}>
								<Image src={picture} alt='Host' width={500} height={500} />
							</div>
						</div>
						<div className={styles.infoRating}>
							{STAR_RANGE.map((_, index) => (
								<Star key={`star-${index}`} filled={index < rating} />
							))}
						</div>
					</div>
				</div>
			</main>
			<Dropdown title='Description' content={apartment.description} />
		</div>
	);
};

export default ApartmentDetails;
