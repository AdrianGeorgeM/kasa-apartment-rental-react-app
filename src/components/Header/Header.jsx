// Header.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<Image
					src='/assets/header_logo.svg'
					alt='Logo'
					width={100}
					height={100}
					className={styles.headerLogo}
				/>
			</Link>
			<nav className={styles.nav}>
				<ul className={styles.navbarList}>
					<li className={styles.navbarListItem}>
						<Link href='/' className={styles.navbarLink}>
							<span>Home</span>
						</Link>
					</li>
					<li className={styles.navbarListItem}>
						<Link href='/about' className={styles.navbarLink}>
							<span>About</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
