// Layout/index.js

import { Inter } from 'next/font/google';
import styles from './layout.module.css'; // Use module.css extension

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
	return (
		<div className={inter.className}>
			<header className={styles.header}>{/* Place your header content here */}</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>{/* Place your footer content here */}</footer>
		</div>
	);
};

export default Layout;
