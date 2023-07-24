import React, { useMemo } from 'react';
import Image from 'next/image';
import data from '/src/data/data.json';
import styles from './ApartmentDetails.module.css';

const STAR_RANGE = Array(5).fill(null);

const Star = ({ filled }) => (
	<Image
		src={filled ? '/assets/star_filled.svg' : '/assets/star_blank.svg'}
		alt='Star'
		className={styles.star}
		width={50}
		height={50}
	/>
);

const Tag = ({ tag }) => <span className={styles.tag}>{tag}</span>;

const ApartmentDetails = ({ id }) => {
	const apartment = useMemo(() => data.find((datas) => datas.id === id), [id]);

	const {
		title,
		location,
		tags,
		host: { name, picture },
		rating,
	} = apartment;

	return (
		<div className={styles.apartment}>
			<main>
				<div className={styles.info}>
					<div className={styles['info__header']}>
						<h1 className={styles['info__header--title']}>{title}</h1>
						<p className={styles['info__header--location']}>{location}</p>
						<div className={styles['intro__header--tags']}>
							{tags.map((tag, index) => (
								<Tag key={`tag-${index}`} tag={tag} />
							))}
						</div>
					</div>
					<div className={styles['info__profile']}>
						<div className={styles['info__host']}>
							<p className={styles['info__host--name']}>{name}</p>
							<div className={styles['info__host--picture']}>
								<Image src={`/assets/${picture}`} alt='Host' width={500} height={500} />
							</div>
						</div>
						<div className={styles['info__rating']}>
							{STAR_RANGE.map((_, index) => (
								<Star key={`star-${index}`} filled={index < rating} />
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ApartmentDetails;
