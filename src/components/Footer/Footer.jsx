import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '/public/assets/footer_logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<Link href='/footer'>
				<Image
					src={footer_logo}
					alt='Footer Logo'
					className={styles.footer__logo}
					width={144}
					height={36}
				/>
			</Link>
			<div className={styles.socialMediaIcons}></div>
			<p className={styles.footer__text}>© {year} Designed and Developed by Adrian</p>
		</footer>
	);
};

export default Footer;
