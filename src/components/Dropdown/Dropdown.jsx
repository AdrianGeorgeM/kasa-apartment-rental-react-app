import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import arrowRight from '/public/assets/arrowRight.svg';
import styles from './Dropdown.module.css';

const Dropdown = ({ title, content }) => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);
	const contentRef = useRef(null);

	const toggleList = useCallback(
		(event) => {
			if (event.type === 'click') {
				setOpen((prevState) => !prevState);
				if (!open && contentRef.current) {
					contentRef.current.scrollIntoView({ behavior: 'smooth' });
				}
			}
		},
		[open]
	);

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
				aria-controls='dropdown-content'
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
			<div
				id='dropdown-content'
				ref={contentRef}
				className={`${styles.dropdownList} ${open ? styles.dropOpen : styles.dropClose}`}
				aria-hidden={!open}
			>
				{content}
			</div>
		</div>
	);
};

export default Dropdown;
