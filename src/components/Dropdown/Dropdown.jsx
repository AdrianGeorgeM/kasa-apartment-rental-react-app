import React, { useState, useRef, useCallback } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ title, content }) => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);
	const contentRef = useRef(null);

	const toggleList = useCallback(() => {
		setOpen((prevState) => !prevState);
		if (!open && contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: 'smooth' });
		}
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
				<div className={`${styles.arrowContainer} ${open && styles.rotated}`} />
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
