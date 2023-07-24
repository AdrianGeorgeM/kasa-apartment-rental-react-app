// Header.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Image
				src='/assets/header_logo.svg'
				alt='Logo'
				width={70}
				height={70}
				className={styles.headerLogo}
			/>
			<nav className={styles.nav}>
				<ul className={styles.navbarList}>
					<li className={styles.navbarListItem}>
						<Link href='/'>
							<span className={styles.navbarLink}>Home</span>
						</Link>
					</li>
					<li className={styles.navbarListItem}>
						<Link href='/about'>
							<span className={styles.navbarLink}>About</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
