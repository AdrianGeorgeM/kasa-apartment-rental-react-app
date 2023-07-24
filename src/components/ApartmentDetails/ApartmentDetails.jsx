import React, { useMemo } from 'react';
import Image from 'next/image';
import data from '/src/data/data.json';
import styles from './ApartmentDetails.module.css'; // Import the CSS module styles

const ApartmentDetails = ({ id }) => {
	const apartment = useMemo(() => data.find((datas) => datas.id === id), [id]);

	if (!apartment) {
		// Render a not found message or redirect to a 404 page
		return <div>Apartment not found</div>;
	}

	const range = Array(5).fill(null);

	return (
		<div className={styles.apartment}>
			<main>
				<div className={styles.info}>
					<div className={styles['info__header']}>
						<h1 className={styles['info__header--title']}>{apartment.title}</h1>
						<p className={styles['info__header--location']}>{apartment.location}</p>
						<div className={styles['intro__header--tags']}>
							{apartment.tags.map((tag, index) => (
								<span className={styles.tag} key={index}>
									{tag}
								</span>
							))}
						</div>
					</div>
					<div className={styles['info__profile']}>
						<div className={styles['info__host']}>
							<p className={styles['info__host--name']}>{apartment.host.name}</p>
							<div className={styles['info__host--picture']}>
								<Image
									src={`/assets/${apartment.host.picture}`}
									alt='Host'
									width={500}
									height={500}
								/>
							</div>
						</div>
						<div className={styles['info__rating']}>
							{range.map((_, index) => (
								<Image
									src={
										index < apartment.rating
											? '/assets/star_filled.svg'
											: '/assets/star_blank.svg'
									}
									alt='Star'
									className={styles.star}
									key={index}
									width={50}
									height={50}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ApartmentDetails;
