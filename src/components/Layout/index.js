import { Inter } from 'next/font/google';
import styles from './layout.module.css'; // Use module.css extension
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
	return (
		<div className={inter.className}>
			<header className={styles.header}>
				<nav>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>© 2023 My Website</footer>
		</div>
	);
};

export default Layout;
// import Link from 'next/link';

// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         {/* more links as needed */}
//       </ul>
//     </nav>
//   </header>
// );

// export default Header;
