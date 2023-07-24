import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrowRight from '/public/assets/arrowRight.svg';
import styles from './Dropdown.module.css';

const Dropdown = ({ title, page, content }) => {
	const [open, setOpen] = useState(false);

	const toggleList = () => {
		setOpen(!open);
	};

	return (
		<div className={styles.dropdownItem}>
			<div className={`${styles.dropdownItemTitle} ${page}`} onClick={toggleList}>
				<p>{title}</p>
				<Image
					src={arrowRight}
					alt=''
					className={
						open === false ? styles.dropdownItemArrowUp : styles.dropdownItemArrowDown
					}
					width={20}
					height={20}
				/>
			</div>

			{Array.isArray(page) ? (
				<ul
					className={`${styles.dropdownList} ${
						open ? styles.dropOpen : styles.dropClose
					}`}
				>
					{page.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			) : (
				<p
					className={`${styles.dropdownList} ${
						open ? styles.dropOpen : styles.dropClose
					}`}
				>
					{content}
				</p>
			)}
		</div>
	);
};

export default Dropdown;
