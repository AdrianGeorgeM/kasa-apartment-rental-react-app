import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import arrowRight from '/public/assets/arrowRight.svg';
import styles from './Dropdown.module.css';

const Dropdown = ({ title, content }) => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleList = useCallback(() => {
		setOpen((prevState) => !prevState);
	}, []);

	useEffect(() => {
		if (open) dropdownRef.current.focus();
	}, [open]);

	return (
		<div className={styles.dropdownItem}>
			<button
				className={`${styles.dropdownItemTitle} ${open && styles.open}`}
				onClick={toggleList}
				ref={dropdownRef}
				aria-expanded={open}
			>
				<p>{title}</p>
				<div className={styles.arrowContainer}>
					<Image
						src={arrowRight}
						alt='Toggle dropdown'
						className={`${styles.dropdownItemArrow} ${open && styles.rotated}`}
						width={20}
						height={20}
					/>
				</div>
			</button>
			<p
				className={`${styles.dropdownList} ${open ? styles.dropOpen : styles.dropClose}`}
			>
				{content}
			</p>
		</div>
	);
};

export default Dropdown;
